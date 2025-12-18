import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "hi", name: "हिंदी", flag: "🇮🇳" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    
    // Optional: Handle RTL for Arabic
    document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = code;
    
    setIsOpen(false);
  };

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 150)}
        className="p-2 rounded-lg hover:bg-secondary transition-all duration-200 
                   hover:scale-105 active:scale-95"
        aria-label="Change language"
      >
        <Languages className="h-4 w-4 text-foreground" />
      </button>

      <div
        className={`absolute right-0 top-full mt-2 w-44 bg-popover border border-border rounded-lg shadow-lg overflow-hidden
                    transition-all duration-200 origin-top-right
                    ${isOpen 
                      ? "opacity-100 scale-100 translate-y-0" 
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    }`}
      >
        <div className="py-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left
                         transition-all duration-150
                         hover:bg-secondary hover:translate-x-1
                         ${lang.code === currentLang.code ? "bg-secondary/50 text-foreground" : "text-muted-foreground"}`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className={lang.code === 'ar' ? 'font-arabic' : ''}>{lang.name}</span>
              {lang.code === currentLang.code && (
                <span className="ml-auto text-tag-teal">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}