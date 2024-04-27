import './App.css'
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/homepage/homepage'
import Menupage from './pages/menupage/menupage';
import Aboutpage from './pages/aboutpage/aboutpage';
import Contactpage from './pages/contactpage/contactpage';
function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/menu" element={<Menupage />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/contact" element={<Contactpage />} />
    </Routes>
  );
}

export default App
