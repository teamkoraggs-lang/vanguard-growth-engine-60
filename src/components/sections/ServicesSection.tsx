import { motion } from "framer-motion";
import { Palette, Code, Target, ShoppingCart, RefreshCw, Search } from "lucide-react";

const services = [
  { icon: Palette, title: "Custom Website Design", desc: "Pixel-perfect, brand-aligned designs that captivate visitors and establish instant credibility." },
  { icon: Code, title: "Web Development", desc: "Clean, performant code built with modern frameworks that scale with your business." },
  { icon: Target, title: "Conversion Landing Pages", desc: "Data-driven pages engineered to turn traffic into leads, signups, and paying customers." },
  { icon: ShoppingCart, title: "E-commerce Solutions", desc: "Beautiful storefronts with seamless checkout experiences that maximize revenue per visitor." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Transform your outdated site into a modern growth engine without losing your SEO equity." },
  { icon: Search, title: "SEO Foundations", desc: "Technical SEO baked into every build so you rank higher and attract organic traffic from day one." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">What We Do</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Services That Drive Results
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Every service we offer is designed with one goal: measurable growth for your business.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card p-6 group hover-lift cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            <span className="inline-block mt-4 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Learn more →
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
