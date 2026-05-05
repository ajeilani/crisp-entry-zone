import { Button } from "@/components/ui/button";
import { MessageCircle, Languages, PlayCircle, TrendingUp, Sparkles, Heart, Users, Lock, ShieldCheck, Check } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const features = [
  { icon: MessageCircle, title: "Practise real Arabic conversations", sub: "Speak naturally with AI" },
  { icon: Languages, title: "Get instant corrections", sub: "And accurate translations" },
  { icon: PlayCircle, title: "Learn through videos", sub: "Engaging lessons and interactive tools" },
  { icon: TrendingUp, title: "Track your progress", sub: "Stay motivated and improve daily" },
];

const Paywall = () => {
  const [plan, setPlan] = useState<"yearly" | "monthly">("yearly");
  const navigate = useNavigate();

  return (
    <main className="min-h-screen gradient-primary relative overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-md min-h-screen px-6 pt-8 pb-6 flex flex-col">
        {/* Welcome pill */}
        <div className="flex justify-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 ring-1 ring-primary-foreground/15">
            <Sparkles className="w-3.5 h-3.5 text-[hsl(var(--accent-yellow))]" />
            <span className="text-[11px] font-semibold tracking-[0.18em] text-primary-foreground/85">WELCOME TO KALAM</span>
          </div>
        </div>

        {/* Header */}
        <header className="text-center mt-6 animate-fade-in">
          <h1 className="font-heading text-[34px] font-bold text-primary-foreground tracking-tight leading-[1.1]">
            Start Speaking Arabic with Confidence
          </h1>
          <p className="text-primary-foreground/70 mt-4 text-[14px] leading-relaxed">
            Your first step to real conversations,<br />clearer pronunciation, and steady daily progress.
          </p>

          {/* Social proof */}
          <div className="mt-5 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary-foreground/10 ring-1 ring-primary-foreground/15">
            <Users className="w-4 h-4 text-primary-foreground" />
            <span className="text-[13px] font-medium text-primary-foreground">Loved by 1,000+ learners</span>
            <Heart className="w-3.5 h-3.5 fill-[hsl(var(--accent-yellow))] text-[hsl(var(--accent-yellow))]" />
          </div>
        </header>

        {/* Features */}
        <section className="mt-8 space-y-5">
          {features.map(({ icon: Icon, title, sub }, i) => (
            <div key={title}>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary-foreground/10 ring-1 ring-primary-foreground/15 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary-foreground" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <p className="text-[15px] font-semibold text-primary-foreground leading-tight">{title}</p>
                  <p className="text-[12.5px] text-primary-foreground/60 mt-0.5">{sub}</p>
                </div>
              </div>
              {i < features.length - 1 && <div className="h-px bg-primary-foreground/10 ml-15 mt-5" style={{ marginLeft: '60px' }} />}
            </div>
          ))}
        </section>

        {/* Pricing */}
        <section className="mt-8 space-y-3">
          <button
            type="button"
            onClick={() => setPlan("yearly")}
            className={`relative w-full text-left rounded-2xl px-5 py-5 transition-all duration-300 ${
              plan === "yearly"
                ? "bg-white shadow-[0_16px_40px_-16px_rgba(0,0,0,0.45)]"
                : "bg-primary-foreground/[0.08] hover:bg-primary-foreground/[0.12]"
            }`}
          >
            <div className="absolute -top-2.5 right-4 px-3 py-1 rounded-full bg-[hsl(var(--accent-yellow))] text-[10px] font-bold text-foreground tracking-wider">
              SAVE 50%
            </div>
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[15px] font-bold ${plan === "yearly" ? "text-primary" : "text-primary-foreground"}`}>Yearly</span>
                  <span className={`text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-md ${plan === "yearly" ? "bg-primary/10 text-primary" : "bg-primary-foreground/15 text-primary-foreground/80"}`}>BEST VALUE</span>
                </div>
                <div className="flex items-baseline gap-1.5 mt-2">
                  <span className={`text-[40px] font-bold leading-none tracking-tight ${plan === "yearly" ? "text-foreground" : "text-primary-foreground"}`}>$48</span>
                  <span className={`text-[14px] ${plan === "yearly" ? "text-foreground/55" : "text-primary-foreground/60"}`}>/year</span>
                </div>
                <p className={`text-[13px] font-semibold mt-2 ${plan === "yearly" ? "text-primary" : "text-primary-foreground/80"}`}>$4/month</p>
                <p className={`text-[12px] mt-1 ${plan === "yearly" ? "text-foreground/40" : "text-primary-foreground/40"}`}>
                  Was <span className="line-through">$7.99/month</span>
                </p>
              </div>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${plan === "yearly" ? "bg-primary" : "ring-1 ring-primary-foreground/40"}`}>
                {plan === "yearly" && <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />}
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setPlan("monthly")}
            className={`w-full text-left rounded-2xl px-5 py-4 transition-all duration-300 ${
              plan === "monthly"
                ? "bg-white shadow-[0_16px_40px_-16px_rgba(0,0,0,0.45)]"
                : "bg-primary-foreground/[0.08] hover:bg-primary-foreground/[0.12]"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className={`text-[14px] font-semibold ${plan === "monthly" ? "text-foreground" : "text-primary-foreground"}`}>Monthly</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className={`text-[22px] font-bold ${plan === "monthly" ? "text-foreground" : "text-primary-foreground"}`}>$7.99</span>
                  <span className={`text-[12px] ${plan === "monthly" ? "text-foreground/50" : "text-primary-foreground/55"}`}>/month</span>
                </div>
              </div>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${plan === "monthly" ? "bg-primary" : "ring-1 ring-primary-foreground/40"}`}>
                {plan === "monthly" && <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />}
              </div>
            </div>
          </button>
        </section>

        {/* CTA */}
        <footer className="mt-6 space-y-3">
          <div className="flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-[hsl(var(--accent-yellow))]" />
            <p className="text-center text-[12.5px] text-primary-foreground/75">
              Lock in this 50% discount today
            </p>
          </div>
          <Button
            size="lg"
            className="w-full bg-[hsl(var(--accent-yellow))] text-foreground hover:bg-[hsl(var(--accent-yellow))] hover:brightness-[1.03] shadow-[0_12px_32px_-12px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 transition-all duration-300 font-bold text-[16px] h-14 rounded-2xl gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Start Free Trial
          </Button>
          <div className="flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-primary-foreground/55" />
            <p className="text-center text-[12px] text-primary-foreground/55">
              Cancel anytime · No commitment
            </p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="w-full text-center text-[13px] font-medium text-primary-foreground/55 hover:text-primary-foreground/85 transition-colors pt-1"
          >
            Maybe later
          </button>
        </footer>
      </div>
    </main>
  );
};

export default Paywall;