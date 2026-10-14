import type { Locale } from "@/lib/site-config";

export type DeitySlug = "krishna" | "durga" | "shiva" | "ganesha";

export type LocalizedDeityContent = {
  category: string;
  name: string;
  description: string;
  introduction: string;
  symbols: string[];
  relationships: string;
  traditions: string[];
  stories: string[];
  interpretationNote: string;
};

export type DeityRecord = {
  slug: DeitySlug;
  icon: string;
  content: Record<Locale, LocalizedDeityContent>;
};

export const deities = [
  {
    slug: "krishna",
    icon: "🪈",
    content: {
      bn: {
        category: "বৈষ্ণব ঐতিহ্য",
        name: "শ্রীকৃষ্ণ",
        description:
          "ভগবদ্গীতা, ভক্তি, কর্ম ও কৃষ্ণকেন্দ্রিক ধর্মীয় ঐতিহ্যের পরিচয়।",
        introduction:
          "শ্রীকৃষ্ণ হিন্দুধর্মের অন্যতম গুরুত্বপূর্ণ ও বহুল পূজিত দেবতা। মহাভারত, ভগবদ্গীতা এবং ভাগবত পুরাণসহ বিভিন্ন গ্রন্থে তাঁর কাহিনি পাওয়া যায়। কৃষ্ণকে কেন্দ্র করে ভক্তি, দর্শন, সংগীত ও উৎসবের সমৃদ্ধ ঐতিহ্য গড়ে উঠেছে।",
        symbols: [
          "বাঁশি — কৃষ্ণের সঙ্গে যুক্ত সংগীত ও ভক্তির প্রতীক।",
          "ময়ূরপুচ্ছ — কৃষ্ণের প্রচলিত চিত্ররূপের একটি পরিচিত বৈশিষ্ট্য।",
          "গরু ও বৃন্দাবন — কৃষ্ণের বাল্যকাহিনি ও গোপাল-ঐতিহ্যের সঙ্গে সম্পর্কিত।",
          "ভগবদ্গীতা — কর্ম, জ্ঞান, ভক্তি ও কর্তব্য বিষয়ে গুরুত্বপূর্ণ দার্শনিক সংলাপ।",
        ],
        relationships:
          "বৈষ্ণব ঐতিহ্যের বহু ধারায় কৃষ্ণকে বিষ্ণুর অবতার হিসেবে দেখা হয়; আবার কিছু ধারায় তাঁকে পরম ঈশ্বর হিসেবে উপাসনা করা হয়। রাধা, রুক্মিণী, বলরাম, যশোদা ও নন্দের সঙ্গে সম্পর্কিত কাহিনি বিভিন্ন গ্রন্থ ও ঐতিহ্যে পাওয়া যায়।",
        traditions: [
          "বৈষ্ণব ঐতিহ্য",
          "কৃষ্ণভক্তি",
          "ভগবদ্গীতার দর্শন",
          "জন্মাষ্টমী ও রাসলীলা-সংক্রান্ত সাংস্কৃতিক ঐতিহ্য",
        ],
        stories: [
          "কৃষ্ণের বাল্যলীলা ও বৃন্দাবনের কাহিনি।",
          "কুরুক্ষেত্রে অর্জুনকে দেওয়া কৃষ্ণের উপদেশ, যা ভগবদ্গীতায় বর্ণিত।",
          "মহাভারতের বিভিন্ন ঘটনায় কৃষ্ণের ভূমিকা।",
        ],
        interpretationNote:
          "কৃষ্ণের স্বরূপ, বিষ্ণুর সঙ্গে তাঁর সম্পর্ক এবং বিভিন্ন কাহিনির ব্যাখ্যা সম্প্রদায়, গ্রন্থ ও আঞ্চলিক ঐতিহ্য অনুযায়ী ভিন্ন হতে পারে।",
      },

      en: {
        category: "Vaishnava traditions",
        name: "Sri Krishna",
        description:
          "An introduction to the Bhagavad Gita, devotion, action, and Krishna traditions.",
        introduction:
          "Sri Krishna is one of the most important and widely worshipped figures in Hindu traditions. Narratives about him appear in texts including the Mahabharata, Bhagavad Gita, and Bhagavata Purana. Krishna-centered traditions have inspired rich traditions of devotion, philosophy, music, and festivals.",
        symbols: [
          "Flute — associated with Krishna's music and devotional imagery.",
          "Peacock feather — a familiar feature of many traditional depictions of Krishna.",
          "Cows and Vrindavan — connected with childhood narratives and Krishna as Gopala.",
          "Bhagavad Gita — an important philosophical dialogue about action, knowledge, devotion, and duty.",
        ],
        relationships:
          "Many Vaishnava traditions understand Krishna as an avatar of Vishnu, while some worship Krishna as the Supreme Divine. Stories involving Radha, Rukmini, Balarama, Yashoda, and Nanda appear in different texts and traditions.",
        traditions: [
          "Vaishnava traditions",
          "Krishna bhakti",
          "Philosophy of the Bhagavad Gita",
          "Janmashtami and cultural traditions associated with Rasa Lila",
        ],
        stories: [
          "Krishna's childhood narratives and stories from Vrindavan.",
          "Krishna's counsel to Arjuna at Kurukshetra, presented in the Bhagavad Gita.",
          "Krishna's role in events narrated in the Mahabharata.",
        ],
        interpretationNote:
          "Understandings of Krishna, his relationship with Vishnu, and individual narratives vary across communities, texts, and regional traditions.",
      },

      hi: {
        category: "वैष्णव परंपरा",
        name: "श्रीकृष्ण",
        description:
          "भगवद्गीता, भक्ति, कर्म और कृष्ण से जुड़ी धार्मिक परंपराओं का परिचय।",
        introduction:
          "श्रीकृष्ण हिंदू धर्म के सबसे महत्वपूर्ण और व्यापक रूप से पूजे जाने वाले देवताओं में से एक हैं। महाभारत, भगवद्गीता और भागवत पुराण सहित अनेक ग्रंथों में उनसे जुड़ी कथाएँ मिलती हैं। कृष्ण-केंद्रित परंपराओं ने भक्ति, दर्शन, संगीत और उत्सवों को समृद्ध किया है।",
        symbols: [
          "बाँसुरी — कृष्ण के संगीत और भक्ति से जुड़ा प्रतीक।",
          "मोरपंख — कृष्ण के पारंपरिक चित्रण की एक प्रसिद्ध विशेषता।",
          "गायें और वृंदावन — बाल-कृष्ण की कथाओं तथा गोपाल परंपरा से संबंधित।",
          "भगवद्गीता — कर्म, ज्ञान, भक्ति और कर्तव्य पर एक महत्वपूर्ण दार्शनिक संवाद।",
        ],
        relationships:
          "कई वैष्णव परंपराओं में कृष्ण को विष्णु का अवतार माना जाता है, जबकि कुछ परंपराएँ उन्हें परम दिव्य स्वरूप मानती हैं। राधा, रुक्मिणी, बलराम, यशोदा और नंद से जुड़ी कथाएँ विभिन्न ग्रंथों और परंपराओं में मिलती हैं।",
        traditions: [
          "वैष्णव परंपरा",
          "कृष्ण भक्ति",
          "भगवद्गीता का दर्शन",
          "जन्माष्टमी और रासलीला से जुड़ी सांस्कृतिक परंपराएँ",
        ],
        stories: [
          "कृष्ण की बाल लीलाएँ और वृंदावन की कथाएँ।",
          "कुरुक्षेत्र में अर्जुन को दिया गया कृष्ण का उपदेश, जो भगवद्गीता में वर्णित है।",
          "महाभारत की विभिन्न घटनाओं में कृष्ण की भूमिका।",
        ],
        interpretationNote:
          "कृष्ण के स्वरूप, विष्णु के साथ उनके संबंध और विभिन्न कथाओं की व्याख्या समुदायों, ग्रंथों और क्षेत्रीय परंपराओं के अनुसार अलग हो सकती है।",
      },
    },
  },

  {
    slug: "durga",
    icon: "🌺",
    content: {
      bn: {
        category: "শাক্ত ঐতিহ্য",
        name: "মা দুর্গা",
        description:
          "দেবীশক্তি, সাহস, সুরক্ষা ও দুর্গাপূজার ঐতিহ্য সম্পর্কে জানুন।",
        introduction:
          "মা দুর্গা হিন্দুধর্মের গুরুত্বপূর্ণ দেবী এবং শাক্ত উপাসনার কেন্দ্রীয় ব্যক্তিত্ব। দেবী মাহাত্ম্যসহ বিভিন্ন গ্রন্থে মহিষাসুরের বিরুদ্ধে দেবীর বিজয়ের আখ্যান পাওয়া যায়। শক্তি, সাহস, সুরক্ষা ও অশুভের বিরুদ্ধে সংগ্রামের সঙ্গে তাঁর উপাসনা যুক্ত।",
        symbols: [
          "সিংহ বা বাঘ — শক্তি, সাহস ও কর্তৃত্বের পরিচিত প্রতীক।",
          "বিভিন্ন অস্ত্র — অশুভের বিরুদ্ধে সংগ্রাম ও দেবশক্তির প্রতীকী প্রকাশ।",
          "পদ্ম — বিভিন্ন দেবী-চিত্রণে ব্যবহৃত একটি পবিত্র প্রতীক।",
          "দুর্গাপূজা — বিশেষ করে বাংলা অঞ্চলে গুরুত্বপূর্ণ ধর্মীয় ও সাংস্কৃতিক উৎসব।",
        ],
        relationships:
          "শাক্ত ঐতিহ্যের বহু ধারায় দুর্গাকে আদিশক্তি বা দেবীর প্রধান রূপ হিসেবে মানা হয়। অন্য ধারায় তাঁকে পার্বতীর সঙ্গে সম্পর্কিত বা পার্বতীর একটি রূপ হিসেবে ব্যাখ্যা করা হয়। এই ধর্মতাত্ত্বিক সম্পর্ক সব গ্রন্থে একইভাবে বর্ণিত নয়।",
        traditions: [
          "শাক্ত উপাসনা",
          "দেবী মাহাত্ম্য ও দুর্গা-সংক্রান্ত পুরাণকথা",
          "দুর্গাপূজা ও নবরাত্রি",
          "আঞ্চলিক দেবী-উৎসব ও লোকাচার",
        ],
        stories: [
          "মহিষাসুরের বিরুদ্ধে দুর্গার বিজয়ের কাহিনি।",
          "দেবীশক্তি ও অসুরবধের বিভিন্ন পুরাণকথা।",
          "দুর্গাপূজাকে কেন্দ্র করে গড়ে ওঠা আঞ্চলিক আচার ও সাংস্কৃতিক ঐতিহ্য।",
        ],
        interpretationNote:
          "দুর্গার স্বরূপ, পার্বতীর সঙ্গে সম্পর্ক এবং দেবী-উপাসনার রীতিতে শাক্ত, শৈব ও আঞ্চলিক ঐতিহ্য অনুযায়ী পার্থক্য থাকতে পারে।",
      },

      en: {
        category: "Shakta traditions",
        name: "Goddess Durga",
        description:
          "Discover divine power, courage, protection, and traditions of Durga Puja.",
        introduction:
          "Goddess Durga is a major Hindu goddess and a central figure in Shakta worship. Texts including the Devi Mahatmya narrate her victory over Mahishasura. Her worship is associated with power, courage, protection, and the struggle against destructive forces.",
        symbols: [
          "Lion or tiger — familiar symbols of strength, courage, and authority.",
          "Weapons — symbolic expressions of divine power and the struggle against evil.",
          "Lotus — a sacred symbol appearing in many depictions of Hindu goddesses.",
          "Durga Puja — a major religious and cultural festival, especially in Bengal.",
        ],
        relationships:
          "Many Shakta traditions understand Durga as the primordial power or a principal form of the Goddess. Other traditions associate her with Parvati or understand Durga as a form of Parvati. This theological relationship is not described identically in every text.",
        traditions: [
          "Shakta worship",
          "Devi Mahatmya and Puranic narratives about Durga",
          "Durga Puja and Navaratri",
          "Regional goddess festivals and local customs",
        ],
        stories: [
          "Durga's victory over Mahishasura.",
          "Puranic narratives about the Goddess's power and the defeat of demonic forces.",
          "Regional rituals and cultural traditions associated with Durga Puja.",
        ],
        interpretationNote:
          "Understandings of Durga, her relationship with Parvati, and goddess worship vary among Shakta, Shaiva, and regional traditions.",
      },

      hi: {
        category: "शाक्त परंपरा",
        name: "माँ दुर्गा",
        description:
          "देवीशक्ति, साहस, संरक्षण और दुर्गा पूजा की परंपराओं को जानें।",
        introduction:
          "माँ दुर्गा हिंदू धर्म की प्रमुख देवियों में से एक हैं और शाक्त उपासना में उनका महत्वपूर्ण स्थान है। देवी माहात्म्य सहित अनेक ग्रंथों में महिषासुर पर देवी की विजय का वर्णन मिलता है। उनकी उपासना शक्ति, साहस, संरक्षण और बुराई के विरुद्ध संघर्ष से जुड़ी है।",
        symbols: [
          "सिंह या बाघ — शक्ति, साहस और अधिकार के परिचित प्रतीक।",
          "विभिन्न अस्त्र — दुष्ट शक्तियों के विरुद्ध संघर्ष और दिव्य शक्ति के प्रतीक।",
          "कमल — अनेक देवी-चित्रणों में प्रयुक्त पवित्र प्रतीक।",
          "दुर्गा पूजा — विशेष रूप से बंगाल में महत्वपूर्ण धार्मिक और सांस्कृतिक उत्सव।",
        ],
        relationships:
          "कई शाक्त परंपराओं में दुर्गा को आदिशक्ति या देवी का प्रमुख स्वरूप माना जाता है। अन्य परंपराओं में उन्हें पार्वती से संबंधित या पार्वती का एक रूप माना जाता है। सभी ग्रंथों में इस संबंध का वर्णन एक जैसा नहीं है।",
        traditions: [
          "शाक्त उपासना",
          "देवी माहात्म्य और दुर्गा से जुड़ी पौराणिक कथाएँ",
          "दुर्गा पूजा और नवरात्रि",
          "क्षेत्रीय देवी-उत्सव और स्थानीय रीति-रिवाज",
        ],
        stories: [
          "महिषासुर पर दुर्गा की विजय की कथा।",
          "देवी की शक्ति और असुरों के वध से जुड़ी पौराणिक कथाएँ।",
          "दुर्गा पूजा से जुड़ी क्षेत्रीय रस्में और सांस्कृतिक परंपराएँ।",
        ],
        interpretationNote:
          "दुर्गा के स्वरूप, पार्वती के साथ उनके संबंध और देवी-उपासना की विधियों में शाक्त, शैव तथा क्षेत्रीय परंपराओं के अनुसार अंतर हो सकता है।",
      },
    },
  },

  {
    slug: "shiva",
    icon: "🔱",
    content: {
      bn: {
        category: "শৈব ঐতিহ্য",
        name: "ভগবান শিব",
        description:
          "শৈব দর্শন, ধ্যান, ত্রিশূল এবং শিব-সংক্রান্ত ঐতিহ্যের পরিচয়।",
        introduction:
          "ভগবান শিব হিন্দুধর্মের অন্যতম প্রধান দেবতা এবং শৈব ঐতিহ্যের কেন্দ্রীয় ব্যক্তিত্ব। বিভিন্ন পুরাণ ও শাস্ত্রীয় ধারায় তাঁকে যোগ, ধ্যান, তপস্যা, রূপান্তর ও মহাজাগতিক শক্তির সঙ্গে যুক্ত করা হয়। তাঁর প্রতীক ও কাহিনির একাধিক দার্শনিক ব্যাখ্যা রয়েছে।",
        symbols: [
          "ত্রিশূল — শিবের অন্যতম পরিচিত প্রতীক।",
          "ডমরু — শিবের সঙ্গে যুক্ত একটি বাদ্যযন্ত্র ও প্রতীক।",
          "চন্দ্র ও জটায় গঙ্গা — প্রচলিত শিব-চিত্রণের গুরুত্বপূর্ণ বৈশিষ্ট্য।",
          "তৃতীয় নয়ন — শিবের বহু চিত্রণ ও কাহিনিতে উল্লেখযোগ্য প্রতীক।",
        ],
        relationships:
          "বহু পুরাণকথায় পার্বতীকে শিবের সহধর্মিণী এবং গণেশ ও কার্তিকেয়কে তাঁদের সন্তান হিসেবে বর্ণনা করা হয়। এই সম্পর্কগুলো বহুল পরিচিত হলেও সংশ্লিষ্ট কাহিনি ও ব্যাখ্যা বিভিন্ন গ্রন্থ ও ঐতিহ্যে ভিন্ন হতে পারে।",
        traditions: [
          "শৈব উপাসনা ও দর্শন",
          "শিবলিঙ্গ উপাসনা",
          "ধ্যান, যোগ ও তপস্যার ঐতিহ্য",
          "মহাশিবরাত্রি ও আঞ্চলিক শিব-উৎসব",
        ],
        stories: [
          "শিব ও পার্বতীকে কেন্দ্র করে প্রচলিত পুরাণকাহিনি।",
          "গঙ্গার অবতরণ বিষয়ে প্রচলিত আখ্যান।",
          "সমুদ্র মন্থন ও নীলকণ্ঠ শিবের কাহিনি।",
        ],
        interpretationNote:
          "শিবের স্বরূপ, প্রতীকের অর্থ এবং বিভিন্ন পুরাণকাহিনির ব্যাখ্যা শৈব, শাক্ত, বৈষ্ণব ও আঞ্চলিক ঐতিহ্যে ভিন্ন হতে পারে।",
      },

      en: {
        category: "Shaiva traditions",
        name: "Lord Shiva",
        description:
          "An introduction to Shaiva philosophy, meditation, the trident, and Shiva traditions.",
        introduction:
          "Lord Shiva is one of the major Hindu deities and a central figure in Shaiva traditions. Different Puranic and scriptural traditions associate him with yoga, meditation, ascetic practice, transformation, and cosmic power. His symbols and narratives have multiple philosophical interpretations.",
        symbols: [
          "Trident — one of Shiva's most recognisable symbols.",
          "Damaru — a small drum associated with Shiva in traditional imagery.",
          "Crescent moon and the Ganga in his matted hair — familiar features of depictions of Shiva.",
          "Third eye — a significant symbol in many representations and stories of Shiva.",
        ],
        relationships:
          "In many Puranic narratives, Parvati is described as Shiva's consort, while Ganesha and Kartikeya are described as their children. These relationships are widely known, though related stories and interpretations can vary across texts and traditions.",
        traditions: [
          "Shaiva worship and philosophy",
          "Worship of the Shiva Lingam",
          "Meditation, yoga, and ascetic traditions",
          "Maha Shivaratri and regional festivals dedicated to Shiva",
        ],
        stories: [
          "Puranic narratives about Shiva and Parvati.",
          "Traditional narratives about the descent of the Ganga.",
          "The churning of the ocean and the story of Neelkanth Shiva.",
        ],
        interpretationNote:
          "Understandings of Shiva, the meanings of his symbols, and interpretations of Puranic narratives vary among Shaiva, Shakta, Vaishnava, and regional traditions.",
      },

      hi: {
        category: "शैव परंपरा",
        name: "भगवान शिव",
        description:
          "शैव दर्शन, ध्यान, त्रिशूल और शिव से जुड़ी परंपराओं का परिचय।",
        introduction:
          "भगवान शिव हिंदू धर्म के प्रमुख देवताओं में से एक और शैव परंपरा के केंद्रीय स्वरूप हैं। विभिन्न पुराणों और शास्त्रीय परंपराओं में उन्हें योग, ध्यान, तपस्या, रूपांतरण और ब्रह्मांडीय शक्ति से जोड़ा जाता है। उनके प्रतीकों और कथाओं की अनेक दार्शनिक व्याख्याएँ हैं।",
        symbols: [
          "त्रिशूल — शिव का एक प्रसिद्ध प्रतीक।",
          "डमरू — शिव से जुड़ा एक वाद्ययंत्र और प्रतीक।",
          "चंद्रमा और जटाओं में गंगा — शिव के पारंपरिक चित्रण की प्रमुख विशेषताएँ।",
          "तीसरा नेत्र — शिव के अनेक चित्रणों और कथाओं में एक महत्वपूर्ण प्रतीक।",
        ],
        relationships:
          "कई पौराणिक कथाओं में पार्वती को शिव की पत्नी और गणेश तथा कार्तिकेय को उनके पुत्रों के रूप में वर्णित किया जाता है। ये संबंध व्यापक रूप से परिचित हैं, लेकिन संबंधित कथाएँ और व्याख्याएँ अलग-अलग ग्रंथों और परंपराओं में भिन्न हो सकती हैं।",
        traditions: [
          "शैव उपासना और दर्शन",
          "शिवलिंग की उपासना",
          "ध्यान, योग और तपस्या की परंपराएँ",
          "महाशिवरात्रि और शिव से जुड़े क्षेत्रीय उत्सव",
        ],
        stories: [
          "शिव और पार्वती से जुड़ी पौराणिक कथाएँ।",
          "गंगा के अवतरण से जुड़ी पारंपरिक कथाएँ।",
          "समुद्र मंथन और नीलकंठ शिव की कथा।",
        ],
        interpretationNote:
          "शिव के स्वरूप, उनके प्रतीकों के अर्थ और पौराणिक कथाओं की व्याख्या शैव, शाक्त, वैष्णव तथा क्षेत्रीय परंपराओं में भिन्न हो सकती है।",
      },
    },
  },

  {
    slug: "ganesha",
    icon: "🐘",
    content: {
      bn: {
        category: "গণেশ উপাসনা",
        name: "শ্রী গণেশ",
        description:
          "জ্ঞান, শুভারম্ভ, বাধা অতিক্রম ও গণেশ-উপাসনার পরিচয়।",
        introduction:
          "শ্রী গণেশ হিন্দুধর্মে বহুল পূজিত দেবতা। বহু ঐতিহ্যে নতুন কাজের শুরুতে তাঁর পূজা করা হয় এবং তাঁকে জ্ঞান, শুভারম্ভ ও বাধা অতিক্রমের সঙ্গে যুক্ত করা হয়। গণেশের উপাসনা বিভিন্ন অঞ্চল, সম্প্রদায় ও উৎসবের মধ্যে গুরুত্বপূর্ণ স্থান পেয়েছে।",
        symbols: [
          "হাতির মাথা — গণেশের সবচেয়ে পরিচিত বৈশিষ্ট্য।",
          "মোদক — গণেশের সঙ্গে যুক্ত একটি প্রচলিত নৈবেদ্য।",
          "ইঁদুর বা মূষিক — বহু চিত্রণে তাঁর বাহন হিসেবে দেখানো হয়।",
          "লেখনী ও জ্ঞান — কিছু কাহিনিতে গণেশকে বিদ্যা ও লেখার সঙ্গে যুক্ত করা হয়।",
        ],
        relationships:
          "বহু পুরাণকথায় গণেশকে শিব ও পার্বতীর সন্তান হিসেবে বর্ণনা করা হয় এবং কার্তিকেয়কে তাঁর ভাই হিসেবে উল্লেখ করা হয়। গণেশের জন্ম ও হাতির মাথা প্রাপ্তি সম্পর্কে বিভিন্ন কাহিনি প্রচলিত রয়েছে।",
        traditions: [
          "গণেশ চতুর্থী",
          "নতুন কাজের সূচনায় গণেশ-পূজা",
          "শিক্ষা ও জ্ঞানকেন্দ্রিক ভক্তি-ঐতিহ্য",
          "ভারতের বিভিন্ন অঞ্চলের গণেশ-উৎসব",
        ],
        stories: [
          "গণেশের জন্ম ও হাতির মাথা প্রাপ্তির প্রচলিত কাহিনি।",
          "গণেশ ও কার্তিকেয়কে ঘিরে প্রতিযোগিতার একটি জনপ্রিয় পুরাণকাহিনি।",
          "মহাভারতের সঙ্গে গণেশের লেখকের ভূমিকা যুক্ত করে বলা হয় এমন একটি ঐতিহ্যবাহী কাহিনি।",
        ],
        interpretationNote:
          "গণেশের জন্মকাহিনি, পারিবারিক সম্পর্ক এবং প্রতীকগুলোর ব্যাখ্যা বিভিন্ন পুরাণ, আঞ্চলিক কাহিনি ও উপাসনা-পদ্ধতিতে ভিন্ন হতে পারে।",
      },

      en: {
        category: "Ganesha traditions",
        name: "Sri Ganesha",
        description:
          "Discover wisdom, auspicious beginnings, overcoming obstacles, and Ganesha worship.",
        introduction:
          "Sri Ganesha is widely worshipped in Hindu traditions. He is often honoured at the beginning of new undertakings and associated with wisdom, auspicious beginnings, and the overcoming of obstacles. Ganesha worship holds an important place in regional communities, devotional traditions, and festivals.",
        symbols: [
          "Elephant head — Ganesha's most recognisable feature.",
          "Modak — a traditional sweet offering associated with Ganesha.",
          "Mouse or Mushika — commonly depicted as his vehicle.",
          "Writing and learning — some stories associate Ganesha with knowledge and the act of writing.",
        ],
        relationships:
          "Many Puranic narratives describe Ganesha as the son of Shiva and Parvati and Kartikeya as his brother. Different stories explain Ganesha's birth and how he came to have an elephant head.",
        traditions: [
          "Ganesh Chaturthi",
          "Worship of Ganesha at the beginning of new undertakings",
          "Devotional traditions associated with learning and knowledge",
          "Regional Ganesha festivals across India",
        ],
        stories: [
          "Traditional stories about Ganesha's birth and elephant head.",
          "A popular Puranic narrative involving a contest between Ganesha and Kartikeya.",
          "A traditional account that associates Ganesha with the writing of the Mahabharata.",
        ],
        interpretationNote:
          "Stories about Ganesha's birth, family relationships, and symbols vary among Puranas, regional narratives, and devotional practices.",
      },

      hi: {
        category: "गणेश परंपरा",
        name: "श्री गणेश",
        description:
          "ज्ञान, शुभारंभ, बाधाओं को दूर करने और गणेश उपासना का परिचय।",
        introduction:
          "श्री गणेश हिंदू परंपराओं में व्यापक रूप से पूजे जाने वाले देवता हैं। अनेक परंपराओं में किसी नए कार्य की शुरुआत में उनकी पूजा की जाती है। उन्हें ज्ञान, शुभारंभ और विघ्नों को दूर करने से जोड़ा जाता है। गणेश उपासना अनेक क्षेत्रों, समुदायों और उत्सवों में महत्वपूर्ण स्थान रखती है।",
        symbols: [
          "हाथी का सिर — गणेश की सबसे प्रसिद्ध विशेषता।",
          "मोदक — गणेश से जुड़ा एक पारंपरिक मिष्ठान्न।",
          "मूषक — अनेक चित्रणों में गणेश का वाहन।",
          "लेखन और विद्या — कुछ कथाओं में गणेश को ज्ञान और लेखन से जोड़ा जाता है।",
        ],
        relationships:
          "कई पौराणिक कथाओं में गणेश को शिव और पार्वती का पुत्र तथा कार्तिकेय को उनका भाई बताया जाता है। गणेश के जन्म और हाथी का सिर मिलने के बारे में विभिन्न कथाएँ प्रचलित हैं।",
        traditions: [
          "गणेश चतुर्थी",
          "नए कार्य के आरंभ में गणेश पूजा",
          "विद्या और ज्ञान से जुड़ी भक्ति परंपराएँ",
          "भारत के विभिन्न क्षेत्रों में गणेश उत्सव",
        ],
        stories: [
          "गणेश के जन्म और हाथी का सिर मिलने की पारंपरिक कथाएँ।",
          "गणेश और कार्तिकेय की प्रतियोगिता से जुड़ी एक लोकप्रिय पौराणिक कथा।",
          "महाभारत के लेखन में गणेश की भूमिका बताने वाली एक पारंपरिक कथा।",
        ],
        interpretationNote:
          "गणेश के जन्म, पारिवारिक संबंधों और प्रतीकों की व्याख्या विभिन्न पुराणों, क्षेत्रीय कथाओं और उपासना परंपराओं में भिन्न हो सकती है।",
      },
    },
  },
] satisfies DeityRecord[];

export function getDeityBySlug(slug: string) {
  return deities.find((deity) => deity.slug === slug);
}

export const deitySlugs = deities.map((deity) => deity.slug);
