import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Splash Screen
  if (showSplash) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gradient-primary overflow-hidden relative">
        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        
        {/* Logo */}
        <div className="relative z-10 text-center animate-scale-in">
          <h1 className="font-heading text-7xl font-bold text-primary-foreground tracking-tight">
            Kalam
          </h1>
          <div className="mt-8 flex justify-center">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-primary-foreground/80 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
              <span className="w-2 h-2 bg-primary-foreground/80 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
              <span className="w-2 h-2 bg-primary-foreground/80 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col gradient-primary overflow-hidden relative">
      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-40 right-8 w-24 h-24 bg-white/5 rounded-full blur-xl" />
        <div className="absolute bottom-60 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
        {/* Logo */}
        <header className="text-center animate-scale-in">
          <h1 className="font-heading text-5xl font-bold text-primary-foreground tracking-tight">
            Kalam
          </h1>
          <p className="text-primary-foreground/80 mt-3 text-base">
            Learn Arabic with confidence
          </p>
        </header>
      </div>

      {/* Bottom buttons */}
      <footer className="px-6 pb-10 pt-4 space-y-3 relative z-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <Button 
          variant="soft" 
          size="lg" 
          className="w-full bg-primary-foreground text-primary shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 hover:-translate-y-0.5 transition-all duration-200"
        >
          Get Started
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="w-full border-primary-foreground/40 text-primary-foreground bg-white/10 hover:bg-white/25 hover:border-primary-foreground/60 hover:shadow-lg hover:shadow-white/10 backdrop-blur-sm transition-all duration-200"
        >
          Sign in
        </Button>
        
        <p className="text-center text-xs text-primary-foreground/60 pt-2">
          By continuing, you agree to our{" "}
          <a href="#" className="text-primary-foreground/80 hover:underline">Terms</a>
          {" "}and{" "}
          <a href="#" className="text-primary-foreground/80 hover:underline">Privacy Policy</a>
        </p>
      </footer>
    </main>
  );
};

export default Index;
