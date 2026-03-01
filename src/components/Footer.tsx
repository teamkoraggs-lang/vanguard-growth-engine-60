import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () =>
<footer className="border-t border-border/50 bg-secondary/30">
    <div className="container mx-auto section-padding pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-1">
          <a href="#" className="font-heading text-xl font-bold text-foreground">
            Vanguard<span className="glow-text">.</span>
          </a>
          <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
            We build modern, high-performing websites that drive measurable growth for ambitious brands.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-foreground transition-colors">Custom Web Design</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">Web Development</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">Landing Pages</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">E-commerce</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a></li>
            <li><a href="#process" className="hover:text-foreground transition-colors">Our Process</a></li>
            <li><a href="#why-us" className="hover:text-foreground transition-colors">Why Vanguard</a></li>
            <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail size={14} className="text-primary" />Brandenellis2031@gmail.com</li>
            <li className="flex items-center gap-2"><Phone size={14} className="text-primary" />(708) 510-0511</li>
            <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" />Chicago, IL</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2026 Vanguard Web Solutions. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Twitter", "LinkedIn", "Dribbble"].map((s) =>
        <a key={s} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {s}
            </a>
        )}
        </div>
      </div>
    </div>
  </footer>;


export default Footer;