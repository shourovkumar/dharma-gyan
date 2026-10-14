import type { Locale } from "@/lib/site-config";

export type FestivalSlug =
  | "durga-puja"
  | "janmashtami"
  | "diwali"
  | "holi"
  | "maha-shivaratri"
  | "ganesh-chaturthi"
  | "navaratri"
  | "ram-navami"
  | "rath-yatra"
  | "saraswati-puja";

export type LocalizedFestival = {
  category: string;
  title: string;
  description: string;
  timing: string;
  regions: string;
  significance: string;
  traditions: string[];
};

export type FestivalRecord = {
  slug: FestivalSlug;
  icon: string;
  content: Record<Locale, LocalizedFestival>;
};

export const festivals = [
  {
    slug: "durga-puja",
    icon: "🌺",
    content: {
      bn: {
        category: "দেবী উৎসব",
        title: "দুর্গাপূজা",
        description:
          "মা দুর্গার উপাসনা, মহিষাসুরবধের আখ্যান এবং শক্তির উৎসব।",
        timing:
          "বাংলা অঞ্চলের শরৎকালীন দুর্গাপূজা সাধারণত আশ্বিন মাসের শুক্লপক্ষের ষষ্ঠী থেকে দশমী পর্যন্ত পালিত হয়।",
        regions:
          "বাংলাদেশ, পশ্চিমবঙ্গ এবং বিশ্বের বিভিন্ন বাংলা-ভাষী সম্প্রদায়ে বিশেষভাবে গুরুত্বপূর্ণ।",
        significance:
          "দুর্গাপূজা দেবীশক্তি, অশুভের বিরুদ্ধে সংগ্রাম এবং সামষ্টিক ভক্তির সঙ্গে যুক্ত। দেবী মাহাত্ম্যসহ বিভিন্ন ধর্মীয় গ্রন্থে দুর্গার বিজয়ের আখ্যান পাওয়া যায়।",
        traditions: [
          "ষষ্ঠী, সপ্তমী, অষ্টমী, নবমী ও দশমীর বিভিন্ন আচার।",
          "দুর্গাপ্রতিমা, মণ্ডপ এবং সামষ্টিক পূজা।",
          "অঞ্জলি, সাংস্কৃতিক অনুষ্ঠান এবং বিজয়া দশমীর রীতি।",
        ],
      },
      en: {
        category: "Goddess festival",
        title: "Durga Puja",
        description:
          "A celebration of Goddess Durga, her victory over Mahishasura, and divine power.",
        timing:
          "The autumn Durga Puja observed in Bengali traditions generally spans Shashthi through Dashami in the bright half of Ashwin.",
        regions:
          "Especially important in Bangladesh, West Bengal, and Bengali communities around the world.",
        significance:
          "Durga Puja is associated with divine feminine power, the struggle against destructive forces, and collective devotion. Narratives of Durga's victory appear in texts including the Devi Mahatmya.",
        traditions: [
          "Rituals associated with Shashthi, Saptami, Ashtami, Navami, and Dashami.",
          "Images of Durga, decorated pandals, and communal worship.",
          "Offerings, cultural programmes, and Vijayadashami traditions.",
        ],
      },
      hi: {
        category: "देवी उत्सव",
        title: "दुर्गा पूजा",
        description:
          "माँ दुर्गा, महिषासुर पर उनकी विजय और दिव्य शक्ति का उत्सव।",
        timing:
          "बंगाली परंपराओं में शारदीय दुर्गा पूजा सामान्यतः आश्विन मास के शुक्ल पक्ष की षष्ठी से दशमी तक होती है।",
        regions:
          "बांग्लादेश, पश्चिम बंगाल और विश्वभर के बंगाली समुदायों में विशेष रूप से महत्वपूर्ण।",
        significance:
          "दुर्गा पूजा देवीशक्ति, विनाशकारी शक्तियों के विरुद्ध संघर्ष और सामूहिक भक्ति से जुड़ी है। देवी माहात्म्य सहित अनेक ग्रंथों में दुर्गा की विजय की कथाएँ मिलती हैं।",
        traditions: [
          "षष्ठी, सप्तमी, अष्टमी, नवमी और दशमी से जुड़े अनुष्ठान।",
          "दुर्गा प्रतिमाएँ, सजे हुए पंडाल और सामूहिक पूजा।",
          "अर्पण, सांस्कृतिक कार्यक्रम और विजयादशमी की परंपराएँ।",
        ],
      },
    },
  },

  {
    slug: "janmashtami",
    icon: "🪈",
    content: {
      bn: {
        category: "কৃষ্ণ উৎসব",
        title: "জন্মাষ্টমী",
        description:
          "শ্রীকৃষ্ণের জন্মস্মরণে পালিত ভক্তি ও ধর্মীয় উৎসব।",
        timing:
          "অনেক ঐতিহ্যে ভাদ্র মাসের কৃষ্ণপক্ষের অষ্টমী তিথিতে জন্মাষ্টমী পালিত হয়; অঞ্চলভেদে গণনা আলাদা হতে পারে।",
        regions:
          "ভারত, বাংলাদেশ এবং বিশ্বের বহু বৈষ্ণব ও কৃষ্ণভক্ত সম্প্রদায়ে পালিত হয়।",
        significance:
          "জন্মাষ্টমী শ্রীকৃষ্ণের জন্মস্মরণের উৎসব। কৃষ্ণকে কেন্দ্র করে ভক্তি, নৈতিক শিক্ষা এবং ভগবদ্গীতার দর্শন বহু সম্প্রদায়ে গুরুত্বপূর্ণ স্থান পেয়েছে।",
        traditions: [
          "কৃষ্ণের পূজা, স্তোত্র এবং ভক্তিমূলক সংগীত।",
          "কৃষ্ণের বাল্যলীলা ও জন্মকাহিনি পাঠ।",
          "উপবাস এবং মধ্যরাতকেন্দ্রিক উপাসনা—স্থানীয় প্রথা অনুসারে।",
        ],
      },
      en: {
        category: "Krishna festival",
        title: "Krishna Janmashtami",
        description:
          "A devotional festival commemorating the birth of Sri Krishna.",
        timing:
          "Many traditions observe Janmashtami on Ashtami in the dark fortnight of Bhadrapada, though regional calculations can differ.",
        regions:
          "Observed in India, Bangladesh, and many Krishna-devotional communities worldwide.",
        significance:
          "Janmashtami commemorates the birth of Krishna. Devotion to Krishna, moral teachings, and the philosophy of the Bhagavad Gita hold an important place in many communities.",
        traditions: [
          "Worship, hymns, and devotional music dedicated to Krishna.",
          "Readings and performances of Krishna's birth and childhood stories.",
          "Fasting and midnight observances according to local customs.",
        ],
      },
      hi: {
        category: "कृष्ण उत्सव",
        title: "कृष्ण जन्माष्टमी",
        description:
          "श्रीकृष्ण के जन्म की स्मृति में मनाया जाने वाला भक्तिपूर्ण पर्व।",
        timing:
          "कई परंपराओं में जन्माष्टमी भाद्रपद मास के कृष्ण पक्ष की अष्टमी को मनाई जाती है; क्षेत्रीय गणना भिन्न हो सकती है।",
        regions:
          "भारत, बांग्लादेश और विश्वभर के अनेक कृष्णभक्त समुदायों में मनाया जाता है।",
        significance:
          "जन्माष्टमी श्रीकृष्ण के जन्म का स्मरण कराती है। अनेक समुदायों में कृष्णभक्ति, नैतिक शिक्षाओं और भगवद्गीता के दर्शन का महत्वपूर्ण स्थान है।",
        traditions: [
          "कृष्ण पूजा, स्तोत्र और भक्ति संगीत।",
          "कृष्ण के जन्म और बाल लीलाओं का पाठ या मंचन।",
          "स्थानीय परंपराओं के अनुसार व्रत और मध्यरात्रि की पूजा।",
        ],
      },
    },
  },

  {
    slug: "diwali",
    icon: "🪔",
    content: {
      bn: {
        category: "আলোর উৎসব",
        title: "দীপাবলি",
        description:
          "আলো, সমৃদ্ধি এবং বিভিন্ন ধর্মীয় ঐতিহ্যের গুরুত্বপূর্ণ উৎসব।",
        timing:
          "দীপাবলির প্রধান দিন অনেক ঐতিহ্যে কার্তিক মাসের অমাবস্যায় পালিত হয়; উৎসবের অন্যান্য দিন ও নিয়ম সম্প্রদায়ভেদে ভিন্ন।",
        regions:
          "ভারত, বাংলাদেশ এবং বিশ্বের বিভিন্ন হিন্দু সম্প্রদায়ে পালিত হয়।",
        significance:
          "দীপাবলি আলো, আশাবাদ এবং শুভতার সঙ্গে যুক্ত। বিভিন্ন অঞ্চলে লক্ষ্মীপূজা, রামায়ণ-সংক্রান্ত কাহিনি এবং অন্যান্য ধর্মীয় ঐতিহ্যের সঙ্গে উৎসবটির সম্পর্ক রয়েছে।",
        traditions: [
          "প্রদীপ ও আলো দিয়ে ঘর সাজানো।",
          "লক্ষ্মীপূজা এবং পারিবারিক প্রার্থনা—স্থানীয় প্রথা অনুসারে।",
          "মিষ্টি বিতরণ, উপহার এবং সামষ্টিক উদ্‌যাপন।",
        ],
      },
      en: {
        category: "Festival of lights",
        title: "Diwali",
        description:
          "A major festival of lights, prosperity, and diverse religious traditions.",
        timing:
          "The principal Diwali observance falls on Kartika Amavasya in many traditions. Other festival days and customs differ among communities.",
        regions:
          "Celebrated in India, Bangladesh, and Hindu communities around the world.",
        significance:
          "Diwali is associated with light, hope, and auspiciousness. Depending on the region, it is connected with Lakshmi worship, Ramayana narratives, and other religious traditions.",
        traditions: [
          "Decorating homes with lamps and lights.",
          "Lakshmi worship and family prayers according to local customs.",
          "Sharing sweets, exchanging gifts, and community celebrations.",
        ],
      },
      hi: {
        category: "दीपों का उत्सव",
        title: "दीपावली",
        description:
          "प्रकाश, समृद्धि और विविध धार्मिक परंपराओं का प्रमुख पर्व।",
        timing:
          "कई परंपराओं में दीपावली का मुख्य दिन कार्तिक अमावस्या को होता है; अन्य दिनों और रीति-रिवाजों में अंतर हो सकता है।",
        regions:
          "भारत, बांग्लादेश और विश्वभर के अनेक हिंदू समुदायों में मनाई जाती है।",
        significance:
          "दीपावली प्रकाश, आशा और मंगल से जुड़ी है। क्षेत्र के अनुसार इसका संबंध लक्ष्मी पूजा, रामायण की कथाओं और अन्य धार्मिक परंपराओं से होता है।",
        traditions: [
          "दीयों और रोशनी से घर सजाना।",
          "स्थानीय परंपराओं के अनुसार लक्ष्मी पूजा और पारिवारिक प्रार्थना।",
          "मिठाइयाँ बाँटना, उपहार देना और सामुदायिक उत्सव।",
        ],
      },
    },
  },

  {
    slug: "holi",
    icon: "🎨",
    content: {
      bn: {
        category: "বসন্ত উৎসব",
        title: "হোলি",
        description:
          "রং, বসন্ত এবং বিভিন্ন পৌরাণিক ঐতিহ্যের সঙ্গে যুক্ত উৎসব।",
        timing:
          "অনেক ঐতিহ্যে ফাল্গুন মাসের পূর্ণিমাকে কেন্দ্র করে হোলি পালিত হয়; হোলিকা দহন ও রঙের উৎসবের দিন আলাদা হতে পারে।",
        regions:
          "উত্তর ভারতসহ বিভিন্ন অঞ্চলে বিশেষভাবে জনপ্রিয়; দক্ষিণ এশিয়া ও প্রবাসী সম্প্রদায়েও পালিত হয়।",
        significance:
          "হোলি বসন্ত, সামাজিক মিলন এবং বিভিন্ন অঞ্চলে প্রচলিত ভক্তিমূলক কাহিনির সঙ্গে যুক্ত। প্রহ্লাদ ও হোলিকার আখ্যান এর সঙ্গে সম্পর্কিত একটি পরিচিত ঐতিহ্য।",
        traditions: [
          "হোলিকা দহনসংক্রান্ত আচার—প্রচলিত নিয়ম অনুযায়ী।",
          "রং, সংগীত ও সামাজিক আনন্দ-উদ্‌যাপন।",
          "বিভিন্ন অঞ্চলে কৃষ্ণ ও রাধাকে ঘিরে ভক্তিমূলক আয়োজন।",
        ],
      },
      en: {
        category: "Spring festival",
        title: "Holi",
        description:
          "A festival associated with colour, spring, and diverse sacred narratives.",
        timing:
          "Many traditions observe Holi around the full moon of Phalguna. Holika Dahan and the celebration of colours may occur on separate days.",
        regions:
          "Especially popular in northern India, and also celebrated in other regions and diaspora communities.",
        significance:
          "Holi is associated with spring, social gathering, and devotional narratives found in different regions. The story of Prahlada and Holika is one well-known tradition linked to the festival.",
        traditions: [
          "Holika Dahan observances according to local customs.",
          "Colours, music, and community celebrations.",
          "Regional devotional events associated with Krishna and Radha.",
        ],
      },
      hi: {
        category: "वसंत उत्सव",
        title: "होली",
        description:
          "रंग, वसंत और विविध धार्मिक कथाओं से जुड़ा उत्सव।",
        timing:
          "कई परंपराओं में होली फाल्गुन मास की पूर्णिमा के आसपास मनाई जाती है। होलिका दहन और रंगों का उत्सव अलग-अलग दिनों में हो सकते हैं।",
        regions:
          "उत्तर भारत में विशेष रूप से लोकप्रिय; अन्य क्षेत्रों और प्रवासी समुदायों में भी मनाई जाती है।",
        significance:
          "होली वसंत, सामाजिक मेल-मिलाप और विभिन्न क्षेत्रों की भक्ति-कथाओं से जुड़ी है। प्रह्लाद और होलिका की कथा इस पर्व से जुड़ी एक प्रसिद्ध परंपरा है।",
        traditions: [
          "स्थानीय रीति के अनुसार होलिका दहन।",
          "रंग, संगीत और सामुदायिक उत्सव।",
          "कृष्ण और राधा से जुड़े क्षेत्रीय भक्ति आयोजन।",
        ],
      },
    },
  },

  {
    slug: "maha-shivaratri",
    icon: "🔱",
    content: {
      bn: {
        category: "শিব উৎসব",
        title: "মহাশিবরাত্রি",
        description:
          "ভগবান শিবের উপাসনা, প্রার্থনা ও ধ্যানের গুরুত্বপূর্ণ রজনী।",
        timing:
          "হিন্দু চান্দ্র পঞ্জিকার কৃষ্ণপক্ষের চতুর্দশী তিথিতে মহাশিবরাত্রি পালিত হয়; মাসের নাম আঞ্চলিক পঞ্জিকা অনুসারে ভিন্ন হতে পারে।",
        regions:
          "ভারত, বাংলাদেশ এবং বিভিন্ন শৈব সম্প্রদায়ে পালিত হয়।",
        significance:
          "মহাশিবরাত্রি শিবভক্তদের জন্য গুরুত্বপূর্ণ উপাসনার দিন। বিভিন্ন ঐতিহ্যে এই রাতকে প্রার্থনা, ধ্যান, সংযম ও শিবের মহিমা স্মরণের সঙ্গে যুক্ত করা হয়।",
        traditions: [
          "শিবলিঙ্গে পূজা ও জল বা অন্যান্য প্রচলিত উপাচার নিবেদন।",
          "মন্ত্র, স্তোত্র ও শিব-সংক্রান্ত ধর্মীয় পাঠ।",
          "রাত্রিজাগরণ ও উপবাস—সাধকের প্রথা অনুযায়ী।",
        ],
      },
      en: {
        category: "Shiva festival",
        title: "Maha Shivaratri",
        description:
          "An important night of worship, prayer, and meditation dedicated to Shiva.",
        timing:
          "Maha Shivaratri is observed on Chaturdashi in the dark fortnight of a Hindu lunar calendar month; month naming varies by regional calendar tradition.",
        regions:
          "Observed in India, Bangladesh, and Shaiva communities in many countries.",
        significance:
          "Maha Shivaratri is an important observance for Shiva devotees. Different traditions associate the night with prayer, meditation, self-discipline, and remembrance of Shiva.",
        traditions: [
          "Shiva Lingam worship and offerings of water or other customary items.",
          "Mantras, hymns, and religious readings associated with Shiva.",
          "Night vigil and fasting according to personal and community traditions.",
        ],
      },
      hi: {
        category: "शिव उत्सव",
        title: "महाशिवरात्रि",
        description:
          "भगवान शिव की उपासना, प्रार्थना और ध्यान की महत्वपूर्ण रात्रि।",
        timing:
          "महाशिवरात्रि हिंदू चंद्र पंचांग के कृष्ण पक्ष की चतुर्दशी को मनाई जाती है; मास का नाम क्षेत्रीय पंचांग के अनुसार बदल सकता है।",
        regions:
          "भारत, बांग्लादेश और अनेक शैव समुदायों में मनाई जाती है।",
        significance:
          "महाशिवरात्रि शिवभक्तों के लिए एक महत्वपूर्ण पर्व है। विभिन्न परंपराओं में इसे प्रार्थना, ध्यान, संयम और शिव-स्मरण से जोड़ा जाता है।",
        traditions: [
          "शिवलिंग की पूजा और जल या अन्य पारंपरिक वस्तुओं का अर्पण।",
          "शिव से संबंधित मंत्र, स्तोत्र और धार्मिक पाठ।",
          "परंपरा के अनुसार रात्रि जागरण और व्रत।",
        ],
      },
    },
  },

  {
    slug: "ganesh-chaturthi",
    icon: "🐘",
    content: {
      bn: {
        category: "গণেশ উৎসব",
        title: "গণেশ চতুর্থী",
        description:
          "শ্রী গণেশের আরাধনা ও নতুন কাজের শুভ সূচনার উৎসব।",
        timing:
          "অনেক ঐতিহ্যে ভাদ্র মাসের শুক্লপক্ষের চতুর্থী তিথিতে গণেশ চতুর্থী পালিত হয়।",
        regions:
          "মহারাষ্ট্রসহ ভারতের বিভিন্ন অঞ্চলে বিশেষভাবে জনপ্রিয়; অন্য দেশেও পালিত হয়।",
        significance:
          "এই উৎসব গণেশের জন্মকাহিনি ও উপাসনার সঙ্গে যুক্ত। নতুন কাজের সূচনা, জ্ঞান এবং বাধা অতিক্রমের প্রার্থনার সঙ্গে গণেশের উপাসনা বহু ঐতিহ্যে সম্পর্কিত।",
        traditions: [
          "গণেশের প্রতিমা স্থাপন ও পূজা।",
          "মন্ত্র, প্রার্থনা ও প্রচলিত নৈবেদ্য নিবেদন।",
          "স্থানীয় রীতি অনুযায়ী উৎসবের সমাপ্তি ও প্রতিমা বিসর্জন।",
        ],
      },
      en: {
        category: "Ganesha festival",
        title: "Ganesh Chaturthi",
        description:
          "A festival celebrating Ganesha and auspicious beginnings.",
        timing:
          "Many traditions observe Ganesh Chaturthi on the fourth lunar day of the bright fortnight of Bhadrapada.",
        regions:
          "Especially prominent in Maharashtra and other Indian regions; also observed internationally.",
        significance:
          "The festival is associated with narratives about Ganesha's birth. Ganesha worship is linked in many traditions with new beginnings, wisdom, and overcoming obstacles.",
        traditions: [
          "Installing and worshipping images of Ganesha.",
          "Reciting prayers and offering customary foods.",
          "Concluding ceremonies and immersion according to local custom.",
        ],
      },
      hi: {
        category: "गणेश उत्सव",
        title: "गणेश चतुर्थी",
        description:
          "श्री गणेश की आराधना और शुभारंभ का उत्सव।",
        timing:
          "कई परंपराओं में गणेश चतुर्थी भाद्रपद मास के शुक्ल पक्ष की चतुर्थी को मनाई जाती है।",
        regions:
          "महाराष्ट्र सहित भारत के विभिन्न क्षेत्रों में विशेष रूप से लोकप्रिय; विदेशों में भी मनाई जाती है।",
        significance:
          "यह पर्व गणेश के जन्म से जुड़ी कथाओं और उपासना से संबंधित है। अनेक परंपराओं में गणेश पूजा को शुभारंभ, ज्ञान और विघ्नों को दूर करने से जोड़ा जाता है।",
        traditions: [
          "गणेश प्रतिमा की स्थापना और पूजा।",
          "मंत्र, प्रार्थना और पारंपरिक नैवेद्य।",
          "स्थानीय रीति के अनुसार समापन और प्रतिमा विसर्जन।",
        ],
      },
    },
  },

  {
    slug: "navaratri",
    icon: "✨",
    content: {
      bn: {
        category: "নয় রাতের উৎসব",
        title: "নবরাত্রি",
        description:
          "দেবীর বিভিন্ন রূপের উপাসনা ও ভক্তির একাধিক দিনের উৎসব।",
        timing:
          "চৈত্র ও আশ্বিন মাসে নবরাত্রির বিশেষ প্রচলন রয়েছে; পালনের রীতি ও সময় অঞ্চলভেদে পরিবর্তিত হয়।",
        regions:
          "গুজরাট, উত্তর ভারত, পশ্চিমবঙ্গ এবং ভারতের নানা অঞ্চলে বিভিন্ন রীতিতে পালিত হয়।",
        significance:
          "নবরাত্রি দেবীশক্তির বিভিন্ন রূপের উপাসনার সঙ্গে যুক্ত। কোথাও এটি উপবাস ও প্রার্থনাকেন্দ্রিক, আবার কোথাও সংগীত, নৃত্য এবং সামষ্টিক উৎসবের গুরুত্বপূর্ণ উপলক্ষ।",
        traditions: [
          "দেবীর বিভিন্ন রূপের পূজা ও স্তোত্রপাঠ।",
          "উপবাস, প্রার্থনা এবং আঞ্চলিক আচার।",
          "কিছু অঞ্চলে গরবা, ডান্ডিয়া ও অন্যান্য সাংস্কৃতিক আয়োজন।",
        ],
      },
      en: {
        category: "Nine-night festival",
        title: "Navaratri",
        description:
          "A multi-day festival honouring different forms of the Goddess.",
        timing:
          "Chaitra and Ashwin Navaratri are widely observed; dates and customs vary across regions.",
        regions:
          "Celebrated in different forms in Gujarat, northern India, West Bengal, and many other regions.",
        significance:
          "Navaratri honours different forms of the Goddess. Depending on the region, observances may centre on prayer and fasting or on music, dance, and community celebrations.",
        traditions: [
          "Worship and hymns associated with different forms of the Goddess.",
          "Fasting, prayer, and regional rituals.",
          "Garba, Dandiya, and other cultural celebrations in some regions.",
        ],
      },
      hi: {
        category: "नौ रातों का उत्सव",
        title: "नवरात्रि",
        description:
          "देवी के विभिन्न रूपों की उपासना का बहुदिवसीय पर्व।",
        timing:
          "चैत्र और आश्विन नवरात्रि व्यापक रूप से मनाई जाती हैं; तिथियाँ और रीति-रिवाज क्षेत्र के अनुसार बदलते हैं।",
        regions:
          "गुजरात, उत्तर भारत, पश्चिम बंगाल और अनेक अन्य क्षेत्रों में विभिन्न रूपों में मनाई जाती है।",
        significance:
          "नवरात्रि देवी के विभिन्न रूपों की उपासना से जुड़ी है। अलग-अलग क्षेत्रों में इसका केंद्र उपवास और प्रार्थना या संगीत, नृत्य तथा सामुदायिक उत्सव हो सकता है।",
        traditions: [
          "देवी के विभिन्न रूपों की पूजा और स्तोत्रपाठ।",
          "व्रत, प्रार्थना और क्षेत्रीय अनुष्ठान।",
          "कुछ क्षेत्रों में गरबा, डांडिया और सांस्कृतिक आयोजन।",
        ],
      },
    },
  },

  {
    slug: "ram-navami",
    icon: "🏹",
    content: {
      bn: {
        category: "রাম উৎসব",
        title: "রাম নবমী",
        description:
          "শ্রীরামের জন্মস্মরণে পালিত ভক্তি ও ধর্মীয় উৎসব।",
        timing:
          "অনেক ঐতিহ্যে চৈত্র মাসের শুক্লপক্ষের নবমী তিথিতে রাম নবমী পালিত হয়।",
        regions:
          "ভারত, বাংলাদেশ এবং বিভিন্ন রামভক্ত ও বৈষ্ণব সম্প্রদায়ে পালিত হয়।",
        significance:
          "রাম নবমী শ্রীরামের জন্মস্মরণের সঙ্গে যুক্ত। রামায়ণের বিভিন্ন পাঠে রামের জীবন, কর্তব্য, সম্পর্ক এবং নৈতিক সিদ্ধান্তের নানা দিক আলোচিত হয়েছে।",
        traditions: [
          "শ্রীরামের পূজা, স্তোত্র এবং নামসংকীর্তন।",
          "রামায়ণ পাঠ ও ধর্মীয় আলোচনা।",
          "কিছু অঞ্চলে শোভাযাত্রা ও সামষ্টিক প্রার্থনা।",
        ],
      },
      en: {
        category: "Rama festival",
        title: "Rama Navami",
        description:
          "A devotional festival commemorating the birth of Rama.",
        timing:
          "Many traditions observe Rama Navami on Navami in the bright fortnight of Chaitra.",
        regions:
          "Celebrated in India, Bangladesh, and many Rama-devotional and Vaishnava communities.",
        significance:
          "Rama Navami commemorates Rama's birth. Different versions of the Ramayana explore aspects of Rama's life, duty, relationships, and ethical decisions.",
        traditions: [
          "Worship, hymns, and chanting dedicated to Rama.",
          "Ramayana readings and religious discussions.",
          "Processions and community prayer in some regions.",
        ],
      },
      hi: {
        category: "राम उत्सव",
        title: "राम नवमी",
        description:
          "श्रीराम के जन्म की स्मृति में मनाया जाने वाला भक्तिपूर्ण पर्व।",
        timing:
          "कई परंपराओं में राम नवमी चैत्र मास के शुक्ल पक्ष की नवमी को मनाई जाती है।",
        regions:
          "भारत, बांग्लादेश और अनेक रामभक्त तथा वैष्णव समुदायों में मनाई जाती है।",
        significance:
          "राम नवमी श्रीराम के जन्म का स्मरण कराती है। रामायण के विभिन्न पाठों में राम के जीवन, कर्तव्य, संबंधों और नैतिक निर्णयों के पहलुओं का वर्णन मिलता है।",
        traditions: [
          "श्रीराम की पूजा, स्तोत्र और नाम-संकीर्तन।",
          "रामायण पाठ और धार्मिक चर्चा।",
          "कुछ क्षेत्रों में शोभायात्राएँ और सामूहिक प्रार्थना।",
        ],
      },
    },
  },

  {
    slug: "rath-yatra",
    icon: "🛕",
    content: {
      bn: {
        category: "জগন্নাথ উৎসব",
        title: "রথযাত্রা",
        description:
          "জগন্নাথ, বলভদ্র ও সুভদ্রার রথযাত্রার ঐতিহ্য।",
        timing:
          "পুরীর প্রচলিত ঐতিহ্যে আষাঢ় মাসের শুক্লপক্ষের দ্বিতীয়া তিথিতে রথযাত্রা শুরু হয়।",
        regions:
          "ওডিশার পুরী বিশেষভাবে পরিচিত; ভারত ও বিশ্বের অন্যান্য স্থানেও রথযাত্রা পালিত হয়।",
        significance:
          "রথযাত্রা জগন্নাথ উপাসনার গুরুত্বপূর্ণ উৎসব। জগন্নাথ, বলভদ্র ও সুভদ্রার রথযাত্রা ভক্তি, তীর্থযাত্রা এবং সামষ্টিক অংশগ্রহণের সঙ্গে যুক্ত।",
        traditions: [
          "দেবতাদের রথে আরোহণ ও শোভাযাত্রা।",
          "ভক্তদের অংশগ্রহণে রথ টানার আয়োজন—স্থানীয় নিয়ম অনুসারে।",
          "মন্দিরকেন্দ্রিক পূজা, প্রসাদ ও ধর্মীয় অনুষ্ঠান।",
        ],
      },
      en: {
        category: "Jagannath festival",
        title: "Rath Yatra",
        description:
          "A chariot festival associated with Jagannath, Balabhadra, and Subhadra.",
        timing:
          "In the traditional Puri observance, Rath Yatra begins on Dwitiya in the bright fortnight of Ashadha.",
        regions:
          "Puri in Odisha is especially renowned; Rath Yatra is also celebrated elsewhere in India and internationally.",
        significance:
          "Rath Yatra is an important festival of Jagannath worship. The chariot procession of Jagannath, Balabhadra, and Subhadra is associated with devotion, pilgrimage, and community participation.",
        traditions: [
          "Processions featuring the deities on ceremonial chariots.",
          "Devotees pulling the chariots according to local arrangements.",
          "Temple worship, prasad, and religious gatherings.",
        ],
      },
      hi: {
        category: "जगन्नाथ उत्सव",
        title: "रथ यात्रा",
        description:
          "जगन्नाथ, बलभद्र और सुभद्रा की रथयात्रा से जुड़ी परंपरा।",
        timing:
          "पुरी की पारंपरिक परंपरा में रथ यात्रा आषाढ़ मास के शुक्ल पक्ष की द्वितीया को आरंभ होती है।",
        regions:
          "ओडिशा का पुरी विशेष रूप से प्रसिद्ध है; भारत के अन्य स्थानों और विदेशों में भी रथ यात्रा मनाई जाती है।",
        significance:
          "रथ यात्रा जगन्नाथ उपासना का एक महत्वपूर्ण उत्सव है। जगन्नाथ, बलभद्र और सुभद्रा की रथयात्रा भक्ति, तीर्थयात्रा और सामुदायिक भागीदारी से जुड़ी है।",
        traditions: [
          "देवताओं की सुसज्जित रथों में शोभायात्रा।",
          "स्थानीय व्यवस्था के अनुसार भक्तों द्वारा रथ खींचना।",
          "मंदिर पूजा, प्रसाद और धार्मिक आयोजन।",
        ],
      },
    },
  },

  {
    slug: "saraswati-puja",
    icon: "📚",
    content: {
      bn: {
        category: "বিদ্যা ও জ্ঞান",
        title: "সরস্বতী পূজা",
        description:
          "বিদ্যা, সংগীত, শিল্প ও জ্ঞানের দেবী সরস্বতীর আরাধনা।",
        timing:
          "বসন্ত পঞ্চমী বা মাঘ মাসের শুক্লপক্ষের পঞ্চমী তিথিতে বহু অঞ্চলে সরস্বতী পূজা পালিত হয়।",
        regions:
          "বাংলাদেশ, পশ্চিমবঙ্গ ও পূর্ব ভারতের বিভিন্ন অঞ্চলে বিশেষভাবে পরিচিত; অন্য স্থানেও পালিত হয়।",
        significance:
          "সরস্বতী পূজা বিদ্যা, সংগীত, শিল্প ও জ্ঞানচর্চার সঙ্গে যুক্ত। শিক্ষাপ্রতিষ্ঠান ও পরিবারে শিক্ষার প্রতি শ্রদ্ধা প্রকাশের একটি গুরুত্বপূর্ণ উপলক্ষ।",
        traditions: [
          "দেবী সরস্বতীর পূজা ও প্রার্থনা।",
          "বই, বাদ্যযন্ত্র ও শিক্ষাসামগ্রীকে সম্মান জানানো।",
          "শিক্ষার্থী ও পরিবারের অংশগ্রহণে সাংস্কৃতিক আয়োজন।",
        ],
      },
      en: {
        category: "Learning and knowledge",
        title: "Saraswati Puja",
        description:
          "Worship of Saraswati, associated with learning, music, arts, and knowledge.",
        timing:
          "Saraswati Puja is widely observed on Vasant Panchami, the fifth lunar day of the bright fortnight of Magha.",
        regions:
          "Especially familiar in Bangladesh, West Bengal, and eastern India; also observed elsewhere.",
        significance:
          "Saraswati Puja is associated with learning, music, the arts, and knowledge. It provides an occasion for schools, families, and students to honour education.",
        traditions: [
          "Worship and prayers dedicated to Saraswati.",
          "Showing respect for books, musical instruments, and educational materials.",
          "Cultural programmes involving students and families.",
        ],
      },
      hi: {
        category: "विद्या और ज्ञान",
        title: "सरस्वती पूजा",
        description:
          "विद्या, संगीत, कला और ज्ञान से जुड़ी देवी सरस्वती की उपासना।",
        timing:
          "अनेक क्षेत्रों में सरस्वती पूजा वसंत पंचमी, अर्थात माघ मास के शुक्ल पक्ष की पंचमी को होती है।",
        regions:
          "बांग्लादेश, पश्चिम बंगाल और पूर्वी भारत में विशेष रूप से परिचित; अन्य स्थानों पर भी मनाई जाती है।",
        significance:
          "सरस्वती पूजा विद्या, संगीत, कला और ज्ञान से जुड़ी है। विद्यालयों, परिवारों और विद्यार्थियों के लिए यह शिक्षा के प्रति सम्मान व्यक्त करने का अवसर है।",
        traditions: [
          "देवी सरस्वती की पूजा और प्रार्थना।",
          "पुस्तकों, वाद्ययंत्रों और अध्ययन सामग्री का सम्मान।",
          "विद्यार्थियों और परिवारों से जुड़े सांस्कृतिक आयोजन।",
        ],
      },
    },
  },
] satisfies FestivalRecord[];

export function getFestivalBySlug(slug: string) {
  return festivals.find((festival) => festival.slug === slug);
}

export const festivalSlugs = festivals.map((festival) => festival.slug);
