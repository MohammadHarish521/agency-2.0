import ChatButton from "./components/ChatButton";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LogoCloud from "./components/LogoCloud";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import ProjectMarquee from "./components/ProjectMarquee";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WorkflowSection from "./components/WorkflowSection";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <ProjectMarquee />
      <WorkflowSection />
      <LogoCloud />
      <Services />
      <Projects />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <ChatButton />
    </div>
  );
}
