import { Layout } from "@/components/layout/Layout";

const milestones = [
  {
    year: "2015",
    title: "Foundation",
    description: "Ras Hailu Sport Education & Training Center was established with a vision to nurture young athletic talent in Addis Ababa.",
  },
  {
    year: "2017",
    title: "First Cohort",
    description: "Welcomed our first batch of 40 students across basketball, tennis, and karate programs.",
  },
  {
    year: "2019",
    title: "Facility Expansion",
    description: "Expanded our training facilities with new courts and equipment to accommodate growing enrollment.",
  },
  {
    year: "2022",
    title: "Regional Recognition",
    description: "Received recognition from Addis Ababa Youth and Sports Bureau for excellence in youth sports development.",
  },
  {
    year: "2024",
    title: "Nutrition Program",
    description: "Launched comprehensive nutrition support program for special training students.",
  },
];

const History = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-heading font-medium tracking-wider mb-4">
            OUR JOURNEY
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Our History
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the story behind Ras Hailu Sport Education & Training Center
            and our commitment to developing young athletes.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="relative pl-8 lg:pl-0 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index !== milestones.length - 1 && (
                  <div className="absolute left-[11px] lg:left-1/2 top-12 bottom-0 w-0.5 bg-border lg:-translate-x-1/2" />
                )}

                <div className={`lg:flex lg:items-start lg:gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Year */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <span className="font-heading font-bold text-3xl lg:text-4xl text-primary">
                      {milestone.year}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background" />

                  {/* Content */}
                  <div className={`lg:w-1/2 mt-4 lg:mt-0 ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                    <div className="card-gradient rounded-xl p-6 border border-border inline-block text-left">
                      <h3 className="font-heading font-bold text-xl mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-heading font-medium tracking-wider mb-4">
              OUR VISION
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-8">
              Building Champions of Tomorrow
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We envision a future where every young person in Ethiopia has access
              to quality sports education and training. Through dedication,
              discipline, and professional guidance, we aim to develop not just
              athletes, but well-rounded individuals who will contribute positively
              to society.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default History;
