import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const services = [
  {
    id: "basketball",
    title: "Basketball Training",
    description: "Our basketball program offers comprehensive training for youth athletes, focusing on fundamental skills, game strategy, and physical conditioning.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=500&fit=crop",
    features: [
      "Professional coaching staff",
      "Modern training facilities",
      "Individual skill development",
      "Team tactics and strategy",
      "Physical conditioning",
      "Tournament preparation",
    ],
    capacity: "40 students",
    schedule: "3 days per week",
  },
  {
    id: "tennis",
    title: "Tennis Academy",
    description: "Learn tennis from certified coaches in our state-of-the-art facilities. Our program caters to all skill levels from beginners to advanced players.",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&h=500&fit=crop",
    features: [
      "Certified tennis instructors",
      "Quality tennis courts",
      "Stroke technique training",
      "Match play practice",
      "Fitness and agility training",
      "Equipment provided",
    ],
    capacity: "20 students",
    schedule: "3 days per week",
  },
  {
    id: "karate",
    title: "Karate Classes",
    description: "Traditional karate training emphasizing discipline, respect, and self-defense. Suitable for children and young adults seeking martial arts education.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&h=500&fit=crop",
    features: [
      "Experienced martial arts instructors",
      "Traditional training methods",
      "Belt progression system",
      "Self-defense techniques",
      "Mental discipline training",
      "Competition preparation",
    ],
    capacity: "20 students",
    schedule: "3 days per week",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-heading font-medium tracking-wider mb-4">
            WHAT WE OFFER
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Our Services
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive sports training programs designed to develop skills,
            build character, and create champions.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20 lg:space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col lg:items-center gap-8 lg:gap-16 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="bg-secondary rounded-lg px-4 py-2">
                      <span className="text-xs text-muted-foreground">Capacity</span>
                      <p className="font-heading font-semibold">{service.capacity}</p>
                    </div>
                    <div className="bg-secondary rounded-lg px-4 py-2">
                      <span className="text-xs text-muted-foreground">Schedule</span>
                      <p className="font-heading font-semibold">{service.schedule}</p>
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button variant="hero">Enroll Now</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
