import { Layout } from "@/components/layout/Layout";
import { Target, Users, Award, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, setting high standards for our athletes and coaches.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "We believe in the power of collaboration and building strong, supportive communities.",
  },
  {
    icon: Award,
    title: "Discipline",
    description:
      "We instill discipline and dedication as the foundation for success in sports and life.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "We nurture a genuine love for sports and physical activity in all our students.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-heading font-medium tracking-wider mb-4">
            WHO WE ARE
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            About Us
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our mission, values, and the dedicated team behind Ras
            Hailu Sport Education & Training Center.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-primary font-heading font-medium tracking-wider mb-4">
                OUR MISSION
              </p>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
                Empowering Youth Through Sports
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Under the Addis Ababa City Administration Youth and Sports
                Bureau, Ras Hailu Sport Education & Training Center is dedicated
                to providing quality sports education and training to young
                people.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our vision is to create a society that is healthy, capable, and
                beneficial to citizens, with sports as its culture.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Values: Accountability, Transparency, Providing excellent
                service, Readiness for change Leading with knowledge and faith
                /Working/, Creating a convenient and preferred institution,
                Creating a society that has made sports its culture and
                producing competent athletes
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=600&h=600&fit=crop"
                  alt="Youth athletes training"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl">
                <p className="font-heading font-bold text-4xl">80+</p>
                <p className="text-sm">Active Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-heading font-medium tracking-wider mb-2">
              WHAT WE BELIEVE
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group p-6 rounded-xl bg-secondary border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
