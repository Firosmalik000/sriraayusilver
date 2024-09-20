
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { useLanguage } from '../hooks/UseLanguage';

const ContactUs = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Contact Us',
      description: 'Please click the button below to get in touch with our admin directly',
      whatsapp: 'Contact via WhatsApp',
    },
    zh: {
      title: '联系我们',
      description: '请点击下面的按钮直接与我们的管理员联系',
      whatsapp: '通过 WhatsApp 联系',
    },
    id: {
      title: 'Kontak Kami',
      description: 'Silakan klik tombol di bawah ini untuk menghubungi admin kami secara langsung',
      whatsapp: 'Kontak melalui WhatsApp',
    },
    jp: {
      title: 'お問い合わせ',
      description: '以下のボタンをクリックして、管理者に直接連絡してください',
      whatsapp: 'WhatsAppで連絡する',
    },
    ko: {
      title: '문의하기',
      description: '아래 버튼을 클릭하여 관리자에게 직접 연락해 주세요',
      whatsapp: 'WhatsApp으로 연락하기',
    },
  };

  return (
    <>
      <div className="pt-[200px] pb-10 flex items-center justify-center gap-12 bg-gray-200">
        <div className="flex flex-col w-[300px] gap-4">
          <p className="font-playfair text-4xl font-semibold text-end">{content[language].title}</p>
          <p className="text-gray-700 text-end">{content[language].description}</p>
          <a href="https://wa.me/+6283832050948" target="_blank" rel="noopener noreferrer">
            <div className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold h-12 flex items-center justify-center rounded-lg shadow-md transition-all">{content[language].whatsapp}</div>
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center text-lg font-medium">
            <FaPhoneAlt className="text-gray-700 mr-2" />
            <p className="text-gray-700">+62 838-3205-0948</p>
          </div>
          <div className="flex items-center text-lg font-medium">
            <FaEnvelope className="text-gray-700 mr-2" />
            <p className="text-gray-700">srirahayusilverjewelry@gmail.com</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center text-lg font-medium">
              <FaInstagram className="text-gray-700 mr-2" />
              <p className="text-gray-700">@srirahayusilver</p>
            </div>
            <div className="flex items-center text-lg font-medium">
              <FaFacebookF className="text-gray-700 mr-2" />
              <p className="text-gray-700">srirahayusilver</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-10 mx-[200px] rounded-xl mb-6">
        <iframe width="100%" height="600" src="https://www.google.com/maps?q=-8.535317090224558,115.21206467613822&z=15&output=embed" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
};

export default ContactUs;
