import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { AboutYou } from './pages/About-you';
import { Experience } from './pages/Experience';
import { Hobby } from './pages/Hobby';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AboutYou />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/hobby" element={<Hobby />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
