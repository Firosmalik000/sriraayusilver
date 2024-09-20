import HomeHero from '../components/fragments/HomeHero';

import HomeBali from '../components/fragments/HomeBali';
import HomeGallery from '../components/fragments/HomeGallery';

const Home = () => {
  return (
    <div className="mt-[100px]">
      <HomeHero />
      <HomeBali />
      <HomeGallery />
    </div>
  );
};

export default Home;
