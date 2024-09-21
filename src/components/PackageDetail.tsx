import { useParams } from 'react-router-dom';

const PackageDetail = () => {
  const { packageId } = useParams<{ packageId: string }>(); // Mengambil parameter dari URL

  const packageDetails = {
    traditional: {
      title: 'Traditional Silver Class',
      price: 'IDR 500.000/person',
      details: ['Including 1-7 gr silver (extra silver will be charged based on market value)', 'Duration: 2-3 hours', 'Including free flow water', 'Break time with snacks, coffee & tea'],
    },
  };

  const pkg = packageDetails[packageId as keyof typeof packageDetails];

  if (!pkg) {
    return <div>Package not found</div>;
  }

  return (
    <div className="px-8 pt-32 pb-16 lg:px-32 lg:pt-[150px] bg-gray-100 ">
      <div className="mb-12">
        <p className="text-center text-4xl font-bold text-gray-800">{pkg.title}</p>
        <p className="text-center text-xl font-semibold text-gray-600">{pkg.price}</p>
      </div>
      <div className="max-w-2xl mx-auto">
        <ul className="list-disc pl-5 space-y-3 text-lg">
          {pkg.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PackageDetail;
