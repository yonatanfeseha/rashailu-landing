import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-2xl text-gradient">
              Ras Hailu
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sport Education & Training Center dedicated to nurturing young athletes
              and building champions through professional training programs.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "History", "Services", "About Us", "Training", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Our Programs</h4>
            <ul className="space-y-2">
              {["Basketball Training", "Tennis Academy", "Karate Classes", "Youth Development", "Special Training"].map(
                (item) => (
                  <li key={item}>
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+251 XXX XXX XXX</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@rashailu.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Ras Hailu Sport Education & Training Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
