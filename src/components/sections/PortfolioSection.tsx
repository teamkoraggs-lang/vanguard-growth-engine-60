import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "TechFlow Dashboard", result: "+52% Lead Generation", tag: "SaaS", color: "from-blue-600/20 to-cyan-600/20" },
  { title: "GreenScale Market", result: "2x Revenue Growth", tag: "E-commerce", color: "from-emerald-600/20 to-teal-600/20" },
  { title: "Nordic Health Hub", result: "+38% Patient Bookings", tag: "Healthcare", color: "from-violet-600/20 to-purple-600/20" },
  { title: "Atlas SaaS Platform", result: "3x Signup Rate", tag: "SaaS", color: "from-orange-600/20 to-amber-600/20" },
  { title: "Meridian Realty", result: "+67% Inquiry Rate", tag: "Local Business", color: "from-rose-600/20 to-pink-600/20" },
  { title: "Pulse Labs Store", result: "+41% Avg Order Value", tag: "E-commerce", color: "from-indigo-600/20 to-blue-600/20" },
];

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding bg-secondary/20">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Our Work</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Results That Speak for Themselves
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card overflow-hidden group hover-lift cursor-pointer"
          >
            {/* Mock preview */}
            <div className={`h-48 bg-gradient-to-br ${p.color} relative flex items-center justify-center`}>
              <div className="w-3/4 h-3/4 rounded-lg bg-background/30 backdrop-blur-sm border border-foreground/5 flex items-center justify-center">
                <span className="text-sm text-foreground/40 font-heading">{p.title}</span>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-background/80 backdrop-blur flex items-center justify-center">
                  <ExternalLink size={14} className="text-foreground" />
                </div>
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-heading font-bold text-foreground text-sm">{p.title}</h3>
                <span className="text-[11px] px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {p.tag}
                </span>
              </div>
              <p className="text-sm text-primary font-semibold">{p.result}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
