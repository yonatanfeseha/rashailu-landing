import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Brand + Social */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-2xl text-gradient">
              Ras Hailu
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sport Education & Training Center dedicated to nurturing young
              athletes and building champions through professional training
              programs.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/20 rounded-xl shadow-lg p-6">
            <h4 className="font-heading font-semibold text-lg mb-4 text-red-600">
              Contact Us
            </h4>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Your Message"
                rows={3}
                className="border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <ul className="mt-6 space-y-3 text-muted-foreground text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+251 983006074</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>rashailusetc@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>
            © {new Date().getFullYear()} Ras Hailu Sport Education & Training
            Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
