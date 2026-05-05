import { Button } from "@/components/ui/button";
import { MessageCircle, Languages, PlayCircle, TrendingUp, Star } from "lucide-react";
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

      <div className="relative z-10 mx-auto w-full max-w-md min-h-screen px-6 pt-7 pb-6 flex flex-col">
        {/* Top label */}
        <p className="text-center text-[10px] font-semibold tracking-[0.22em] uppercase text-primary-foreground/55 animate-fade-in">
          Welcome to Kalam
        </p>

        {/* Header */}
        <header className="text-center mt-3 animate-fade-in">
          <h1 className="font-heading text-[26px] font-semibold text-primary-foreground tracking-tight leading-[1.15]">
            Start Speaking Arabic with Confidence
          </h1>
          <p className="text-primary-foreground/70 mt-2.5 text-[13px] leading-relaxed px-2">
            You're all set. Let's help you start speaking with confidence.
          </p>

          {/* Social proof */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm">
            <div className="flex -space-x-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-300 to-purple-400 ring-2 ring-[hsl(262,83%,58%)]" />
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-200 to-orange-400 ring-2 ring-[hsl(262,83%,58%)]" />
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-teal-200 to-emerald-400 ring-2 ring-[hsl(262,83%,58%)]" />
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-[hsl(var(--accent-yellow))] text-[hsl(var(--accent-yellow))]" />
              <span className="text-[11px] font-medium text-primary-foreground/90">Loved by 10,000+ learners</span>
            </div>
          </div>
        </header>

        {/* Features */}
        <section className="mt-7 space-y-4">
          {features.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3.5">
              <Icon className="w-[18px] h-[18px] text-primary-foreground/80 shrink-0" strokeWidth={1.75} />
              <p className="text-[13.5px] text-primary-foreground/90 leading-snug">{text}</p>
            </div>
          ))}
        </section>

        {/* Pricing */}
        <section className="mt-auto pt-7 space-y-2.5">
          <button
            type="button"
            onClick={() => setPlan("yearly")}
            className={`relative w-full text-left rounded-2xl px-5 py-4 transition-all duration-300 ring-1 ${
              plan === "yearly"
                ? "bg-white ring-white shadow-[0_12px_32px_-12px_rgba(0,0,0,0.4)]"
                : "bg-white/[0.08] ring-white/15 hover:bg-white/[0.12]"
            }`}
          >
            <div className="absolute -top-2 right-4 px-2.5 py-0.5 rounded-full bg-[hsl(var(--accent-yellow))] text-[10px] font-semibold text-foreground tracking-wide shadow-sm">
              Save 50%
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className={`text-[12px] font-medium ${plan === "yearly" ? "text-foreground/55" : "text-primary-foreground/65"}`}>
                  Yearly · Best Value
                </p>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className={`text-[22px] font-semibold leading-none ${plan === "yearly" ? "text-foreground" : "text-primary-foreground"}`}>$48</span>
                  <span className={`text-[12px] ${plan === "yearly" ? "text-foreground/50" : "text-primary-foreground/55"}`}>/year</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className={`text-[12px] ${plan === "yearly" ? "text-foreground/60" : "text-primary-foreground/65"}`}>$4/month</p>
                <p className={`text-[10.5px] mt-0.5 line-through ${plan === "yearly" ? "text-foreground/35" : "text-primary-foreground/40"}`}>
                  $7.99/mo
                </p>
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setPlan("monthly")}
            className={`w-full text-left rounded-2xl px-5 py-3.5 transition-all duration-300 ring-1 ${
              plan === "monthly"
                ? "bg-white ring-white shadow-[0_12px_32px_-12px_rgba(0,0,0,0.4)]"
                : "bg-white/[0.08] ring-white/15 hover:bg-white/[0.12]"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <p className={`text-[13px] font-medium ${plan === "monthly" ? "text-foreground/70" : "text-primary-foreground/80"}`}>
                Monthly
              </p>
              <div className="flex items-baseline gap-1">
                <span className={`text-[16px] font-semibold ${plan === "monthly" ? "text-foreground" : "text-primary-foreground"}`}>$7.99</span>
                <span className={`text-[11px] ${plan === "monthly" ? "text-foreground/50" : "text-primary-foreground/55"}`}>/mo</span>
              </div>
            </div>
          </button>
        </section>

        {/* CTA */}
        <footer className="mt-4 space-y-2.5">
          <p className="text-center text-[11px] font-medium text-[hsl(var(--accent-yellow))]/90">
            Lock in this 50% discount today
          </p>
          <Button
            size="lg"
            className="w-full bg-[hsl(var(--accent-yellow))] text-foreground hover:bg-[hsl(var(--accent-yellow))] hover:brightness-[1.03] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 transition-all duration-300 font-semibold text-[15px] h-13 rounded-2xl animate-pulse-cta"
          >
            Start Your Free Trial
          </Button>
          <p className="text-center text-[11px] text-primary-foreground/55">
            7 days free · Cancel anytime
          </p>
          <button
            onClick={() => navigate("/")}
            className="w-full text-center text-[12.5px] text-primary-foreground/45 hover:text-primary-foreground/75 transition-colors pt-0.5"
          >
            Maybe later
          </button>
        </footer>
      </div>
    </main>
  );
};

export default Paywall;