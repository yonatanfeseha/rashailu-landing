import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { NewsSection } from "@/components/home/NewsSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <NewsSection />
      <ProgramsSection />
    </Layout>
  );
};

export default Index;
