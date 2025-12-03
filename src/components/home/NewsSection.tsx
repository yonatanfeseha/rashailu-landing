import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop",
    title: "Youth Basketball Training Program Launch",
    description: "Our center has launched a new comprehensive basketball training program for youth aged 11 and under, providing professional coaching and nutrition support.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&h=600&fit=crop",
    title: "Tennis Academy Expansion",
    description: "We are proud to announce the expansion of our tennis academy with new courts and international-standard training facilities.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&h=600&fit=crop",
    title: "Karate Championship Success",
    description: "Our karate students achieved remarkable success at the regional championship, winning multiple medals across different categories.",
  },
];

export const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-heading font-medium tracking-wider mb-2">LATEST</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl">
            News & Updates
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Stay updated with the latest news and developments from our training center.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Carousel */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
            <img
              src={newsItems[currentIndex].image}
              alt={newsItems[currentIndex].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            
            {/* Navigation */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <Button
                variant="secondary"
                size="icon"
                onClick={prevSlide}
                className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex gap-2">
                {newsItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentIndex ? "bg-primary w-6" : "bg-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="secondary"
                size="icon"
                onClick={nextSlide}
                className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="card-gradient rounded-2xl p-8 border border-border">
              <h3 className="font-heading font-bold text-2xl mb-4">
                {newsItems[currentIndex].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {newsItems[currentIndex].description}
              </p>
              <Button className="mt-6" variant="outline">
                Read More
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "80+", label: "Students" },
                { value: "3", label: "Sports" },
                { value: "5+", label: "Coaches" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-secondary/50 border border-border"
                >
                  <p className="font-heading font-bold text-2xl lg:text-3xl text-primary">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
