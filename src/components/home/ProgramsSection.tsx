import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import kt from "@/assets/karate.jpg";
import basket from "@/assets/basket.jpg";
import tennis from "@/assets/tennis.jpg";
import box from "@/assets/box.jpg";

const programs = [
  {
    id: 1,
    title: "Basketball",
    description:
      "Professional basketball training for youth athletes with focus on fundamentals, teamwork, and competitive play.",
    image: basket,
    students: "40",
  },
  {
    id: 2,
    title: "Tennis",
    description:
      "Learn tennis from certified coaches with modern facilities and personalized training programs.",
    image: tennis,
    students: "20",
  },
  {
    id: 3,
    title: "Karate",
    description:
      "Traditional karate training focusing on discipline, self-defense, and physical fitness.",
    image: kt,
    students: "40",
  },
  {
    id: 4,
    title: "Box Sport",
    description:
      "Professional basketball training for youth athletes with focus on fundamentals, teamwork, and competitive play.",
    image: box,
    students: "40",
  },
];

export const ProgramsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-primary font-heading font-medium tracking-wider mb-2">
              OUR PROGRAMS
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl">
              Training Programs
            </h2>
          </div>
          {/* <Link to="/services">
            <Button variant="outline" className="group">
              View All Programs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="group relative rounded-2xl overflow-hidden bg-secondary border border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading font-bold text-xl">
                    {program.title}
                  </h3>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {program.students} Students
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
                {/* <Link to={`/services#${program.title.toLowerCase()}`}>
                  <Button variant="ghost" size="sm" className="group/btn -ml-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
