import { useParams } from 'react-router-dom';
import Pa1 from '../img/p1.jpg';
import Pa2 from '../img/p2.jpg';
import Pa3 from '../img/p3.jpg';

const PackageDetail = () => {
  const { packageId } = useParams<{ packageId: string }>();

  const packageDetails = {
    traditional: {
      title: 'Traditional Silver Class',
      price: 'IDR 500.000/person',
      details: ['Including 1-7 gr silver (extra silver will be charged based on market value)', 'Duration: 2-3 hours', 'Including free flow water', 'Break time with snacks, coffee & tea'],
      images: [Pa1, Pa2, Pa3], // Array untuk menyimpan gambar
    },
  };

  const pkg = packageDetails[packageId as keyof typeof packageDetails];

  if (!pkg) {
    return <div className="text-center text-2xl text-red-500 py-16">Package not found</div>;
  }

  return (
    <div className="px-8 pt-32 pb-16 lg:px-32 lg:pt-[150px] bg-gray-100">
      {/* Title and Price Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{pkg.title}</h1>
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
