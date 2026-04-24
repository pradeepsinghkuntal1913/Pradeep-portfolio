import { useState, useEffect } from "react";
import { Code2 } from "lucide-react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 left-1/3 w-60 h-60 bg-secondary/10 rounded-full blur-[80px]" />

      {/* Logo / Icon */}
      <div className="relative mb-8 animate-pulse">
        <div className="w-20 h-20 rounded-2xl glass-card border border-primary/30 flex items-center justify-center glow-neon">
          <Code2 className="w-10 h-10 text-primary" />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-2xl font-bold tracking-wider mb-2">
        <span className="gradient-text">PKK</span>
      </h1>
      <p className="text-sm text-muted-foreground mb-8 tracking-widest uppercase">
        Loading Portfolio
      </p>

      {/* Progress bar */}
      <div className="w-48 h-1 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="mt-3 text-xs text-muted-foreground font-mono">{progress}%</span>
    </div>
  );
};

export default LoadingScreen;
