import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Send, User, Mail, MessageSquare } from "lucide-react";

export function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-8 bg-grid-pattern">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 animate-fade-in">
          <p className="text-sm text-muted-foreground mb-1">{t('contact.label')}</p>
          <h2 className="text-3xl font-serif font-semibold text-foreground">{t('contact.title')}</h2>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="space-y-6 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          {/* Name */}
          <div className="group">
            <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
              {t('contact.name')}
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground
                              transition-colors duration-200 group-focus-within:text-foreground" />
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
                className="w-full pl-10 pr-4 py-3 bg-secondary/50 border border-border rounded-lg
                          text-foreground placeholder:text-muted-foreground
                          transition-all duration-300 ease-out
                          focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                          hover:bg-secondary/70 hover:border-border/80"
                placeholder={t('contact.namePlaceholder')}
              />
            </div>
          </div>

          {/* Email */}
          <div className="group">
            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
              {t('contact.email')}
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground
                              transition-colors duration-200 group-focus-within:text-foreground" />
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
                className="w-full pl-10 pr-4 py-3 bg-secondary/50 border border-border rounded-lg
                          text-foreground placeholder:text-muted-foreground
                          transition-all duration-300 ease-out
                          focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                          hover:bg-secondary/70 hover:border-border/80"
                placeholder={t('contact.emailPlaceholder')}
              />
            </div>
          </div>

          {/* Message */}
          <div className="group">
            <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
              {t('contact.message')}
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground
                                        transition-colors duration-200 group-focus-within:text-foreground" />
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                required
                rows={5}
                className="w-full pl-10 pr-4 py-3 bg-secondary/50 border border-border rounded-lg
                          text-foreground placeholder:text-muted-foreground resize-none
                          transition-all duration-300 ease-out
                          focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                          hover:bg-secondary/70 hover:border-border/80"
                placeholder={t('contact.messagePlaceholder')}
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg
                      font-medium transition-all duration-300 ease-out
                      hover:scale-105 hover:shadow-lg active:scale-95
                      disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? t('contact.sending') : t('contact.send')}</span>
            <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {submitted && (
            <p className="text-green-600 dark:text-green-400 animate-fade-in">
              {t('contact.success')}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
