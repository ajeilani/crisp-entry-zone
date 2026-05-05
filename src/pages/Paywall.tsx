import { Button } from "@/components/ui/button";
import { Check, Sparkles, MessageCircle, Languages, PlayCircle, TrendingUp, Users } from "lucide-react";
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25">
            <Sparkles className="w-3.5 h-3.5 text-accent-yellow" />
            <span className="text-xs font-semibold text-primary-foreground tracking-wide">Welcome to Kalam</span>
          </div>
        </div>

        {/* Header */}
        <header className="text-center mt-5 animate-fade-in">
          <h1 className="font-heading text-[2rem] font-bold text-primary-foreground tracking-tight leading-[1.15]">
            Start Speaking Arabic with Confidence
          </h1>
          <p className="text-primary-foreground/80 mt-3 text-sm leading-relaxed">
            You're all set. Let's help you start speaking and understanding Arabic with confidence.
          </p>
        </header>

        {/* Features card */}
        <section className="mt-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5 space-y-3.5 animate-scale-in">
          {features.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-3">
              <div className="shrink-0 w-9 h-9 rounded-xl bg-accent-yellow/20 border border-accent-yellow/30 flex items-center justify-center">
                <Icon className="w-4 h-4 text-accent-yellow" />
              </div>
              <p className="text-sm text-primary-foreground/95 pt-2 leading-snug font-medium">{text}</p>
            </div>
          ))}
        </section>

        {/* Pricing */}
        <section className="mt-6 space-y-3">
          <button
            type="button"
            onClick={() => setPlan("yearly")}
            className={`relative w-full text-left rounded-2xl p-4 pr-5 transition-all duration-300 border-2 ${
              plan === "yearly"
                ? "bg-white border-accent-yellow shadow-2xl shadow-black/25 scale-[1.02]"
                : "bg-white/10 border-white/25 backdrop-blur-md"
            }`}
          >
            <div className="absolute -top-2.5 right-4 px-3 py-1 rounded-full bg-accent-yellow text-[10px] font-extrabold text-foreground tracking-wider shadow-lg shadow-black/20">
              SAVE 50%
            </div>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className={`text-sm font-bold ${plan === "yearly" ? "text-primary" : "text-primary-foreground"}`}>
                  Yearly · Best Value
                </p>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className={`text-xl font-extrabold ${plan === "yearly" ? "text-foreground" : "text-primary-foreground"}`}>$48</span>
                  <span className={`text-xs ${plan === "yearly" ? "text-muted-foreground" : "text-primary-foreground/70"}`}>/year · $4/mo</span>
                </div>
                <p className={`text-[11px] mt-0.5 line-through ${plan === "yearly" ? "text-muted-foreground/70" : "text-primary-foreground/50"}`}>
                  Instead of $7.99/month
                </p>
              </div>
              <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                plan === "yearly" ? "bg-primary" : "border-2 border-white/40"
              }`}>
                {plan === "yearly" && <Check className="w-3 h-3 text-primary-foreground" />}
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setPlan("monthly")}
            className={`w-full text-left rounded-2xl p-4 transition-all duration-300 border-2 ${
              plan === "monthly"
                ? "bg-white border-accent-yellow shadow-2xl shadow-black/25 scale-[1.02]"
                : "bg-white/5 border-white/15 backdrop-blur-md"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm font-bold ${plan === "monthly" ? "text-primary" : "text-primary-foreground/90"}`}>
                  Monthly
                </p>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className={`text-lg font-extrabold ${plan === "monthly" ? "text-foreground" : "text-primary-foreground/90"}`}>$7.99</span>
                  <span className={`text-xs ${plan === "monthly" ? "text-muted-foreground" : "text-primary-foreground/60"}`}>/month</span>
                </div>
              </div>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                plan === "monthly" ? "bg-primary" : "border-2 border-white/40"
              }`}>
                {plan === "monthly" && <Check className="w-3 h-3 text-primary-foreground" />}
              </div>
            </div>
          </button>

          <p className="text-center text-xs font-medium text-accent-yellow pt-1">
            ⚡ Lock in this 50% discount today
          </p>
        </section>

        {/* CTA */}
        <footer className="mt-auto pt-6 space-y-3">
          <Button
            size="lg"
            className="w-full bg-accent-yellow text-foreground hover:bg-accent-yellow hover:brightness-105 shadow-xl shadow-black/25 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 font-bold text-base h-14 rounded-2xl animate-pulse-cta"
          >
            Start 7-Day Free Trial
          </Button>
          <p className="text-center text-xs text-primary-foreground/75">
            Cancel anytime · No commitment
          </p>
          <button
            onClick={() => navigate("/")}
            className="w-full text-center text-sm text-primary-foreground/60 hover:text-primary-foreground/90 underline-offset-4 hover:underline transition-colors py-1"
          >
            Continue with limited access
          </button>
          <div className="flex items-center justify-center gap-1.5 pt-1">
            <Users className="w-3 h-3 text-primary-foreground/60" />
            <p className="text-center text-[11px] text-primary-foreground/60">
              Join thousands learning Arabic with Kalam
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Paywall;