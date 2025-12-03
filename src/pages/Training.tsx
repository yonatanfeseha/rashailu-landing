import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Calendar, Users, Utensils } from "lucide-react";

const schedules = [
  {
    sport: "Basketball",
    days: ["Monday", "Wednesday", "Friday"],
    time: "3:00 PM - 5:00 PM",
    ageGroup: "Under 11",
    coach: "Coach Daniel",
  },
  {
    sport: "Tennis",
    days: ["Monday", "Wednesday", "Friday"],
    time: "3:00 PM - 5:00 PM",
    ageGroup: "Under 11",
    coach: "Coach Sara",
  },
  {
    sport: "Karate",
    days: ["Tuesday", "Thursday", "Saturday"],
    time: "3:00 PM - 5:00 PM",
    ageGroup: "Under 11",
    coach: "Sensei Mekonnen",
  },
];

const benefits = [
  {
    icon: Users,
    title: "Professional Coaching",
    description: "Learn from experienced coaches with proven track records in youth sports development.",
  },
  {
    icon: Calendar,
    title: "Structured Programs",
    description: "Follow carefully designed training curricula that ensure progressive skill development.",
  },
  {
    icon: Utensils,
    title: "Nutrition Support",
    description: "Receive post-training meals to support physical development and recovery.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Training sessions designed to accommodate school schedules and other commitments.",
  },
];

const Training = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-heading font-medium tracking-wider mb-4">
            JOIN US
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Training Programs
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive training schedules and programs designed to develop
            young athletes into champions.
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-heading font-medium tracking-wider mb-2">
              TRAINING SCHEDULE
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl">
              Weekly Timetable
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-heading font-semibold">Sport</th>
                    <th className="text-left py-4 px-4 font-heading font-semibold">Days</th>
                    <th className="text-left py-4 px-4 font-heading font-semibold">Time</th>
                    <th className="text-left py-4 px-4 font-heading font-semibold">Age Group</th>
                    <th className="text-left py-4 px-4 font-heading font-semibold">Coach</th>
                  </tr>
                </thead>
                <tbody>
                  {schedules.map((schedule) => (
                    <tr key={schedule.sport} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                      <td className="py-4 px-4">
                        <span className="font-heading font-semibold text-primary">
                          {schedule.sport}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex flex-wrap gap-1">
                          {schedule.days.map((day) => (
                            <span key={day} className="text-xs bg-secondary px-2 py-1 rounded">
                              {day}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">{schedule.time}</td>
                      <td className="py-4 px-4 text-muted-foreground">{schedule.ageGroup}</td>
                      <td className="py-4 px-4 text-muted-foreground">{schedule.coach}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-heading font-medium tracking-wider mb-2">
              WHY CHOOSE US
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl">
              Training Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex gap-4 p-6 rounded-xl bg-secondary border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join our training programs and become part of a community dedicated
              to developing young athletic talent. Contact us today to enroll.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Enroll Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Training;
