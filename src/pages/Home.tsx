import HomeHero from '../components/fragments/HomeHero';

import HomeBali from '../components/fragments/HomeBali';
import HomeGallery from '../components/fragments/HomeGallery';
import HomePackage from '../components/fragments/HomePackage';

const Home = () => {
  return (
    <div className="mt-[100px]">
      <HomeHero />
      <HomeBali />
      <HomePackage />
      <HomeGallery />
    </div>
  );
};

export default Home;
