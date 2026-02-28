import { motion } from "framer-motion";
import { TrendingUp, Layers, Zap, Headphones, MessageCircle } from "lucide-react";

const reasons = [
  { icon: TrendingUp, title: "Conversion-First Approach", desc: "Every design decision is backed by data and optimized for your bottom line." },
  { icon: Layers, title: "Modern, Scalable Tech", desc: "Built with cutting-edge frameworks that grow as your business grows." },
  { icon: Zap, title: "Fast Turnaround", desc: "We move at startup speed without sacrificing quality or attention to detail." },
  { icon: Headphones, title: "Ongoing Support", desc: "Post-launch maintenance, updates, and strategy to keep you ahead." },
  { icon: MessageCircle, title: "Transparent Communication", desc: "Weekly updates, clear timelines, and no surprises. Ever." },
];

const WhyUsSection = () => (
  <section id="why-us" className="section-padding bg-secondary/20">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Why Vanguard</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Built Different. <span className="gradient-text">Built Better.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We're not a generic agency. We're a focused team of strategists, designers, and engineers who obsess over performance and growth.
          </p>

          <div className="space-y-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <r.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground text-sm">{r.title}</h4>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Visual element */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 animate-float" />
            <div className="absolute inset-4 rounded-2xl glass-card flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-center">
                <div className="text-5xl font-heading font-extrabold gradient-text mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Successful Projects</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyUsSection;
