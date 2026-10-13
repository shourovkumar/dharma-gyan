import type { Locale } from "@/lib/site-config";

export type ScriptureSlug =
  | "vedas"
  | "bhagavad-gita"
  | "ramayana"
  | "mahabharata";

export type LocalizedScriptureContent = {
  category: string;
  title: string;
  description: string;
  introduction: string;
  keyIdeas: string[];
  editorialNote: string;
};

export type ScriptureRecord = {
  slug: ScriptureSlug;
  icon: string;
  content: Record<Locale, LocalizedScriptureContent>;
};

export const scriptures = [
  {
    slug: "vedas",
    icon: "ॐ",
    content: {
      bn: {
        category: "বৈদিক জ্ঞান",
        title: "বেদ",
        description:
          "ঋগ্বেদ, সামবেদ, যজুর্বেদ ও অথর্ববেদ সম্পর্কে জানুন।",
        introduction:
          "বেদ হিন্দুধর্মের প্রাচীনতম গুরুত্বপূর্ণ শাস্ত্রীয় ঐতিহ্যগুলোর অন্তর্ভুক্ত। চারটি বেদের নিজস্ব বিষয়বস্তু, সংগীত, আচার ও পাঠের ঐতিহ্য রয়েছে।",
        keyIdeas: [
          "ঋগ্বেদ: স্তোত্র ও বৈদিক ঋষিদের সঙ্গে যুক্ত মন্ত্রের সংকলন।",
          "সামবেদ: বৈদিক সংগীত ও সুরের সঙ্গে সম্পর্কিত পাঠের ঐতিহ্য।",
          "যজুর্বেদ: বৈদিক যজ্ঞ ও আচার-অনুষ্ঠানের সঙ্গে সম্পর্কিত মন্ত্র ও নির্দেশনা।",
          "অথর্ববেদ: বিভিন্ন স্তোত্র, প্রার্থনা ও জীবনসংশ্লিষ্ট বিষয় নিয়ে সমৃদ্ধ একটি সংকলন।",
        ],
        editorialNote:
          "বৈদিক পাঠ, ব্যাখ্যা ও অনুশীলনে বিভিন্ন শাখা ও ঐতিহ্যের মধ্যে পার্থক্য থাকতে পারে।",
      },
      en: {
        category: "Vedic wisdom",
        title: "The Vedas",
        description:
          "Discover the Rigveda, Samaveda, Yajurveda, and Atharvaveda.",
        introduction:
          "The Vedas belong to the ancient and foundational scriptural traditions of Hinduism. Each of the four Vedas has its own textual, musical, ritual, and recitational traditions.",
        keyIdeas: [
          "Rigveda: A collection of hymns and mantras associated with Vedic seers.",
          "Samaveda: A tradition of Vedic texts closely associated with musical chanting.",
          "Yajurveda: Mantras and instructions connected with Vedic rituals and sacrificial practices.",
          "Atharvaveda: A collection that includes hymns, prayers, and material concerning different aspects of life.",
        ],
        editorialNote:
          "Vedic recitation, interpretation, and practice may differ among schools and traditions.",
      },
      hi: {
        category: "वैदिक ज्ञान",
        title: "वेद",
        description:
          "ऋग्वेद, सामवेद, यजुर्वेद और अथर्ववेद के बारे में जानें।",
        introduction:
          "वेद हिंदू धर्म की प्राचीन और महत्वपूर्ण शास्त्रीय परंपराओं में शामिल हैं। चारों वेदों की अपनी पाठ, संगीत, अनुष्ठान और उच्चारण संबंधी परंपराएँ हैं।",
        keyIdeas: [
          "ऋग्वेद: वैदिक ऋषियों से जुड़े सूक्तों और मंत्रों का संग्रह।",
          "सामवेद: वैदिक गायन और संगीत से संबंधित पाठ की परंपरा।",
          "यजुर्वेद: वैदिक यज्ञों और अनुष्ठानों से जुड़े मंत्र और निर्देश।",
          "अथर्ववेद: सूक्तों, प्रार्थनाओं और जीवन के विभिन्न पहलुओं से संबंधित सामग्री का संग्रह।",
        ],
        editorialNote:
          "वेदों के पाठ, व्याख्या और अभ्यास में विभिन्न शाखाओं तथा परंपराओं के अनुसार अंतर हो सकता है।",
      },
    },
  },

  {
    slug: "bhagavad-gita",
    icon: "🪷",
    content: {
      bn: {
        category: "দর্শন ও উপদেশ",
        title: "শ্রীমদ্ভগবদ্গীতা",
        description:
          "কর্ম, জ্ঞান, ভক্তি ও কর্তব্য সম্পর্কে গীতার শিক্ষা জানুন।",
        introduction:
          "ভগবদ্গীতা মহাভারতের ভীষ্মপর্বের অংশ হিসেবে পরিচিত। এতে কুরুক্ষেত্রের প্রেক্ষাপটে শ্রীকৃষ্ণ ও অর্জুনের কথোপকথনের মাধ্যমে কর্ম, জ্ঞান, ভক্তি, কর্তব্য ও আত্মজিজ্ঞাসার নানা বিষয় আলোচনা করা হয়েছে।",
        keyIdeas: [
          "কর্ম ও কর্তব্য: কাজের উদ্দেশ্য, দায়িত্ব ও নৈতিক সিদ্ধান্ত নিয়ে চিন্তা।",
          "জ্ঞান ও আত্মজিজ্ঞাসা: জীবন, আত্মা ও বাস্তবতা নিয়ে দার্শনিক অনুসন্ধান।",
          "ভক্তি: ঈশ্বরের প্রতি ভক্তি ও আত্মসমর্পণের বিভিন্ন ব্যাখ্যা।",
          "যোগ: মনোসংযম, অনুশীলন ও আত্মবিকাশের বিভিন্ন পথ।",
        ],
        editorialNote:
          "গীতার শ্লোকের অনুবাদ ও দার্শনিক ব্যাখ্যা বিভিন্ন ভাষ্য ও আধ্যাত্মিক ধারায় ভিন্ন হতে পারে।",
      },
      en: {
        category: "Philosophy & guidance",
        title: "Bhagavad Gita",
        description:
          "Explore teachings about action, knowledge, devotion, and duty.",
        introduction:
          "The Bhagavad Gita is known as part of the Bhishma Parva of the Mahabharata. Framed as a dialogue between Krishna and Arjuna at Kurukshetra, it explores action, knowledge, devotion, duty, and self-inquiry.",
        keyIdeas: [
          "Action and duty: Reflecting on responsibility, intention, and ethical decisions.",
          "Knowledge and self-inquiry: Philosophical questions about the self, life, and reality.",
          "Devotion: Different understandings of devotion and surrender to the divine.",
          "Yoga: Paths involving discipline, practice, reflection, and personal development.",
        ],
        editorialNote:
          "Translations and philosophical interpretations of the Gita vary among commentaries and spiritual traditions.",
      },
      hi: {
        category: "दर्शन और उपदेश",
        title: "श्रीमद्भगवद्गीता",
        description:
          "कर्म, ज्ञान, भक्ति और कर्तव्य से जुड़ी शिक्षाओं को जानें।",
        introduction:
          "श्रीमद्भगवद्गीता को महाभारत के भीष्म पर्व का हिस्सा माना जाता है। कुरुक्षेत्र की पृष्ठभूमि में कृष्ण और अर्जुन के संवाद के माध्यम से इसमें कर्म, ज्ञान, भक्ति, कर्तव्य और आत्मचिंतन पर विचार किया गया है।",
        keyIdeas: [
          "कर्म और कर्तव्य: जिम्मेदारी, उद्देश्य और नैतिक निर्णयों पर विचार।",
          "ज्ञान और आत्मचिंतन: आत्मा, जीवन और वास्तविकता से जुड़े दार्शनिक प्रश्न।",
          "भक्ति: ईश्वर के प्रति भक्ति और समर्पण की विभिन्न व्याख्याएँ।",
          "योग: अनुशासन, अभ्यास, चिंतन और आत्मविकास के विभिन्न मार्ग।",
        ],
        editorialNote:
          "गीता के अनुवाद और दार्शनिक अर्थ विभिन्न भाष्यों तथा आध्यात्मिक परंपराओं में अलग हो सकते हैं।",
      },
    },
  },

  {
    slug: "ramayana",
    icon: "📜",
    content: {
      bn: {
        category: "মহাকাব্য",
        title: "রামায়ণ",
        description:
          "শ্রীরাম, সীতা, লক্ষ্মণ, হনুমান ও রামায়ণের ঐতিহ্য সম্পর্কে জানুন।",
        introduction:
          "রামায়ণ হিন্দু ঐতিহ্যের অন্যতম গুরুত্বপূর্ণ মহাকাব্য। শ্রীরামের কাহিনিকে কেন্দ্র করে এতে কর্তব্য, সম্পর্ক, ন্যায়, ভক্তি এবং আদর্শ জীবন নিয়ে বিভিন্ন আলোচনা ও সাংস্কৃতিক ঐতিহ্য গড়ে উঠেছে।",
        keyIdeas: [
          "শ্রীরাম ও সীতা: মহাকাব্যের কেন্দ্রীয় চরিত্র এবং তাঁদের সঙ্গে যুক্ত কাহিনি।",
          "লক্ষ্মণ ও হনুমান: আনুগত্য, সাহস, সেবা ও ভক্তির সঙ্গে যুক্ত আখ্যান।",
          "কর্তব্য ও নৈতিকতা: চরিত্রগুলোর সিদ্ধান্ত ঘিরে বিভিন্ন নৈতিক প্রশ্ন।",
          "বিভিন্ন রামায়ণ: সংস্কৃত, বাংলা এবং দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়ার বিভিন্ন ভাষায় প্রচলিত রূপ।",
        ],
        editorialNote:
          "রামায়ণের একাধিক পাঠ ও আঞ্চলিক রূপ রয়েছে; সব সংস্করণে কাহিনি ও ব্যাখ্যা এক নয়।",
      },
      en: {
        category: "Epic literature",
        title: "Ramayana",
        description:
          "Discover Rama, Sita, Lakshmana, Hanuman, and Ramayana traditions.",
        introduction:
          "The Ramayana is one of the major epics of Hindu traditions. Centered on the story of Rama, it has inspired discussions and cultural traditions concerning duty, relationships, justice, devotion, and ideals of life.",
        keyIdeas: [
          "Rama and Sita: Central figures and the stories associated with them.",
          "Lakshmana and Hanuman: Narratives connected with loyalty, courage, service, and devotion.",
          "Duty and ethics: Moral questions arising from the characters' choices.",
          "Different Ramayanas: Versions found in Sanskrit, Bengali, and many South and Southeast Asian languages.",
        ],
        editorialNote:
          "Multiple textual and regional Ramayana traditions exist; their narratives and interpretations are not identical.",
      },
      hi: {
        category: "महाकाव्य",
        title: "रामायण",
        description:
          "श्रीराम, सीता, लक्ष्मण, हनुमान और रामायण की परंपराओं को जानें।",
        introduction:
          "रामायण हिंदू परंपराओं के प्रमुख महाकाव्यों में से एक है। श्रीराम की कथा पर केंद्रित इस महाकाव्य से कर्तव्य, संबंध, न्याय, भक्ति और आदर्श जीवन से जुड़ी अनेक सांस्कृतिक परंपराएँ विकसित हुई हैं।",
        keyIdeas: [
          "श्रीराम और सीता: प्रमुख पात्र और उनसे जुड़ी कथाएँ।",
          "लक्ष्मण और हनुमान: निष्ठा, साहस, सेवा और भक्ति से जुड़ी कथाएँ।",
          "कर्तव्य और नैतिकता: पात्रों के निर्णयों से जुड़े नैतिक प्रश्न।",
          "विभिन्न रामायण: संस्कृत, बंगाली और दक्षिण तथा दक्षिण-पूर्व एशिया की अनेक भाषाओं में प्रचलित रूप।",
        ],
        editorialNote:
          "रामायण के कई पाठ और क्षेत्रीय रूप हैं; सभी संस्करणों की कथाएँ और व्याख्याएँ एक जैसी नहीं हैं।",
      },
    },
  },

  {
    slug: "mahabharata",
    icon: "⚔️",
    content: {
      bn: {
        category: "মহাকাব্য",
        title: "মহাভারত",
        description:
          "কুরুক্ষেত্র, পাণ্ডব, কৌরব ও মহাভারতের বিস্তৃত আখ্যান সম্পর্কে পড়ুন।",
        introduction:
          "মহাভারত ভারতীয় সাহিত্যের অন্যতম বিস্তৃত মহাকাব্য। কুরু বংশের সংঘাতকে কেন্দ্র করে এতে রাজনীতি, পরিবার, নৈতিক দ্বন্দ্ব, কর্তব্য ও দর্শনের নানা বিষয় উঠে এসেছে। ভগবদ্গীতা এই মহাকাব্যের অন্তর্ভুক্ত একটি গুরুত্বপূর্ণ অংশ।",
        keyIdeas: [
          "কুরু বংশ: পাণ্ডব ও কৌরবদের মধ্যে সংঘাতের পটভূমি।",
          "কুরুক্ষেত্র: মহাকাব্যের কেন্দ্রীয় যুদ্ধ ও তার পরিণতি।",
          "ধর্ম ও নৈতিক দ্বন্দ্ব: কঠিন পরিস্থিতিতে কর্তব্য ও সিদ্ধান্তের প্রশ্ন।",
          "ভগবদ্গীতা: যুদ্ধের প্রেক্ষাপটে কৃষ্ণ ও অর্জুনের দার্শনিক কথোপকথন।",
        ],
        editorialNote:
          "মহাভারতের পাঠ, কালনির্ণয় ও বিভিন্ন ঘটনার ব্যাখ্যা নিয়ে গবেষণা ও ঐতিহ্যভেদে মতপার্থক্য রয়েছে।",
      },
      en: {
        category: "Epic literature",
        title: "Mahabharata",
        description:
          "Explore the Kuru dynasty, the Pandavas, the Kauravas, and the epic's stories.",
        introduction:
          "The Mahabharata is one of the most extensive epics in Indian literature. Centered on a conflict within the Kuru dynasty, it explores politics, family, moral dilemmas, duty, and philosophy. The Bhagavad Gita is an important text within the epic.",
        keyIdeas: [
          "The Kuru dynasty: The background to the conflict between the Pandavas and Kauravas.",
          "Kurukshetra: The central war and its consequences within the epic.",
          "Dharma and moral dilemmas: Questions of duty and decision-making in difficult circumstances.",
          "Bhagavad Gita: A philosophical dialogue between Krishna and Arjuna set in the context of war.",
        ],
        editorialNote:
          "Interpretations of the Mahabharata's text, chronology, and events differ among scholarly approaches and traditions.",
      },
      hi: {
        category: "महाकाव्य",
        title: "महाभारत",
        description:
          "कुरु वंश, पांडवों, कौरवों और महाभारत की विस्तृत कथा को जानें।",
        introduction:
          "महाभारत भारतीय साहित्य के सबसे विस्तृत महाकाव्यों में से एक है। कुरु वंश के संघर्ष की पृष्ठभूमि में इसमें राजनीति, परिवार, नैतिक दुविधा, कर्तव्य और दर्शन से जुड़े अनेक विषय मिलते हैं। भगवद्गीता इस महाकाव्य का एक महत्वपूर्ण भाग है।",
        keyIdeas: [
          "कुरु वंश: पांडवों और कौरवों के बीच संघर्ष की पृष्ठभूमि।",
          "कुरुक्षेत्र: महाकाव्य का केंद्रीय युद्ध और उसके परिणाम।",
          "धर्म और नैतिक दुविधा: कठिन परिस्थितियों में कर्तव्य और निर्णय से जुड़े प्रश्न।",
          "भगवद्गीता: युद्ध की पृष्ठभूमि में कृष्ण और अर्जुन के बीच दार्शनिक संवाद।",
        ],
        editorialNote:
          "महाभारत के पाठ, कालक्रम और विभिन्न घटनाओं की व्याख्या में विद्वानों तथा परंपराओं के बीच मतभेद हैं।",
      },
    },
  },
] satisfies ScriptureRecord[];

export function getScriptureBySlug(slug: string) {
  return scriptures.find((scripture) => scripture.slug === slug);
}

export const scriptureSlugs = scriptures.map((scripture) => scripture.slug);
