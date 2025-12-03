import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "History", href: "/history" },
  {
    name: "Our Services",
    href: "/services",
    dropdown: [
      { name: "Basketball", href: "/services#basketball" },
      { name: "Tennis", href: "/services#tennis" },
      { name: "Karate", href: "/services#karate" },
    ],
  },
  { name: "About Us", href: "/about" },
  { name: "Training", href: "/training" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-heading font-bold text-xl lg:text-2xl text-gradient">
              Ras Hailu
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="nav"
                      className={cn(
                        "px-4",
                        location.pathname === link.href && "text-primary"
                      )}
                    >
                      {link.name}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border-border">
                    {link.dropdown.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link
                          to={item.href}
                          className="cursor-pointer hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={link.name} to={link.href}>
                  <Button
                    variant="nav"
                    className={cn(
                      "px-4",
                      location.pathname === link.href && "text-primary"
                    )}
                  >
                    {link.name}
                  </Button>
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-2 rounded-md transition-colors",
                    location.pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-secondary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
