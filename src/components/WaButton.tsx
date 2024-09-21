import { FaWhatsapp } from 'react-icons/fa';

const WaButton = () => {
  return (
    <>
      <a href="https://wa.me/+6283832050948" target="_blank" rel="noopener noreferrer">
        <div className="fixed bottom-[50px] right-5  bg-green-600 px-3 py-3 rounded-full">
          <FaWhatsapp className="text-white text-4xl" />
        </div>
      </a>
    </>
  );
};

export default WaButton;
