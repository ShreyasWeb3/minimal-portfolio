import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "./ThemeProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isDark = theme === "dark" || 
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const navLinks = [
    { href: "#projects", label: t('nav.projects') },
    { href: "#experience", label: t('nav.experience') },
    { href: "#about", label: t('nav.about') },
    { href: "#contact", label: t('nav.contact') },
  ];

  return (
    <header className="w-full py-6 px-4 md:px-8 relative z-50">
      <nav className="max-w-4xl mx-auto flex items-center justify-between">
        <a 
          href="/" 
          className="font-serif text-xl font-semibold text-foreground cursor-pointer 
                     transition-all duration-300 hover:opacity-80 hover:scale-105"
        >
          Shreyas's Den 
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-sm font-medium text-muted-foreground 
                         transition-all duration-200 hover:text-foreground hover:-translate-y-0.5"
            >
              {link.label}
            </a>
          ))}
          
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2 rounded-lg hover:bg-secondary 
                       transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-foreground transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="h-4 w-4 text-foreground transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>
          
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2 rounded-lg hover:bg-secondary transition-all duration-200"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-foreground" />
            ) : (
              <Moon className="h-4 w-4 text-foreground" />
            )}
          </button>
          
          <LanguageSwitcher />
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-secondary transition-all duration-200"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in z-50">
          <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground py-2
                           transition-all duration-200 hover:text-foreground hover:translate-x-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
