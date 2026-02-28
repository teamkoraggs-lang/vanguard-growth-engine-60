import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

const budgetOptions = ["< $5,000", "$5,000 – $15,000", "$15,000 – $30,000", "$30,000+"];

const ContactSection = () => {
  const [budget, setBudget] = useState("");

  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Let's Talk</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Start Your Project
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Tell us about your business and goals. We'll get back to you within 24 hours with a free strategy overview.
            </p>

            <div className="space-y-4 text-sm text-muted-foreground">
              <p>✓ No obligation, no hard sells</p>
              <p>✓ Free strategy consultation</p>
              <p>✓ Response within 24 hours</p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
            className="glass-card p-6 md:p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
                <Input placeholder="John Doe" className="bg-background/50 border-border/50 focus:border-primary/50" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                <Input type="email" placeholder="john@company.com" className="bg-background/50 border-border/50 focus:border-primary/50" />
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Business Name</label>
              <Input placeholder="Acme Inc." className="bg-background/50 border-border/50 focus:border-primary/50" />
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Budget Range</label>
              <div className="flex flex-wrap gap-2">
                {budgetOptions.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                      budget === b
                        ? "bg-primary/20 border-primary/50 text-primary"
                        : "border-border/50 text-muted-foreground hover:border-primary/30"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Tell us about your project</label>
              <Textarea
                placeholder="What are your goals? What challenges are you facing?"
                rows={4}
                className="bg-background/50 border-border/50 focus:border-primary/50 resize-none"
              />
            </div>

            <Button variant="hero" className="w-full py-5 rounded-xl">
              Send Message
              <Send size={16} />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
