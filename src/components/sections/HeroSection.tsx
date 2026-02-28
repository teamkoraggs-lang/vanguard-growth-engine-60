import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    </div>

    {/* Glow orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

    <div className="container mx-auto relative z-10 text-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 text-sm text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
          Now accepting new projects for Q2 2026
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-balance"
      >
        Websites Built to Lead.
        <br />
        <span className="gradient-text">Designed to Convert.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
      >
        Vanguard Web Solutions builds modern, high-performing websites that elevate brands and drive measurable growth.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Button variant="hero" size="lg" asChild className="text-base px-8 py-6 rounded-xl">
          <a href="#contact">
            Book a Free Strategy Call
            <ArrowRight size={18} />
          </a>
        </Button>
        <Button variant="hero-outline" size="lg" asChild className="text-base px-8 py-6 rounded-xl">
          <a href="#portfolio">
            <Play size={16} />
            View Our Work
          </a>
        </Button>
      </motion.div>

      {/* Metrics strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
      >
        {[
          { value: "150+", label: "Projects Delivered" },
          { value: "42%", label: "Avg. Conversion Lift" },
          { value: "3x", label: "Faster Load Times" },
          { value: "98%", label: "Client Satisfaction" },
        ].map((m) => (
          <div key={m.label} className="text-center">
            <div className="text-2xl md:text-3xl font-heading font-bold text-foreground">{m.value}</div>
            <div className="text-xs md:text-sm text-muted-foreground mt-1">{m.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
