import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas
  }, [pathname]); // Berjalan setiap pathname berubah
};

export default useScrollToTop;
