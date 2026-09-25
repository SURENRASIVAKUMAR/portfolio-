import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.jpg';

export const projects = [
  { 
    id: 1, 
    title: 'AI-Powered Skill Swap Platform', 
    image: project1,
    desc: 'A credit-based peer-to-peer skill exchange platform utilizing advanced AI algorithms to match users based on their competencies and needs.',
    features: ['TF-IDF & Cosine Similarity matching', 'Credit-based economy system', 'Real-time secure messaging'],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Python', 'NLP'],
    github: 'https://github.com/SURENRASIVAKUMAR/Ai-powered-skill-swap-platform',
    demo: '#'
  },
  { 
    id: 2, 
    title: 'Voice Controlled Chess Game', 
    image: project3,
    desc: 'An innovative, fully offline chess application that allows users to play using natural voice commands, designed with a focus on accessibility.',
    features: ['Offline voice recognition', 'Advanced chess engine integration', 'Accessibility-first design'],
    technologies: ['Python', 'Pygame', 'VOSK AI', 'Stockfish'],
    github: 'https://github.com/SURENRASIVAKUMAR/Voice-chess-game',
    demo: '#'
  },
  { 
    id: 3, 
    title: 'TrekPath — Smart Travel Planner', 
    image: project2,
    desc: 'A comprehensive full-stack application that dynamically generates customized travel itineraries and provides a secure, token-based user dashboard.',
    features: ['Dynamic route generation', 'Token-based authentication (JWT)', 'Interactive map integration'],
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Maps API'],
    github: 'https://github.com/SURENRASIVAKUMAR/trekpath-',
    demo: '#'
  },
];
