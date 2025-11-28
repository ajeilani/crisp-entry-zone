import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Index = () => {
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
          <p className="text-primary-foreground/80 mt-3 text-base flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            Learn languages the smart way
          </p>
        </header>
      </div>

      {/* Bottom buttons */}
      <footer className="px-6 pb-10 pt-4 space-y-3 relative z-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <Button 
          variant="soft" 
          size="lg" 
          className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg shadow-black/10"
        >
          Get Started
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="w-full border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
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
