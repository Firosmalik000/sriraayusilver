import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Gallery from './pages/Gallery';
import useScrollToTop from './hooks/useScrollToTop';

function App() {
  useScrollToTop();
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
