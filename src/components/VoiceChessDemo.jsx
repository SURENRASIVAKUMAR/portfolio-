import React, { useState, useEffect, useCallback } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

const VoiceChessDemo = () => {
  const [game, setGame] = useState(new Chess());
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [statusMsg, setStatusMsg] = useState('Click microphone to start voice commands');
  const [errorMsg, setErrorMsg] = useState('');

  // Speech Recognition Setup
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  if (recognition) {
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
  }

  const handleVoiceCommand = useCallback((command) => {
    setTranscript(command);
    setErrorMsg('');
    const lowerCmd = command.toLowerCase().trim();
    
    // Very basic parsing for chess moves (e.g. "e4", "knight f3", "pawn to e4")
    // This is a simplified demo parser
    
    // Extract words
    const words = lowerCmd.replace(/to/g, '').split(' ').filter(w => w);
    
    // Find squares (e.g. e4, f3)
    const squareRegex = /[a-h][1-8]/;
    let targetSquare = null;
    let sourceSquare = null;
    let piece = '';
    
    for (const word of words) {
      if (squareRegex.test(word)) {
        if (!targetSquare) targetSquare = word;
        else sourceSquare = targetSquare, targetSquare = word; // if 2 squares mentioned
      } else if (['knight', 'bishop', 'rook', 'queen', 'king', 'pawn'].includes(word)) {
        piece = word;
      }
    }
    
    // Try to execute move
    let moveAttempt = null;
    
    try {
      if (sourceSquare && targetSquare) {
        // Example: "e2 e4"
        moveAttempt = game.move({ from: sourceSquare, to: targetSquare, promotion: 'q' });
      } else if (targetSquare) {
        // Get all legal moves
        const moves = game.moves({ verbose: true });
        
        // Find a move that lands on targetSquare
        const matchingMoves = moves.filter(m => m.to === targetSquare);
        
        if (matchingMoves.length === 1) {
          moveAttempt = game.move(matchingMoves[0].san);
        } else if (matchingMoves.length > 1) {
          // If multiple pieces can move there, try to disambiguate by piece
          if (piece) {
            const pieceChar = piece === 'knight' ? 'n' : piece[0];
            const pieceMove = matchingMoves.find(m => m.piece === pieceChar);
            if (pieceMove) moveAttempt = game.move(pieceMove.san);
          } else {
            // Default to pawn if no piece specified (common for pawn moves)
            const pawnMove = matchingMoves.find(m => m.piece === 'p');
            if (pawnMove) moveAttempt = game.move(pawnMove.san);
          }
        }
      } else {
        // SAN matching (e.g. "Nf3")
        moveAttempt = game.move(words.join(''));
      }
      
      if (moveAttempt) {
        setGame(new Chess(game.fen()));
        setStatusMsg(`Moved: ${moveAttempt.san}`);
      } else {
        setErrorMsg(`Could not parse move from: "${command}"`);
      }
    } catch (err) {
      setErrorMsg(`Invalid move: "${command}"`);
    }
  }, [game]);

  const toggleListen = () => {
    if (!recognition) {
      setErrorMsg("Your browser does not support Speech Recognition.");
      return;
    }
    if (isListening) {
      recognition.stop();
      setIsListening(false);
      setStatusMsg("Voice recognition stopped.");
    } else {
      try {
        recognition.start();
        setIsListening(true);
        setStatusMsg("Listening... (Try saying 'Pawn to E4')");
        
        recognition.onresult = (event) => {
          const current = event.resultIndex;
          const transcriptResult = event.results[current][0].transcript;
          handleVoiceCommand(transcriptResult);
          setIsListening(false);
        };
        
        recognition.onspeechend = () => {
          recognition.stop();
          setIsListening(false);
        };
        
        recognition.onerror = (event) => {
          setErrorMsg(`Error occurred: ${event.error}`);
          setIsListening(false);
          recognition.stop();
        };
      } catch(e) {
         setErrorMsg("Microphone access denied or already listening.");
         setIsListening(false);
      }
    }
  };

  function onDrop(sourceSquare, targetSquare) {
    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q',
      });
      if (move === null) return false;
      setGame(new Chess(game.fen()));
      setStatusMsg(`Moved: ${move.san}`);
      return true;
    } catch (e) {
      return false;
    }
  }

  const resetGame = () => {
    setGame(new Chess());
    setTranscript('');
    setStatusMsg('Game reset.');
    setErrorMsg('');
  };

  return (
    <div style={{
      padding: '40px',
      backgroundColor: '#1e293b',
      borderRadius: '16px',
      marginTop: '40px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
      border: '1px solid rgba(255,255,255,0.05)'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '10px', textAlign: 'center' }}>Voice Chess Interactive Demo</h2>
      <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '30px' }}>Experience a simple Web-based voice chess match</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center', alignItems: 'flex-start' }}>
        
        {/* Chess Board */}
        <div style={{ width: '100%', maxWidth: '400px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', borderRadius: '4px', overflow: 'hidden' }}>
          <Chessboard 
            position={game.fen()} 
            onPieceDrop={onDrop}
            customDarkSquareStyle={{ backgroundColor: '#475569' }}
            customLightSquareStyle={{ backgroundColor: '#cbd5e1' }}
          />
        </div>

        {/* Controls */}
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ backgroundColor: '#0f172a', padding: '20px', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '15px', color: '#60a5fa' }}>Voice Command</h3>
            <button 
              onClick={toggleListen}
              style={{
                width: '100%',
                padding: '15px',
                backgroundColor: isListening ? '#ef4444' : '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                transition: 'background-color 0.3s'
              }}
            >
              {isListening ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
                  Stop Listening
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
                  Speak Move (e.g. "E4")
                </>
              )}
            </button>
            
            <div style={{ marginTop: '20px' }}>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '5px' }}>Status:</p>
              <div style={{ padding: '10px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '6px', minHeight: '40px', color: '#fff' }}>
                {statusMsg}
              </div>
            </div>
            
            {transcript && (
              <div style={{ marginTop: '15px' }}>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '5px' }}>Heard:</p>
                <div style={{ padding: '10px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '6px', color: '#fbbf24', fontStyle: 'italic' }}>
                  "{transcript}"
                </div>
              </div>
            )}

            {errorMsg && (
              <div style={{ marginTop: '15px', color: '#f87171', fontSize: '0.9rem', padding: '10px', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderRadius: '6px' }}>
                {errorMsg}
              </div>
            )}
          </div>
          
          <button 
            onClick={resetGame}
            style={{
              padding: '12px',
              backgroundColor: 'transparent',
              color: '#94a3b8',
              border: '1px solid #475569',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#fff'}
            onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
          >
            Reset Board
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default VoiceChessDemo;
