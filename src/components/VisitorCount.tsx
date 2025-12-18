import { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import { useTranslation } from "react-i18next";

export function VisitorCount() {
  const { t } = useTranslation();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const storedCount = localStorage.getItem("visitorCount");
    const currentCount = storedCount ? parseInt(storedCount, 10) : 1; 
    
    const sessionCounted = sessionStorage.getItem("counted");
    if (!sessionCounted) {
      const newCount = currentCount + 1;
      localStorage.setItem("visitorCount", newCount.toString());
      sessionStorage.setItem("counted", "true");
      setCount(newCount);
    } else {
      setCount(currentCount);
    }
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Eye className="w-4 h-4" />
      <span>{t('footer.visitors')}: {count.toLocaleString()}</span>
    </div>
  );
}
