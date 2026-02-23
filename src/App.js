import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        {/* ใส่ id เพื่อให้ปุ่มบน Navbar รู้ว่าจะเลื่อนไปตรงไหน */}
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="resume"><Resume /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;