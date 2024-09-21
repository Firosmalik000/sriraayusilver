import { Link } from 'react-router-dom';

const HomePackage = () => {
  const packages = [
    {
      id: 'traditional', // Ini akan menjadi id untuk routing
      title: 'Traditional Silver Class',
      price: 'IDR 500.000/person',
      imageSrc: '',
      imageAlt: 'Traditional Silver Class',
    },
    // Tambahkan package lainnya di sini
  ];

  return (
    <div className="px-8 py-16 lg:px-32 lg:py-24 bg-gray-100">
      <div className="mb-12">
        <p className="text-center text-4xl font-bold text-gray-800">Our Package</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {packages.map((pkg, index) => (
          <div key={index} className="h-[300px] w-full border rounded-lg shadow-md overflow-hidden bg-white transform hover:scale-105 transition-transform duration-300">
            <img src={pkg.imageSrc} alt={pkg.imageAlt} className="h-[160px] w-full object-cover mb-4" />
            <div className="flex flex-col gap-2 px-4 py-2 border-t">
              <p className="text-center font-semibold text-lg text-gray-700">{pkg.title}</p>
              <p className="text-center text-sm text-gray-600">{pkg.price}</p>
              <Link to={`/package/${pkg.id}`}>
                <p className="text-center font-bold text-blue-500 hover:underline">Show Detail</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePackage;
