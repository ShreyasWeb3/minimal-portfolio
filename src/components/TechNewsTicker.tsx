import { useTranslation } from "react-i18next";

const techNews = [
  "🚀 Next.js 15 introduces Turbopack for faster builds",
  "⚡ React 19 RC brings Server Components to stable",
  "🦀 Rust continues to dominate systems programming",
  "🤖 OpenAI releases GPT-5 with enhanced reasoning",
  "📱 Apple announces Vision Pro 2 for developers",
  "🎨 Tailwind CSS v4 brings native CSS nesting",
  "🔥 Bun 2.0 achieves full Node.js compatibility",
  "💡 TypeScript 5.5 adds new inference features",
  "🌐 Vercel launches Edge Middleware v2",
  "🎯 Supabase reaches 1 million databases milestone"
];

export function TechNewsTicker() {
  const { t } = useTranslation();

  return (
    <section >
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="flex items-center gap-4">
          <span className="px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full flex-shrink-0">
            {t('ticker.latest')}
          </span>
          <div className="relative flex-1 overflow-hidden">
            <div className="flex animate-ticker">
              {[...techNews, ...techNews].map((news, index) => (
                <span 
                  key={index} 
                  className="whitespace-nowrap px-8 text-sm text-muted-foreground"
                >
                  {news}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
