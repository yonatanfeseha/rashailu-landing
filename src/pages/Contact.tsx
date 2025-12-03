import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Addis Ababa, Ethiopia", "Near Stadium Area"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+251 XXX XXX XXX", "+251 XXX XXX XXX"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@rashailu.com", "training@rashailu.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon - Sat: 8:00 AM - 6:00 PM", "Sunday: Closed"],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-heading font-medium tracking-wider mb-4">
            GET IN TOUCH
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about our programs? Ready to enroll? Reach out to us
            and we'll be happy to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading font-bold text-3xl mb-8">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-xl card-gradient border border-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                    {item.details.map((detail) => (
                      <p key={detail} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden aspect-video bg-secondary border border-border flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>Interactive map coming soon</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-heading font-bold text-3xl mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-secondary border-border"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+251 XXX XXX XXX"
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                      className="bg-secondary border-border"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                    className="bg-secondary border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
