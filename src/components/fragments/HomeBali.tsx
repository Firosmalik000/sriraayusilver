import { useLanguage } from '../../hooks/UseLanguage';

const HomeBali = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Why Jewelry Making in Bali?',
      description:
        'Express your creativity and have an authentic Indonesian cultural experience through the art of jewelry making. We offer half-day, full-day, and multi-day courses in silver, brass, and wax. It is a wonderful activity to do with your family and friends, and you can bring a beautiful reminder of your time in Bali with you to treasure forever.',
    },
    zh: {
      title: '为什么在巴厘岛制作珠宝？',
      description: '通过珠宝制作艺术表达您的创造力，体验正宗的印度尼西亚文化。我们提供银器、黄铜和蜡的半日、全天和多日课程。 这是一项与家人和朋友一起进行的精彩活动，您可以带回一件美丽的纪念品，永远珍藏您在巴厘岛的时光。',
    },
    id: {
      title: 'Mengapa Membuat Perhiasan di Bali?',
      description:
        'Ekspresikan kreativitas Anda dan dapatkan pengalaman budaya Indonesia yang otentik melalui seni pembuatan perhiasan. Kami menawarkan kursus setengah hari, sehari penuh, dan beberapa hari dalam pembuatan perhiasan perak, kuningan, dan lilin. Ini adalah kegiatan yang luar biasa dilakukan bersama keluarga dan teman, dan Anda dapat membawa kenang-kenangan indah dari waktu Anda di Bali untuk dikenang selamanya.',
    },
    jp: {
      title: 'なぜバリでジュエリー作り？',
      description:
        'ジュエリー作りの芸術を通じて、あなたの創造性を表現し、インドネシアの本物の文化体験を楽しんでください。シルバー、真鍮、ワックスでの半日、一日、または複数日のコースを提供しています。これは家族や友人と一緒に楽しむのに素晴らしいアクティビティであり、バリでの時間を永遠に大切にする美しい思い出を持ち帰ることができます。',
    },
    ko: {
      title: '왜 발리에서 보석 만들기를 해야하나요?',
      description:
        '보석 제작의 예술을 통해 창의력을 표현하고 진정한 인도네시아 문화를 체험하세요. 우리는 은, 황동, 왁스로 이루어진 반나절, 하루, 또는 며칠간의 과정을 제공합니다. 가족과 친구와 함께하기에 멋진 활동이며, 발리에서 보낸 시간을 영원히 간직할 수 있는 아름다운 기념품을 가져갈 수 있습니다.',
    },
  };

  return (
    <div className="w-full min-h-[300px] bg-gray-200 md:px-[100px] px-[50px] py-[100px]">
      <p className="text-xl font-semibold mb-4 text-center">{content[language].title}</p>
      <p className="text-base leading-relaxed text-justify">{content[language].description}</p>
    </div>
  );
};

export default HomeBali;
