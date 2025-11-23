import Hero from "../components/Hero";
import { motion } from "framer-motion";
import ServiceSection from "../components/ServiceSection";
import WhyAstroForge from "../components/WhyAstroForge";
import CaseStudy from "../components/CaseStudy";
import Testimony from "../components/Testimony";
import NewsLetterSign from "../components/NewsLetterSign";

const Home = () => {
  return (
    <main className="w-full">
      <Hero />
      <ServiceSection />
      <WhyAstroForge />
      <CaseStudy />
      <Testimony />
      <NewsLetterSign />
    </main>
  );
};

export default Home;
