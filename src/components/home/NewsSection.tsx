import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import img1 from "@/assets//img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.jpg";
import img5 from "@/assets/img5.jpg";
import img6 from "@/assets/img6.jpg";
import img7 from "@/assets/img7.jpg";
import img8 from "@/assets/img8.jpg";
import img10 from "@/assets/img10.jpg";
import img11 from "@/assets/img11.jpg";
import img12 from "@/assets/img12.jpg";
import img13 from "@/assets/img13.jpg";
import img14 from "@/assets/img14.jpg";
import img15 from "@/assets/img15.jpg";
import img16 from "@/assets/img16.jpg";
import img17 from "@/assets/img17.jpg";
import img18 from "@/assets/img18.jpg";
import img19 from "@/assets/img19.jpg";

const newsItems = [
  {
    id: 1,
    images: [img1, img2, img3],
    title: "Youth Basketball Training Program Launch",
    description:
      "በአዲስአበባ ከተማ አስተዳደር ወጣቶች እና ስፖርት ቢሮ የራስኃይሉ ስፖርት ትምህርትና ስልጠና ማዕከል የልዩ ስልጠና ሰልጣኞች...",
  },
  {
    id: 2,
    images: [img4, img5, img6],
    title: "Tennis Academy Expansion",
    description: "የራስ ኃይሉ ስፖርት ትምህርትና ስልጠና ማዕከል ሰራተኞች ዘወትር አርብ...",
  },
  {
    id: 3,
    images: [img7, img8],
    title: "Karate Championship Success",
    description: "በ አዲስአበባ ወጣቶችና ስፖርት ቢሮ የራስኃይሉ ስፖርት ትምህርት...",
  },
  {
    id: 3,
    images: [img10, img11, img12],
    title: "Karate Championship Success",
    description: "በ አዲስአበባ ወጣቶችና ስፖርት ቢሮ የራስኃይሉ ስፖርት ትምህርት...",
  },
  {
    id: 3,
    images: [img13, img14, img15],
    title: "Karate Championship Success",
    description: "በ አዲስአበባ ወጣቶችና ስፖርት ቢሮ የራስኃይሉ ስፖርት ትምህርት...",
  },
  {
    id: 3,
    images: [img16, img17, img18, img19],
    title: "Karate Championship Success",
    description: "በ አዲስአበባ ወጣቶችና ስፖርት ቢሮ የራስኃይሉ ስፖርት ትምህርት...",
  },
];

const NewsCard = ({ item }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % item.images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + item.images.length) % item.images.length);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
      {/* Image Slider */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
        <img
          src={item.images[index]}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

        {/* Controls */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <Button
            variant="secondary"
            size="icon"
            onClick={prev}
            className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          {/* Dots */}
          <div className="flex gap-2">
            {item.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === index ? "bg-primary w-6" : "bg-foreground/30"
                }`}
              />
            ))}
          </div>

          <Button
            variant="secondary"
            size="icon"
            onClick={next}
            className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Text Content */}
      <div className="space-y-6">
        <div className="card-gradient rounded-2xl p-8 border border-border">
          <h3 className="font-heading font-bold text-2xl mb-4">{item.title}</h3>
          <p className="text-muted-foreground leading-relaxed">
            {item.description}
          </p>
          <Button className="mt-6" variant="outline">
            Read More
          </Button>
        </div>

        {/* Stats */}
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
  );
};

export const NewsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-heading font-medium tracking-wider mb-2">
            LATEST
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl">
            News & Updates
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Stay updated with the latest news and developments from our training
            center.
          </p>
        </div>

        {/* All News Cards */}
        {newsItems.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
