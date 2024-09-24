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
      <div className="pt-[200px] pb-20 flex flex-col md:flex-row items-center justify-center gap-12 bg-gray-200">
        {/* Contact Info Section */}
        <div className="flex flex-col w-full max-w-md px-6 gap-4">
          <p className="font-playfair text-4xl font-semibold text-center md:text-end">{content[language].title}</p>
          <p className="text-gray-700 text-center md:text-end">{content[language].description}</p>
          <a href="https://wa.me/+6283832050948" target="_blank" rel="noopener noreferrer">
            <div className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold h-12 flex items-center justify-center rounded-lg shadow-md transition-all">{content[language].whatsapp}</div>
          </a>
        </div>

        {/* Contact Details Section */}
        <div className="flex flex-col gap-4 w-full max-w-md px-6 ">
          <div className="flex items-center text-lg font-medium justify-center md:justify-start">
            <FaPhoneAlt className="text-gray-700 mr-2" />
            <p className="text-gray-700">+62 838-3205-0948</p>
          </div>
          <div className="flex items-center text-lg font-medium justify-center md:justify-start">
            <FaEnvelope className="text-gray-700 mr-2" />
            <p className="text-gray-700">srirahayusilverjewelry@gmail.com</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center text-lg font-medium justify-center md:justify-start">
              <FaInstagram className="text-gray-700 mr-2" />
              <p className="text-gray-700">@srirahayusilver</p>
            </div>
            <div className="flex items-center text-lg font-medium justify-center md:justify-start">
              <FaFacebookF className="text-gray-700 mr-2" />
              <p className="text-gray-700">srirahayusilver</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-10 px-4 md:px-20 lg:px-40 xl:px-60 rounded-xl mb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.341523280116!2d115.23981849999998!3d-8.4661314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd222e084668957%3A0xf413379de640c8b9!2sSri%20Rahayu%20Silver%20(Silver%20Class%20and%20Jewerly)!5e0!3m2!1sen!2sid!4v1727090472401!5m2!1sen!2sid"
          width="100%"
          height="600"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
      {/* Map Section */}
    </>
  );
};

export default ContactUs;
