import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative">
        {/* Logo */}
        <header className="text-center animate-fade-in">
          <h1 className="font-heading text-5xl font-bold text-primary tracking-tight">
            Kalam
          </h1>
          <p className="text-muted-foreground mt-3 text-base">
            Learn languages the smart way
          </p>
        </header>
      </div>

      {/* Bottom buttons */}
      <footer className="px-6 pb-10 pt-4 space-y-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <Button variant="soft" size="lg" className="w-full">
          Get Started
        </Button>
        <Button variant="hero" size="lg" className="w-full">
          Sign in
        </Button>
        
        <p className="text-center text-xs text-muted-foreground pt-2">
          By continuing, you agree to our{" "}
          <a href="#" className="text-primary hover:underline">Terms</a>
          {" "}and{" "}
          <a href="#" className="text-primary hover:underline">Privacy Policy</a>
        </p>
      </footer>
    </main>
  );
};

export default Index;
