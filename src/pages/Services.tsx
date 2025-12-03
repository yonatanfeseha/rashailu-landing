import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <Layout>
      <section className="py-20 lg:py-32 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Our Services
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
            Discover the variety of services we provide to support athletes and
            visitors. From nutrition and dining to sports and entertainment, we
            have something for everyone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Restaurant */}
            <div className="card-gradient p-8 rounded-2xl border border-border text-left">
              <h2 className="font-heading font-bold text-2xl mb-4">
                Restaurant
              </h2>
              <p className="text-muted-foreground mb-6">
                Enjoy healthy meals and refreshments tailored for athletes and
                visitors in a modern dining environment.
              </p>
              <Link to="/services/restaurant">
                <Button variant="outline">Read More</Button>
              </Link>
            </div>

            {/* Sports & Entertainment */}
            <div className="card-gradient p-8 rounded-2xl border border-border text-left">
              <h2 className="font-heading font-bold text-2xl mb-4">
                Sports & Entertainment
              </h2>
              <p className="text-muted-foreground mb-6">
                Participate in basketball, football, tennis, karate, and more in
                our state-of-the-art sports and entertainment facilities.
              </p>
              <Link to="/services/sports-entertainment">
                <Button variant="outline">Read More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
