import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // อย่าลืม Import นะพัท!
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Sidebar /> {/* แถบเมนูจะอยู่ตรงนี้ตลอด */}
      <Routes>
        <Route path="/" element={<About />} /> 
        <Route path="/experience" element={<Experience />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </>
  );
}

export default App;