import type { Locale } from "@/lib/site-config";

export type SearchCategory =
  | "scripture"
  | "deity"
  | "festival"
  | "panchang";

export interface SearchEntry {
  id: string;
  category: SearchCategory;
  path: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  keywords: Record<Locale, string[]>;
}

export const searchIndex: SearchEntry[] = [
  // Scriptures
  {
    id: "vedas",
    category: "scripture",
    path: "/scriptures/vedas",
    title: {
      bn: "বেদসমূহ",
      en: "The Vedas",
      hi: "वेद",
    },
    description: {
      bn: "বেদের পরিচয়, জ্ঞান, দর্শন ও হিন্দু ধর্মীয় ঐতিহ্য সম্পর্কে জানুন।",
      en: "Explore the Vedas, their knowledge, philosophy, and place in Hindu tradition.",
      hi: "वेदों के ज्ञान, दर्शन और हिंदू परंपरा में उनके स्थान को जानें।",
    },
    keywords: {
      bn: ["বেদ", "ঋগ্বেদ", "যজুর্বেদ", "সামবেদ", "অথর্ববেদ", "শাস্ত্র"],
      en: ["Veda", "Rigveda", "Yajurveda", "Samaveda", "Atharvaveda", "scripture"],
      hi: ["वेद", "ऋग्वेद", "यजुर्वेद", "सामवेद", "अथर्ववेद", "ग्रंथ"],
    },
  },
  {
    id: "bhagavad-gita",
    category: "scripture",
    path: "/scriptures/bhagavad-gita",
    title: {
      bn: "শ্রীমদ্ভগবদ্গীতা",
      en: "Bhagavad Gita",
      hi: "श्रीमद्भगवद्गीता",
    },
    description: {
      bn: "কর্ম, জ্ঞান, ভক্তি ও জীবনের কর্তব্য সম্পর্কে গীতার শিক্ষা জানুন।",
      en: "Discover teachings on duty, action, knowledge, devotion, and spiritual life.",
      hi: "कर्म, ज्ञान, भक्ति और जीवन के कर्तव्य पर गीता की शिक्षाएँ जानें।",
    },
    keywords: {
      bn: ["গীতা", "কৃষ্ণ", "অর্জুন", "কর্মযোগ", "ভক্তিযোগ", "জ্ঞানযোগ"],
      en: ["Gita", "Krishna", "Arjuna", "Karma Yoga", "Bhakti Yoga", "wisdom"],
      hi: ["गीता", "कृष्ण", "अर्जुन", "कर्मयोग", "भक्तियोग", "ज्ञानयोग"],
    },
  },
  {
    id: "ramayana",
    category: "scripture",
    path: "/scriptures/ramayana",
    title: {
      bn: "রামায়ণ",
      en: "Ramayana",
      hi: "रामायण",
    },
    description: {
      bn: "শ্রীরাম, সীতা, লক্ষ্মণ ও হনুমানের কাহিনি এবং রামায়ণের আদর্শ জানুন।",
      en: "Explore the story of Rama, Sita, Lakshmana, Hanuman, and the ideals of the Ramayana.",
      hi: "राम, सीता, लक्ष्मण, हनुमान और रामायण के आदर्शों को जानें।",
    },
    keywords: {
      bn: ["রাম", "সীতা", "হনুমান", "রাবণ", "অযোধ্যা"],
      en: ["Rama", "Sita", "Hanuman", "Ravana", "Ayodhya", "epic"],
      hi: ["राम", "सीता", "हनुमान", "रावण", "अयोध्या"],
    },
  },
  {
    id: "mahabharata",
    category: "scripture",
    path: "/scriptures/mahabharata",
    title: {
      bn: "মহাভারত",
      en: "Mahabharata",
      hi: "महाभारत",
    },
    description: {
      bn: "পাণ্ডব, কৌরব, কুরুক্ষেত্র ও মহাভারতের গুরুত্বপূর্ণ শিক্ষা জানুন।",
      en: "Learn about the Pandavas, Kauravas, Kurukshetra, and key lessons of the epic.",
      hi: "पांडवों, कौरवों, कुरुक्षेत्र और महाभारत की प्रमुख शिक्षाओं को जानें।",
    },
    keywords: {
      bn: ["পাণ্ডব", "কৌরব", "কুরুক্ষেত্র", "কৃষ্ণ", "অর্জুন"],
      en: ["Pandavas", "Kauravas", "Kurukshetra", "Krishna", "Arjuna", "epic"],
      hi: ["पांडव", "कौरव", "कुरुक्षेत्र", "कृष्ण", "अर्जुन"],
    },
  },

  // Deities
  {
    id: "krishna",
    category: "deity",
    path: "/deities/krishna",
    title: {
      bn: "ভগবান শ্রীকৃষ্ণ",
      en: "Lord Krishna",
      hi: "भगवान श्रीकृष्ण",
    },
    description: {
      bn: "শ্রীকৃষ্ণের জীবন, লীলা, প্রতীক ও ভগবদ্গীতার শিক্ষা সম্পর্কে জানুন।",
      en: "Explore Krishna's life, stories, symbolism, and teachings in the Bhagavad Gita.",
      hi: "श्रीकृष्ण के जीवन, लीलाओं, प्रतीकों और गीता की शिक्षाओं को जानें।",
    },
    keywords: {
      bn: ["কৃষ্ণ", "গোবিন্দ", "গোপাল", "মুরলী", "গীতা"],
      en: ["Krishna", "Govinda", "Gopala", "flute", "Gita", "Vishnu"],
      hi: ["कृष्ण", "गोविंद", "गोपाल", "मुरली", "गीता"],
    },
  },
  {
    id: "durga",
    category: "deity",
    path: "/deities/durga",
    title: {
      bn: "মা দুর্গা",
      en: "Goddess Durga",
      hi: "माँ दुर्गा",
    },
    description: {
      bn: "দুর্গার প্রতীক, মহিষাসুরমর্দিনী রূপ ও দুর্গাপূজার ঐতিহ্য জানুন।",
      en: "Learn about Durga's symbolism, the Mahishasura story, and Durga Puja traditions.",
      hi: "दुर्गा के प्रतीकों, महिषासुर की कथा और दुर्गा पूजा की परंपराओं को जानें।",
    },
    keywords: {
      bn: ["দুর্গা", "শক্তি", "মহিষাসুর", "দুর্গাপূজা", "দেবী"],
      en: ["Durga", "Shakti", "Mahishasura", "Durga Puja", "goddess"],
      hi: ["दुर्गा", "शक्ति", "महिषासुर", "दुर्गा पूजा", "देवी"],
    },
  },
  {
    id: "shiva",
    category: "deity",
    path: "/deities/shiva",
    title: {
      bn: "ভগবান শিব",
      en: "Lord Shiva",
      hi: "भगवान शिव",
    },
    description: {
      bn: "শিবের প্রতীক, ধ্যান, নটরাজ রূপ ও শৈব ঐতিহ্য সম্পর্কে জানুন।",
      en: "Explore Shiva's symbolism, meditation, Nataraja form, and Shaiva traditions.",
      hi: "शिव के प्रतीकों, ध्यान, नटराज रूप और शैव परंपराओं को जानें।",
    },
    keywords: {
      bn: ["শিব", "মহাদেব", "নটরাজ", "ত্রিশূল", "শিবরাত্রি"],
      en: ["Shiva", "Mahadev", "Nataraja", "trident", "Shivaratri"],
      hi: ["शिव", "महादेव", "नटराज", "त्रिशूल", "शिवरात्रि"],
    },
  },
  {
    id: "ganesha",
    category: "deity",
    path: "/deities/ganesha",
    title: {
      bn: "ভগবান গণেশ",
      en: "Lord Ganesha",
      hi: "भगवान गणेश",
    },
    description: {
      bn: "গণেশের প্রতীক, জ্ঞান, শুভ সূচনা ও গণেশ চতুর্থীর ঐতিহ্য জানুন।",
      en: "Discover Ganesha's symbolism, wisdom, new beginnings, and festival traditions.",
      hi: "गणेश के प्रतीकों, ज्ञान, शुभारंभ और उत्सव की परंपराओं को जानें।",
    },
    keywords: {
      bn: ["গণেশ", "গণপতি", "বিঘ্নহর্তা", "গণেশ চতুর্থী"],
      en: ["Ganesha", "Ganapati", "Vinayaka", "obstacle remover", "Ganesh Chaturthi"],
      hi: ["गणेश", "गणपति", "विनायक", "विघ्नहर्ता", "गणेश चतुर्थी"],
    },
  },

  // Festivals
  {
    id: "durga-puja",
    category: "festival",
    path: "/festivals/durga-puja",
    title: {
      bn: "দুর্গাপূজা",
      en: "Durga Puja",
      hi: "दुर्गा पूजा",
    },
    description: {
      bn: "দুর্গাপূজার তাৎপর্য, আচার, ঐতিহ্য ও উদ্‌যাপন সম্পর্কে জানুন।",
      en: "Explore the significance, rituals, traditions, and celebrations of Durga Puja.",
      hi: "दुर्गा पूजा के महत्व, अनुष्ठानों, परंपराओं और उत्सव को जानें।",
    },
    keywords: {
      bn: ["দুর্গা", "মহালয়া", "মহিষাসুর", "শারদীয়া"],
      en: ["Durga", "Mahalaya", "Mahishasura", "autumn festival"],
      hi: ["दुर्गा", "महालय", "महिषासुर", "शारदीय"],
    },
  },
  {
    id: "janmashtami",
    category: "festival",
    path: "/festivals/janmashtami",
    title: {
      bn: "জন্মাষ্টমী",
      en: "Janmashtami",
      hi: "जन्माष्टमी",
    },
    description: {
      bn: "শ্রীকৃষ্ণের জন্মোৎসব, পূজা ও জন্মাষ্টমীর প্রচলিত আচার জানুন।",
      en: "Learn about Krishna's birth celebration, worship, and Janmashtami traditions.",
      hi: "श्रीकृष्ण के जन्मोत्सव, पूजा और जन्माष्टमी की परंपराओं को जानें।",
    },
    keywords: {
      bn: ["কৃষ্ণ জন্ম", "গোকুল", "মথুরা", "উপবাস"],
      en: ["Krishna birth", "Gokul", "Mathura", "fasting"],
      hi: ["कृष्ण जन्म", "गोकुल", "मथुरा", "व्रत"],
    },
  },
  {
    id: "diwali",
    category: "festival",
    path: "/festivals/diwali",
    title: {
      bn: "দীপাবলি",
      en: "Diwali",
      hi: "दीपावली",
    },
    description: {
      bn: "দীপাবলির আলো, লক্ষ্মীপূজা, আচার ও আঞ্চলিক ঐতিহ্য সম্পর্কে জানুন।",
      en: "Discover Diwali's lights, Lakshmi worship, rituals, and regional traditions.",
      hi: "दीपावली के दीप, लक्ष्मी पूजा, अनुष्ठानों और क्षेत्रीय परंपराओं को जानें।",
    },
    keywords: {
      bn: ["দীপাবলি", "দীপোৎসব", "লক্ষ্মী", "আলো"],
      en: ["Diwali", "Deepavali", "Lakshmi", "festival of lights"],
      hi: ["दीपावली", "दिवाली", "लक्ष्मी", "दीपोत्सव"],
    },
  },
  {
    id: "holi",
    category: "festival",
    path: "/festivals/holi",
    title: {
      bn: "হোলি ও দোলযাত্রা",
      en: "Holi",
      hi: "होली",
    },
    description: {
      bn: "হোলি ও দোলযাত্রার রং, কাহিনি, আচার এবং আঞ্চলিক বৈচিত্র্য জানুন।",
      en: "Explore Holi's colors, stories, rituals, and regional variations.",
      hi: "होली के रंग, कथाओं, अनुष्ठानों और क्षेत्रीय विविधताओं को जानें।",
    },
    keywords: {
      bn: ["হোলি", "দোল", "রাধা", "কৃষ্ণ", "রং"],
      en: ["Holi", "Dol", "Radha", "Krishna", "colors"],
      hi: ["होली", "दोल", "राधा", "कृष्ण", "रंग"],
    },
  },
  {
    id: "maha-shivaratri",
    category: "festival",
    path: "/festivals/maha-shivaratri",
    title: {
      bn: "মহাশিবরাত্রি",
      en: "Maha Shivaratri",
      hi: "महाशिवरात्रि",
    },
    description: {
      bn: "শিবের উপাসনা, রাত্রিজাগরণ, উপবাস ও মহাশিবরাত্রির তাৎপর্য জানুন।",
      en: "Learn about Shiva worship, night vigils, fasting, and Maha Shivaratri.",
      hi: "शिव पूजा, रात्रि जागरण, व्रत और महाशिवरात्रि के महत्व को जानें।",
    },
    keywords: {
      bn: ["শিব", "মহাদেব", "উপবাস", "রাত্রিজাগরণ"],
      en: ["Shiva", "Mahadev", "fasting", "night vigil"],
      hi: ["शिव", "महादेव", "व्रत", "रात्रि जागरण"],
    },
  },
  {
    id: "ganesh-chaturthi",
    category: "festival",
    path: "/festivals/ganesh-chaturthi",
    title: {
      bn: "গণেশ চতুর্থী",
      en: "Ganesh Chaturthi",
      hi: "गणेश चतुर्थी",
    },
    description: {
      bn: "গণেশ চতুর্থীর পূজা, মূর্তি, আচার ও উদ্‌যাপনের ঐতিহ্য জানুন।",
      en: "Discover Ganesh Chaturthi worship, idols, rituals, and celebrations.",
      hi: "गणेश चतुर्थी की पूजा, मूर्तियों, अनुष्ठानों और उत्सव को जानें।",
    },
    keywords: {
      bn: ["গণেশ", "গণপতি", "বিনায়ক", "মূর্তি"],
      en: ["Ganesha", "Ganapati", "Vinayaka", "idol"],
      hi: ["गणेश", "गणपति", "विनायक", "मूर्ति"],
    },
  },
  {
    id: "navaratri",
    category: "festival",
    path: "/festivals/navaratri",
    title: {
      bn: "নবরাত্রি",
      en: "Navaratri",
      hi: "नवरात्रि",
    },
    description: {
      bn: "নবরাত্রির নয় রাত, দেবী উপাসনা, আচার ও আঞ্চলিক রীতি জানুন।",
      en: "Explore the nine nights, goddess worship, rituals, and regional Navaratri traditions.",
      hi: "नवरात्रि की नौ रातों, देवी उपासना, अनुष्ठानों और क्षेत्रीय परंपराओं को जानें।",
    },
    keywords: {
      bn: ["দুর্গা", "দেবী", "নয় রাত", "শক্তি"],
      en: ["Durga", "goddess", "nine nights", "Shakti"],
      hi: ["दुर्गा", "देवी", "नौ रातें", "शक्ति"],
    },
  },
  {
    id: "ram-navami",
    category: "festival",
    path: "/festivals/ram-navami",
    title: {
      bn: "রাম নবমী",
      en: "Ram Navami",
      hi: "राम नवमी",
    },
    description: {
      bn: "শ্রীরামের জন্মোৎসব, পূজা ও রাম নবমীর ধর্মীয় তাৎপর্য জানুন।",
      en: "Learn about Rama's birth celebration, worship, and Ram Navami's significance.",
      hi: "श्रीराम के जन्मोत्सव, पूजा और राम नवमी के धार्मिक महत्व को जानें।",
    },
    keywords: {
      bn: ["রাম", "অযোধ্যা", "রামায়ণ", "জন্মোৎসব"],
      en: ["Rama", "Ayodhya", "Ramayana", "birth celebration"],
      hi: ["राम", "अयोध्या", "रामायण", "जन्मोत्सव"],
    },
  },
  {
    id: "rath-yatra",
    category: "festival",
    path: "/festivals/rath-yatra",
    title: {
      bn: "রথযাত্রা",
      en: "Rath Yatra",
      hi: "रथ यात्रा",
    },
    description: {
      bn: "জগন্নাথ, বলভদ্র, সুভদ্রা ও রথযাত্রার প্রচলিত ঐতিহ্য জানুন।",
      en: "Discover Jagannath, Balabhadra, Subhadra, and Rath Yatra traditions.",
      hi: "जगन्नाथ, बलभद्र, सुभद्रा और रथ यात्रा की परंपराओं को जानें।",
    },
    keywords: {
      bn: ["জগন্নাথ", "পুরী", "রথ", "বলরাম"],
      en: ["Jagannath", "Puri", "chariot", "Balabhadra"],
      hi: ["जगन्नाथ", "पुरी", "रथ", "बलभद्र"],
    },
  },
  {
    id: "saraswati-puja",
    category: "festival",
    path: "/festivals/saraswati-puja",
    title: {
      bn: "সরস্বতী পূজা",
      en: "Saraswati Puja",
      hi: "सरस्वती पूजा",
    },
    description: {
      bn: "বিদ্যা, সংগীত ও শিল্পের দেবী সরস্বতীর পূজা ও ঐতিহ্য জানুন।",
      en: "Learn about Saraswati, the goddess of knowledge, music, arts, and her festival.",
      hi: "ज्ञान, संगीत और कला की देवी सरस्वती तथा उनके उत्सव को जानें।",
    },
    keywords: {
      bn: ["সরস্বতী", "বিদ্যা", "শিক্ষা", "বীণা", "বসন্ত পঞ্চমী"],
      en: ["Saraswati", "knowledge", "education", "veena", "Vasant Panchami"],
      hi: ["सरस्वती", "विद्या", "शिक्षा", "वीणा", "वसंत पंचमी"],
    },
  },

  // Panchang
  {
    id: "panchang",
    category: "panchang",
    path: "/panchang",
    title: {
      bn: "পঞ্চাঙ্গ ও হিন্দু ক্যালেন্ডার",
      en: "Panchang and Hindu Calendar",
      hi: "पंचांग और हिंदू कैलेंडर",
    },
    description: {
      bn: "তিথি, নক্ষত্র, যোগ, করণ ও পঞ্জিকা-সম্পর্কিত তথ্য দেখুন।",
      en: "Explore tithi, nakshatra, yoga, karana, and other Panchang information.",
      hi: "तिथि, नक्षत्र, योग, करण और पंचांग की अन्य जानकारी देखें।",
    },
    keywords: {
      bn: ["পঞ্জিকা", "পঞ্চাঙ্গ", "তিথি", "নক্ষত্র", "যোগ", "করণ", "ক্যালেন্ডার"],
      en: ["Panchang", "calendar", "tithi", "nakshatra", "yoga", "karana"],
      hi: ["पंचांग", "कैलेंडर", "तिथि", "नक्षत्र", "योग", "करण"],
    },
  },
];
