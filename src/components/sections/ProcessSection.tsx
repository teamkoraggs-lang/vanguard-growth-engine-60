import { motion } from "framer-motion";
import { Search, Paintbrush, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery & Strategy", desc: "We dive deep into your goals, audience, and market to build a data-driven roadmap." },
  { icon: Paintbrush, title: "Design & Prototype", desc: "Interactive prototypes crafted to your brand, reviewed and refined with your input." },
  { icon: Rocket, title: "Develop & Optimize", desc: "Pixel-perfect code with performance baked in. Every page loads fast and converts." },
  { icon: HeartHandshake, title: "Launch & Grow", desc: "We don't disappear after launch. Ongoing support, analytics, and iteration." },
];

const ProcessSection = () => (
  <section id="process" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">How We Work</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          A Proven Process, Every Time
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="text-center relative"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 glow-border flex items-center justify-center mx-auto mb-5 relative z-10">
              <s.icon size={22} className="text-primary" />
            </div>
            <span className="text-xs text-primary font-semibold mb-2 block">Step {i + 1}</span>
            <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
