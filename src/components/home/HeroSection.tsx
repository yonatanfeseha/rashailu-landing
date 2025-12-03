import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, CheckCircle } from "lucide-react";

export const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our updates.",
      });
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="relative min-h-[90vh] hero-gradient flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--primary)) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-heading font-medium tracking-wider mb-4 animate-fade-in">
            WELCOME TO
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl mb-4 animate-slide-up">
            RAS HAILU SPORT
          </h1>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-gradient mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            EDUCATION & TRAINING CENTER
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Subscribe to get instant updates on our services delivered to your mailbox.
          </p>

          {/* Subscribe Form */}
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-secondary/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                required
              />
              <Button type="submit" variant="hero" size="lg" className="group">
                {isSubscribed ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Subscribed
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
