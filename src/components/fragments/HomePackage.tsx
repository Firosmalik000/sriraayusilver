import { Link } from 'react-router-dom';
import Pa from '../../img/p2.jpg';
import { useLanguage } from '../../hooks/UseLanguage';

const HomePackage = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      packageTitle: 'Our Package',
      packages: [
        {
          id: 'traditional',

          price: 'IDR 500.000/person',
          imageSrc: Pa,
          imageAlt: 'Traditional Silver Class',
        },
      ],
      showDetail: 'Show Detail',
    },
    zh: {
      packageTitle: '我们的套餐',
      packages: [
        {
          id: 'traditional',

          price: 'IDR 500.000/人',
          imageSrc: Pa,
          imageAlt: '传统银饰课程',
        },
      ],
      showDetail: '显示详情',
    },
    id: {
      packageTitle: 'Paket Kami',
      packages: [
        {
          id: 'traditional',

          price: 'IDR 500.000/orang',
          imageSrc: Pa,
          imageAlt: 'Kelas Perak Tradisional',
        },
      ],
      showDetail: 'Lihat Detail',
    },
    jp: {
      packageTitle: 'パッケージ',
      packages: [
        {
          id: 'traditional',

          price: 'IDR 500.000/人',
          imageSrc: Pa,
          imageAlt: '伝統的な銀細工クラス',
        },
      ],
      showDetail: '詳細を見る',
    },
    ko: {
      packageTitle: '우리의 패키지',
      packages: [
        {
          id: 'traditional',

          price: 'IDR 500.000/인당',
          imageSrc: Pa,
          imageAlt: '전통 실버 클래스',
        },
      ],
      showDetail: '세부 사항 보기',
    },
  };

  return (
    <div className="px-8 py-16 lg:px-32 lg:py-24 bg-gray-100">
      <div className="mb-12">
        <p className="text-center text-4xl font-bold text-gray-800">{content[language].packageTitle}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {content[language].packages.map((pkg, index) => (
          <div key={index} className="h-[350px] w-full border rounded-lg shadow-md overflow-hidden bg-white transform hover:scale-105 transition-transform duration-300">
            <img src={pkg.imageSrc} alt={pkg.imageAlt} className="h-[230px] w-full object-cover " />
            <div className="flex flex-col gap-2 px-4 py-2 border-t">
              <p className="text-center font-semibold text-lg text-gray-700">Traditional Silver Class</p>
              <p className="text-center text-sm text-gray-600">{pkg.price}</p>
              <Link to={`/package/${pkg.id}`}>
                <p className="text-center font-bold text-blue-500 hover:underline">{content[language].showDetail}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePackage;
