import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col gradient-primary">
      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative">
        {/* Logo */}
        <header className="text-center animate-fade-in">
          <h1 className="font-heading text-5xl font-bold text-primary-foreground tracking-tight">
            Kalam
          </h1>
          <p className="text-primary-foreground/80 mt-3 text-base">
            Learn languages the smart way
          </p>
        </header>
      </div>

      {/* Bottom buttons */}
      <footer className="px-6 pb-10 pt-4 space-y-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <Button variant="soft" size="lg" className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
          Get Started
        </Button>
        <Button variant="outline" size="lg" className="w-full border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10">
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
