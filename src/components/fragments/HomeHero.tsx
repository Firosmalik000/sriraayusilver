import { useState, useEffect } from 'react';
import HeroImage from '../../img/hero2.jpg';
import HeroImage2 from '../../img/hero1.jpg';

const HomeHero = () => {
  const images = [HeroImage, HeroImage2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: 'cover',
      }}
    >
      <button className="absolute left-5 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-700 text-white rounded-md shadow-lg hover:bg-gray-600 transition duration-200" onClick={prevImage}>
        Prev
      </button>
      <button className="absolute right-5 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-700 text-white rounded-md shadow-lg hover:bg-gray-600 transition duration-200" onClick={nextImage}>
        Next
      </button>
    </section>
  );
};

export default HomeHero;
