import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/UseLanguage';
import { FaTimes } from 'react-icons/fa';
import { IoMenuSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for controlling menu visibility
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const texts = {
    en: {
      home: 'Home',
      about_us: 'About Us',
      tour: 'Tour',
      gallery: 'Gallery',
      contact_us: 'Contact Us',
    },
    id: {
      home: 'Beranda',
      about_us: 'Tentang Kami',
      tour: 'Tur',
      gallery: 'Galeri',
      contact_us: 'Kontak Kami',
    },
    zh: {
      home: '首页',
      about_us: '关于我们',
      tour: '旅游',
      gallery: '画廊',
      contact_us: '联系我们',
    },
    jp: {
      home: 'ホーム',
      about_us: '私たちについて',
      tour: 'ツアー',
      gallery: 'ギャラリー',
      contact_us: 'お問い合わせ',
    },
    ko: {
      home: '홈',
      about_us: '소개',
      tour: '투어',
      gallery: '갤러리',
      contact_us: '연락처',
    },
  };

  const classOptionNav = 'cursor-pointer font-semibold';
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`fixed top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-white shadow-lg text-black' : 'bg-gray-600 text-white'}`}>
      <div className="container mx-auto flex items-center justify-between h-[100px] px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <p className="text-2xl md:text-3xl font-bold font-playfair">Sri Rahayu Silver</p>
        </div>

        <div className="hidden lg:flex items-center gap-x-6">
          <div className=" items-center gap-x-4">
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 cursor-pointer">
              <option value="en">English</option>
              <option value="id">Indonesia</option>
              <option value="zh">中文</option>
              <option value="jp">日本語</option>
              <option value="ko">한국어</option>
            </select>
          </div>
          <Link to="/">
            <div className={classOptionNav}>{texts[language].home}</div>
          </Link>
          <Link to="/about-us">
            <div className={classOptionNav}>{texts[language].about_us}</div>
          </Link>
          <Link to="/tour">
            <div className={classOptionNav}>{texts[language].tour}</div>
          </Link>
          <Link to="/gallery">
            <div className={classOptionNav}>{texts[language].gallery}</div>
          </Link>
          <Link to="/contact-us">
            <div className={classOptionNav}>{texts[language].contact_us}</div>
          </Link>
        </div>
        <div className="lg:hidden items-center gap-x-4">
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 cursor-pointer">
            <option value="en">English</option>
            <option value="id">Indonesia</option>
            <option value="zh">中文</option>
            <option value="jp">日本語</option>
            <option value="ko">한국어</option>
          </select>
        </div>
        <button className="lg:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <IoMenuSharp size={30} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-700 text-white flex flex-col items-center justify-center pt-16">
          <div className="absolute top-4 right-4 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            <FaTimes size={30} />
          </div>
          <div className="flex flex-col gap-y-4 text-xl">
            <Link to="/">
              <div className={'text-center'}>{texts[language].home}</div>
            </Link>
            <Link to="/about-us">
              <div className={'text-center'}>{texts[language].about_us}</div>
            </Link>
            <Link to="/tour">
              <div className={'text-center'}>{texts[language].tour}</div>
            </Link>
            <Link to="/gallery">
              <div className={'text-center'}>{texts[language].gallery}</div>
            </Link>
            <Link to="/contact-us">
              <div className={'text-center'}>{texts[language].contact_us}</div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
