import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../hooks/UseLanguage';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Contact Us',
      address: 'Address',
      phone: 'Phone:',
      fax: 'Fax:',
      email: 'Email:',
      follow: 'Follow Us',
    },
    zh: {
      title: '联系我们',
      address: '地址',
      phone: '电话:',
      fax: '传真:',
      email: '电子邮件:',
      follow: '跟着我们',
    },
    id: {
      title: 'Hubungi Kami',
      address: 'Alamat',
      phone: 'Telepon:',
      fax: 'Faks:',
      email: 'Email:',
      follow: 'Ikuti Kami',
    },
    jp: {
      title: 'お問い合わせ',
      address: '住所',
      phone: '電話:',
      fax: 'ファックス:',
      email: 'メール:',
      follow: 'フォローしてください',
    },
    ko: {
      title: '연락처',
      address: '주소',
      phone: '전화:',
      fax: '팩스:',
      email: '이메일:',
      follow: '우리를 따르세요',
    },
  };

  return (
    <section id="contact" className="w-full py-5 px-8 md:px-[100px] flex flex-col md:flex-row bg-white justify-between gap-x-5">
      <div className="w-full md:w-1/2">
        {/* penutup */}
        <div className="py-8 border-b-2 my-5">
          <p className="text-xl text-center md:text-left font-semibold font-playfair">Sri Rahayu Silver</p>
        </div>

        {/* contact */}
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-[100px]">
          <div className="text-center md:text-left">
            <h1 className="text-xl font-bold text-gray-800 font-playfair mb-6">{content[language].title}</h1>
            <div className="max-w-lg flex flex-col gap-y-2 mb-8">
              <div className="flex justify-center md:justify-start">
                <FaEnvelope className="mr-2 mt-1 text-yellow-400" /> <p className="">srirahayusilverjewelry@gmail.com</p>
              </div>
              <div className="flex justify-center md:justify-start">
                <FaPhone className="mr-2 text-green-600" /> +62 838-3205-0948
              </div>
            </div>
          </div>

          <div>
            <div className="max-w-lg flex flex-col gap-y-2 text-gray-800 font-playfair mb-6 text-center md:text-left">
              <p className="text-xl font-bold text-gray-800 font-playfair mb-6">{content[language].follow}</p>
              <div className="flex gap-x-3 justify-center md:justify-start">
                <a href="https://www.instagram.com/srirahayusilver/" className="hover:scale-110 transition duration-300">
                  <FaInstagram className="text-xl text-pink-600" />
                </a>
                <a href="https://web.facebook.com/srirahayu.silver/?locale=id_ID&_rdc=1&_rdr" className="hover:scale-110 transition duration-300">
                  <FaFacebook className="text-xl text-blue-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div>
        <div className="">
          <div className="py-8 my-5">
            <p className="text-xl font-semibold font-playfair mb-3 text-center md:text-left">{content[language].address}</p>
            <p className="text-m text-center md:text-left">Bongkasa Pertiwi, Abiansemal, Badung Regency, Bali 80352</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
