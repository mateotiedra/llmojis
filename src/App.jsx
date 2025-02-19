import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Guesser from './pages/Guesser.jsx';

// Manage routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' default element={<Home />} />
        <Route path='/guesser' default element={<Guesser />} />
      </Routes>
    </Router>
  );
}

export default App;
