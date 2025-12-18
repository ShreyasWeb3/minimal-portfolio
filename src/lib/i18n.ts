import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        projects: 'Projects',
        about: 'About',
        experience: 'Experience',
        contact: 'Contact',
      },
      hero: {
        greeting: "Hi, I'm Shreyas",
        role: '— A Senior Software Engineer.',
        intro: 'I build interactive web apps using',
        and: 'and',
        focus: 'With a focus on',
        design: 'UI',
        enthusiastic: 'design. Enthusiastic about',
        driven: ', driven by a keen eye for design.',
        resume: 'Resume / CV',
        contact: 'Get in touch',
      },
      projects: {
        featured: 'Featured',
        title: 'Projects',
        viewDetails: 'View Details',
        technologies: 'Technologies',
        status: 'All Systems Operational',
      },
      experience: {
        title: 'Experience',
      },
      about: {
        label: 'About',
        title: 'Me',
        name: 'Shreyas M B',
        bio: "I'm a Senior Software Engineer with 5+ years of experience building scalable web applications. I specialize in React, Next.js, and TypeScript, and I'm passionate about creating pixel-perfect user interfaces.",
        skills: 'Skills',
      },
      contact: {
        label: 'Get in Touch',
        title: 'Contact Me',
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email Address',
        emailPlaceholder: 'abc@example.com',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully! I will get back to you soon.',
      },
      ticker: {
        latest: 'LATEST',
      },
      footer: {
        rights: '© 2025 Shreyas. All rights reserved.',
        visitors: 'Visitors',
      },
    },
  },
  hi: {
    translation: {
      nav: {
        projects: 'प्रोजेक्ट्स',
        about: 'मेरे बारे में',
        experience: 'अनुभव',
        contact: 'संपर्क',
      },
      hero: {
        greeting: 'नमस्ते, मैं श्रेयस हूँ',
        role: '— एक सीनियर सॉफ्टवेयर इंजीनियर।',
        intro: 'मैं इंटरैक्टिव वेब ऐप्स बनाता हूँ',
        and: 'और',
        focus: 'जिसमें',
        design: 'UI',
        enthusiastic: 'डिज़ाइन पर खास ध्यान होता है।',
        driven: 'बेहतरीन डिज़ाइन के प्रति उत्साही।',
        resume: 'रिज्यूमे / सीवी',
        contact: 'संपर्क करें',
      },
      projects: {
        featured: 'विशेष',
        title: 'प्रोजेक्ट्स',
        viewDetails: 'विवरण देखें',
        technologies: 'तकनीक',
        status: 'सभी सिस्टम सक्रिय हैं',
      },
      experience: {
        title: 'कार्य अनुभव',
      },
      about: {
        label: 'परिचय',
        title: 'मेरा',
        name: 'श्रेयस एम बी',
        bio: 'मैं एक सीनियर सॉफ्टवेयर इंजीनियर हूँ जिसे स्केलेबल वेब एप्लिकेशन बनाने का 5+ वर्षों का अनुभव है। मैं React, Next.js और TypeScript में माहिर हूँ।',
        skills: 'कौशल',
      },
      contact: {
        label: 'संपर्क करें',
        title: 'मुझसे जुड़ें',
        name: 'आपका नाम',
        namePlaceholder: 'राहुल कुमार',
        email: 'ईमेल पता',
        emailPlaceholder: 'rahul@example.com',
        message: 'संदेश',
        messagePlaceholder: 'अपने प्रोजेक्ट के बारे में बताएं...',
        send: 'संदेश भेजें',
        sending: 'भेजा जा रहा है...',
        success: 'संदेश सफलतापूर्वक भेजा गया! मैं जल्द ही आपसे संपर्क करूंगा।',
      },
      ticker: {
        latest: 'नवीनतम',
      },
      footer: {
        rights: '© 2025 श्रेयस। सर्वाधिकार सुरक्षित।',
        visitors: 'विज़िटर्स',
      },
    },
  },
  ar: {
    translation: {
      nav: {
        projects: 'المشاريع',
        about: 'عني',
        experience: 'الخبرة',
        contact: 'تواصل',
      },
      hero: {
        greeting: 'مرحباً، أنا شرياس',
        role: '— مهندس برمجيات أول.',
        intro: 'أقوم ببناء تطبيقات ويب تفاعلية باستخدام',
        and: 'و',
        focus: 'مع التركيز على',
        design: 'UI',
        enthusiastic: '. شغوف بـ',
        driven: '، مدفوعاً بنظرة ثاقبة للتصميم.',
        resume: 'السيرة الذاتية',
        contact: 'تواصل معي',
      },
      projects: {
        featured: 'مميّز',
        title: 'المشاريع',
        viewDetails: 'عرض التفاصيل',
        technologies: 'التقنيات',
        status: 'جميع الأنظمة تعمل',
      },
      experience: {
        title: 'الخبرة العملية',
      },
      about: {
        label: 'نبذة',
        title: 'عني',
        name: 'شرياس إم بي',
        bio: 'أنا مهندس برمجيات أول ولدي أكثر من 5 سنوات من الخبرة في بناء تطبيقات الويب القابلة للتطوير. أنا متخصص في React و Next.js.',
        skills: 'المهارات',
      },
      contact: {
        label: 'تواصل معي',
        title: 'ابقى على اتصال',
        name: 'الاسم',
        namePlaceholder: 'أحمد محمد',
        email: 'البريد الإلكتروني',
        emailPlaceholder: 'ahmed@example.com',
        message: 'الرسالة',
        messagePlaceholder: 'أخبرني عن مشروعك...',
        send: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
        success: 'تم إرسال الرسالة بنجاح! سأعود إليك قريباً.',
      },
      ticker: {
        latest: 'الأحدث',
      },
      footer: {
        rights: '© 2025 شرياس. جميع الحقوق محفوظة.',
        visitors: 'الزوار',
      },
    },
  },
  de: {
    translation: {
      nav: {
        projects: 'Projekte',
        about: 'Über mich',
        experience: 'Erfahrung',
        contact: 'Kontakt',
      },
      hero: {
        greeting: 'Hi, ich bin Shreyas',
        role: '— Senior Software-Ingenieur.',
        intro: 'Ich baue interaktive Web-Apps mit',
        and: 'und',
        focus: 'Mit Fokus auf',
        design: 'UI',
        enthusiastic: 'Design. Begeistert von',
        driven: ', getrieben von einem guten Auge für Design.',
        resume: 'Lebenslauf',
        contact: 'Kontakt',
      },
      projects: {
        featured: 'Ausgewählt',
        title: 'Projekte',
        viewDetails: 'Details ansehen',
        technologies: 'Technologien',
        status: 'Alle Systeme Betriebsbereit',
      },
      experience: {
        title: 'Berufserfahrung',
      },
      about: {
        label: 'Über',
        title: 'Mich',
        name: 'Shreyas M B',
        bio: 'Ich bin ein Senior Software-Ingenieur mit über 5 Jahren Erfahrung im Erstellen skalierbarer Webanwendungen. Ich bin spezialisiert auf React und Next.js.',
        skills: 'Fähigkeiten',
      },
      contact: {
        label: 'Kontakt',
        title: 'Kontaktieren Sie mich',
        name: 'Ihr Name',
        namePlaceholder: 'Max Mustermann',
        email: 'E-Mail',
        emailPlaceholder: 'max@beispiel.de',
        message: 'Nachricht',
        messagePlaceholder: 'Erzählen Sie mir von Ihrem Projekt...',
        send: 'Senden',
        sending: 'Senden...',
        success: 'Nachricht gesendet! Ich melde mich bald.',
      },
      ticker: {
        latest: 'NEUESTE',
      },
      footer: {
        rights: '© 2025 Shreyas. Alle Rechte vorbehalten.',
        visitors: 'Besucher',
      },
    },
  },
  ja: {
    translation: {
      nav: {
        projects: 'プロジェクト',
        about: '自己紹介',
        experience: '経歴',
        contact: '連絡先',
      },
      hero: {
        greeting: 'こんにちは、Shreyasです',
        role: '— シニアソフトウェアエンジニア。',
        intro: '以下の技術を使ってインタラクティブなWebアプリを構築します',
        and: 'と',
        focus: '注力しているのは',
        design: 'UI',
        enthusiastic: 'デザインです。情熱を持って',
        driven: '、優れたデザインを追求しています。',
        resume: '履歴書',
        contact: 'お問い合わせ',
      },
      projects: {
        featured: '注目',
        title: 'プロジェクト',
        viewDetails: '詳細を見る',
        technologies: '使用技術',
        status: '全システム稼働中',
      },
      experience: {
        title: '職務経歴',
      },
      about: {
        label: '私に',
        title: 'ついて',
        name: 'Shreyas M B',
        bio: '私は5年以上の経験を持つシニアソフトウェアエンジニアで、スケーラブルなWebアプリケーションの構築を専門としています。ReactとNext.jsが得意です。',
        skills: 'スキル',
      },
      contact: {
        label: 'お問い合わせ',
        title: 'ご連絡ください',
        name: 'お名前',
        namePlaceholder: '山田 太郎',
        email: 'メールアドレス',
        emailPlaceholder: 'yamada@example.com',
        message: 'メッセージ',
        messagePlaceholder: 'プロジェクトについて教えてください...',
        send: '送信',
        sending: '送信中...',
        success: '送信されました！折り返しご連絡いたします。',
      },
      ticker: {
        latest: '最新',
      },
      footer: {
        rights: '© 2025 Shreyas. All rights reserved.',
        visitors: '訪問者数',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;