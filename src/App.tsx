import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Videos from './pages/Videos';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FFF8F0]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;