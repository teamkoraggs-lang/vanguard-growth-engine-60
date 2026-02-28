import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px]" />
    </div>

    <div className="container mx-auto relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
          Ready to Elevate Your <span className="gradient-text">Online Presence?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Let's build something remarkable together. Your growth starts with a conversation.
        </p>
        <Button variant="hero" size="lg" asChild className="text-base px-10 py-6 rounded-xl">
          <a href="#contact">
            Get Started Today
            <ArrowRight size={18} />
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
