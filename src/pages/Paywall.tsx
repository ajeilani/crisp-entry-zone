import { Button } from "@/components/ui/button";
import { MessageCircle, Languages, PlayCircle, TrendingUp } from "lucide-react";
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
      {/* Soft ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-md px-6 pt-12 pb-10 flex flex-col min-h-screen">
        {/* Top label */}
        <p className="text-center text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/60 animate-fade-in">
          Welcome to Kalam
        </p>

        {/* Header */}
        <header className="text-center mt-4 animate-fade-in">
          <h1 className="font-heading text-[1.875rem] font-semibold text-primary-foreground tracking-tight leading-[1.15]">
            Start Speaking Arabic with Confidence
          </h1>
          <p className="text-primary-foreground/70 mt-3 text-[15px] leading-relaxed">
            You're all set. Let's help you start speaking and understanding Arabic with confidence.
          </p>
        </header>

        {/* Features */}
        <section className="mt-10 space-y-5">
          {features.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-4">
              <Icon className="w-[18px] h-[18px] text-primary-foreground/85 shrink-0" strokeWidth={1.75} />
              <p className="text-[14px] text-primary-foreground/90 leading-snug">{text}</p>
            </div>
          ))}
        </section>

        {/* Pricing */}
        <section className="mt-10 space-y-3">
          <button
            type="button"
            onClick={() => setPlan("yearly")}
            className={`relative w-full text-left rounded-2xl px-5 py-4 transition-all duration-300 ${
              plan === "yearly"
                ? "bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.35)]"
                : "bg-white/8 backdrop-blur-sm hover:bg-white/12"
            }`}
          >
            {plan === "yearly" && (
              <div className="absolute -top-2 right-4 px-2.5 py-0.5 rounded-full bg-[hsl(var(--accent-yellow))] text-[10px] font-semibold text-foreground tracking-wide">
                Save 50%
              </div>
            )}
            <div className="flex items-baseline justify-between">
              <div>
                <p className={`text-[13px] font-medium ${plan === "yearly" ? "text-foreground/60" : "text-primary-foreground/70"}`}>
                  Yearly · Best Value
                </p>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className={`text-2xl font-semibold ${plan === "yearly" ? "text-foreground" : "text-primary-foreground"}`}>$48</span>
                  <span className={`text-xs ${plan === "yearly" ? "text-foreground/50" : "text-primary-foreground/55"}`}>per year</span>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-xs ${plan === "yearly" ? "text-foreground/55" : "text-primary-foreground/60"}`}>$4/month</p>
                <p className={`text-[11px] mt-0.5 ${plan === "yearly" ? "text-foreground/35 line-through" : "text-primary-foreground/40 line-through"}`}>
                  $7.99/mo
                </p>
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setPlan("monthly")}
            className={`w-full text-left rounded-2xl px-5 py-4 transition-all duration-300 ${
              plan === "monthly"
                ? "bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.35)]"
                : "bg-white/8 backdrop-blur-sm hover:bg-white/12"
            }`}
          >
            <div className="flex items-baseline justify-between">
              <div>
                <p className={`text-[13px] font-medium ${plan === "monthly" ? "text-foreground/60" : "text-primary-foreground/70"}`}>
                  Monthly
                </p>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className={`text-2xl font-semibold ${plan === "monthly" ? "text-foreground" : "text-primary-foreground"}`}>$7.99</span>
                  <span className={`text-xs ${plan === "monthly" ? "text-foreground/50" : "text-primary-foreground/55"}`}>per month</span>
                </div>
              </div>
            </div>
          </button>
        </section>

        {/* CTA */}
        <footer className="mt-auto pt-10 space-y-3">
          <p className="text-center text-[12px] text-primary-foreground/55">
            Lock in this 50% discount today
          </p>
          <Button
            size="lg"
            className="w-full bg-[hsl(var(--accent-yellow))] text-foreground hover:bg-[hsl(var(--accent-yellow))] hover:brightness-[1.03] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 transition-all duration-300 font-semibold text-[15px] h-14 rounded-2xl animate-pulse-cta"
          >
            Start Free Trial
          </Button>
          <p className="text-center text-[12px] text-primary-foreground/55">
            Cancel anytime · No commitment
          </p>
          <button
            onClick={() => navigate("/")}
            className="w-full text-center text-[13px] text-primary-foreground/50 hover:text-primary-foreground/75 transition-colors pt-3"
          >
            Continue with limited access
          </button>
        </footer>
      </div>
    </main>
  );
};

export default Paywall;