import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const features = [
  "Practise real Arabic conversations",
  "Get instant corrections",
  "Learn through videos",
  "Track your progress",
];

const Paywall = () => {
  const [plan, setPlan] = useState<"yearly" | "monthly">("yearly");
  const navigate = useNavigate();

  return (
    <main className="min-h-screen gradient-primary relative overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-md min-h-screen px-6 pt-10 pb-6 flex flex-col">
        {/* Header */}
        <header className="text-center animate-fade-in">
          <h1 className="font-heading text-[28px] font-semibold text-primary-foreground tracking-tight leading-[1.15]">
            Start Speaking Arabic with Confidence
          </h1>
          <p className="text-primary-foreground/70 mt-3 text-[14px] leading-relaxed">
            Your first step to real conversations and steady progress.
          </p>
        </header>

        {/* Features */}
        <section className="mt-9 space-y-4">
          {features.map((text) => (
            <div key={text} className="flex items-center gap-3">
              <Check className="w-[18px] h-[18px] text-[hsl(var(--accent-yellow))] shrink-0" strokeWidth={2.5} />
              <p className="text-[14px] text-primary-foreground/85">{text}</p>
            </div>
          ))}
        </section>

        {/* Pricing */}
        <section className="mt-auto pt-10 space-y-3">
          <button
            type="button"
            onClick={() => setPlan("yearly")}
            className={`relative w-full text-left rounded-2xl px-5 py-4 transition-all duration-300 ${
              plan === "yearly"
                ? "bg-white shadow-[0_16px_40px_-16px_rgba(0,0,0,0.45)]"
                : "bg-white/[0.06] hover:bg-white/[0.1]"
            }`}
          >
            <div className="absolute -top-2.5 right-4 px-2.5 py-1 rounded-full bg-[hsl(var(--accent-yellow))] text-[10px] font-semibold text-foreground tracking-wide">
              Save 50%
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className={`text-[12px] font-medium ${plan === "yearly" ? "text-foreground/55" : "text-primary-foreground/65"}`}>
                  Yearly
                </p>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className={`text-[32px] font-bold leading-none tracking-tight ${plan === "yearly" ? "text-foreground" : "text-primary-foreground"}`}>$48</span>
                  <span className={`text-[13px] ${plan === "yearly" ? "text-foreground/50" : "text-primary-foreground/55"}`}>/year</span>
                </div>
              </div>
              <p className={`text-[12px] shrink-0 ${plan === "yearly" ? "text-foreground/55" : "text-primary-foreground/60"}`}>
                $4/month
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setPlan("monthly")}
            className={`w-full text-left rounded-2xl px-5 py-3.5 transition-all duration-300 ${
              plan === "monthly"
                ? "bg-white shadow-[0_16px_40px_-16px_rgba(0,0,0,0.45)]"
                : "bg-white/[0.04] hover:bg-white/[0.08]"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <p className={`text-[13px] font-medium ${plan === "monthly" ? "text-foreground/70" : "text-primary-foreground/65"}`}>
                Monthly
              </p>
              <div className="flex items-baseline gap-1">
                <span className={`text-[15px] font-semibold ${plan === "monthly" ? "text-foreground" : "text-primary-foreground/85"}`}>$7.99</span>
                <span className={`text-[11px] ${plan === "monthly" ? "text-foreground/50" : "text-primary-foreground/50"}`}>/mo</span>
              </div>
            </div>
          </button>
        </section>

        {/* CTA */}
        <footer className="mt-6 space-y-3">
          <Button
            size="lg"
            className="w-full bg-[hsl(var(--accent-yellow))] text-foreground hover:bg-[hsl(var(--accent-yellow))] hover:brightness-[1.03] shadow-[0_12px_32px_-12px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 transition-all duration-300 font-semibold text-[15px] h-14 rounded-2xl"
          >
            Start Free Trial
          </Button>
          <p className="text-center text-[11.5px] text-primary-foreground/55">
            Cancel anytime · No commitment
          </p>
          <button
            onClick={() => navigate("/")}
            className="w-full text-center text-[12px] text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors"
          >
            Maybe later
          </button>
        </footer>
      </div>
    </main>
  );
};

export default Paywall;