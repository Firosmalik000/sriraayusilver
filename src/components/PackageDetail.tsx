import { useParams } from 'react-router-dom';
import Pa1 from '../img/p1.jpg';
import Pa2 from '../img/p2.jpg';
import Pa3 from '../img/p3.jpg';
import { useLanguage } from '../hooks/UseLanguage';

const PackageDetail = () => {
  const { language } = useLanguage();
  const { packageId } = useParams<{ packageId: string }>();

  const packageDetails = {
    en: {
      traditional: {
        price: 'IDR 500.000/person',
        details: ['Including 1-7 gr silver (extra silver will be charged based on market value)', 'Duration: 2-3 hours', 'Including free flow water', 'Break time with snacks, coffee & tea'],
        images: [Pa1, Pa2, Pa3],
      },
    },
    zh: {
      traditional: {
        price: 'IDR 500.000/人',
        details: ['包含1-7克银（额外银需按市场价值收费）', '时长：2-3小时', '包含免费畅饮水', '提供小吃、咖啡和茶的休息时间'],
        images: [Pa1, Pa2, Pa3],
      },
    },
    id: {
      traditional: {
        price: 'IDR 500.000/orang',
        details: ['Termasuk 1-7 gr perak (perak tambahan akan dikenakan biaya berdasarkan harga pasar)', 'Durasi: 2-3 jam', 'Termasuk air minum gratis', 'Waktu istirahat dengan camilan, kopi, & teh'],
        images: [Pa1, Pa2, Pa3],
      },
    },
    jp: {
      traditional: {
        price: 'IDR 500.000/人',
        details: ['1-7gの銀を含む（追加の銀は市場価格に基づいて請求されます）', '所要時間: 2-3時間', 'フリーフローウォーターを含む', 'スナック、コーヒー、紅茶の休憩時間を含む'],
        images: [Pa1, Pa2, Pa3],
      },
    },
    ko: {
      traditional: {
        price: 'IDR 500.000/인당',
        details: ['1-7g의 은 포함(추가 은은 시장 가치에 따라 청구됨)', '소요 시간: 2-3시간', '무료 생수 포함', '간식, 커피 및 차 제공'],
        images: [Pa1, Pa2, Pa3],
      },
    },
  };

  const pkg = packageDetails[language][packageId as keyof (typeof packageDetails)[typeof language]];

  if (!pkg) {
    return <div className="text-center text-2xl text-red-500 py-16">Package not found</div>;
  }

  return (
    <div className="px-8 pt-32 pb-16 lg:px-32 lg:pt-[150px] bg-gray-100">
      {/* Title and Price Section */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Traditional Silver Class</h1>
        <p className="text-xl font-semibold text-gray-600">{pkg.price}</p>
      </div>

      {/* Detail Section */}
      <div className="max-w-2xl mx-auto mb-12">
        <ul className="list-disc pl-5 space-y-3 text-lg text-gray-700">
          {pkg.details.map((detail, index) => (
            <p key={index} className="text-center">
              {detail}
            </p>
          ))}
        </ul>
      </div>

      {/* Image Gallery Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pkg.images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img src={image} alt={`Package image ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageDetail;
