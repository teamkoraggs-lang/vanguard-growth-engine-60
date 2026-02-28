import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    text: "Vanguard completely transformed our online presence. We saw a 52% increase in qualified leads within the first month of launching our new site.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, GreenScale",
    text: "Their conversion-first approach isn't just talk. Our e-commerce revenue doubled after the redesign. Best investment we've made.",
    rating: 5,
  },
  {
    name: "Emily Larsson",
    role: "CMO, Nordic Health",
    text: "Fast, strategic, and incredibly talented. They understood our brand better than we did and delivered a site that truly represents us.",
    rating: 5,
  },
];

const logos = ["TechFlow", "GreenScale", "Nordic Health", "Atlas SaaS", "Meridian Co", "Pulse Labs"];

const SocialProofSection = () => (
  <section className="section-padding bg-secondary/20">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Trusted by Ambitious Brands</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          What Our Clients Say
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 hover-lift"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground/90 text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Client logos */}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {logos.map((logo) => (
          <span key={logo} className="text-sm font-heading font-semibold text-muted-foreground/40 tracking-wider uppercase">
            {logo}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
