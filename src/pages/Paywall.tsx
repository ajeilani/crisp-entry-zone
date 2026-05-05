import { Button } from "@/components/ui/button";
import { Check, Sparkles, MessageCircle, Languages, PlayCircle, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const features = [
  { icon: MessageCircle, text: "Practise real Arabic conversations with AI" },
  { icon: Languages, text: "Get instant corrections and translations" },
  { icon: PlayCircle, text: "Learn through videos and interactive tools" },
  { icon: TrendingUp, text: "Track your progress and improve daily" },
];

const Paywall = () => {
  const [plan, setPlan] = useState<"yearly" | "monthly">("yearly");
  const navigate = useNavigate();

  return (
    <main className="min-h-screen gradient-primary relative overflow-hidden">
      {/* Floating background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-24 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-md px-6 pt-10 pb-8 flex flex-col min-h-screen">
        {/* Welcome badge */}
        <div className="flex justify-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-primary-foreground" />
            <span className="text-xs font-medium text-primary-foreground">Welcome to Kalam</span>
          </div>
        </div>

        {/* Header */}
        <header className="text-center mt-6 animate-fade-in">
          <h1 className="font-heading text-4xl font-bold text-primary-foreground tracking-tight leading-tight">
            Start Your Arabic Journey
          </h1>
          <p className="text-primary-foreground/85 mt-3 text-base leading-relaxed">
            You're all set. Let's help you start speaking and understanding Arabic with confidence.
          </p>
        </header>

        {/* Features card */}
        <section className="mt-7 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5 space-y-3.5 animate-scale-in">
          {features.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-3">
              <div className="shrink-0 w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                <Icon className="w-4.5 h-4.5 text-primary-foreground" />
              </div>
              <p className="text-sm text-primary-foreground/95 pt-2 leading-snug">{text}</p>
            </div>
          ))}
        </section>

        {/* Pricing */}
        <section className="mt-6 space-y-3">
          <button
            type="button"
            onClick={() => setPlan("yearly")}
            className={`relative w-full text-left rounded-2xl p-4 transition-all duration-200 border-2 ${
              plan === "yearly"
                ? "bg-primary-foreground border-primary-foreground shadow-xl shadow-black/20"
                : "bg-white/10 border-white/25 backdrop-blur-md"
            }`}
          >
            <div className="absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full bg-yellow-300 text-[10px] font-bold text-primary tracking-wide">
              SAVE 50%
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm font-semibold ${plan === "yearly" ? "text-primary" : "text-primary-foreground"}`}>
                  Yearly · Best value
                </p>
                <p className={`text-xs mt-0.5 ${plan === "yearly" ? "text-primary/70" : "text-primary-foreground/70"}`}>
                  $48/year · just $4/month
                </p>
              </div>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                plan === "yearly" ? "bg-primary" : "border-2 border-white/40"
              }`}>
                {plan === "yearly" && <Check className="w-3 h-3 text-primary-foreground" />}
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setPlan("monthly")}
            className={`w-full text-left rounded-2xl p-4 transition-all duration-200 border-2 ${
              plan === "monthly"
                ? "bg-primary-foreground border-primary-foreground shadow-xl shadow-black/20"
                : "bg-white/10 border-white/25 backdrop-blur-md"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm font-semibold ${plan === "monthly" ? "text-primary" : "text-primary-foreground"}`}>
                  Monthly
                </p>
                <p className={`text-xs mt-0.5 ${plan === "monthly" ? "text-primary/70" : "text-primary-foreground/70"}`}>
                  $7.99/month
                </p>
              </div>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                plan === "monthly" ? "bg-primary" : "border-2 border-white/40"
              }`}>
                {plan === "monthly" && <Check className="w-3 h-3 text-primary-foreground" />}
              </div>
            </div>
          </button>

          <p className="text-center text-xs text-primary-foreground/75 pt-1">
            Lock in this price before it increases
          </p>
        </section>

        {/* CTA */}
        <footer className="mt-auto pt-6 space-y-3">
          <Button
            size="lg"
            className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground shadow-xl shadow-black/15 hover:shadow-2xl hover:shadow-black/25 hover:-translate-y-0.5 transition-all duration-200 font-semibold animate-pulse-cta"
          >
            Start 14-Day Free Trial
          </Button>
          <button
            onClick={() => navigate("/")}
            className="w-full text-center text-sm text-primary-foreground/70 hover:text-primary-foreground/90 transition-colors py-2"
          >
            Continue with limited access
          </button>
          <p className="text-center text-xs text-primary-foreground/60">
            Cancel anytime. No commitment. <br />
            Join learners building real Arabic skills.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Paywall;