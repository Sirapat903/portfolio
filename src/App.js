import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // อย่าลืม Import นะพัท!
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <Sidebar /> {/* แถบเมนูจะอยู่ตรงนี้ตลอด */}
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/experience" element={<Experience />} /> 
        <Route path="/resume" element={<Resume />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </>
  );
}

export default App;