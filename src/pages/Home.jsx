import React from "react";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import ServiceToggle from "../components/ServiceToggle";
import AlliedgeBenefits from '../components/AlliedgeBenefits.jsx';
import ClientsSection from '../components/ClientsSection.jsx';
import ServicesSection from "../components/ServicesSection.jsx";
const Home = () => {
  return (
    <>
      <Hero />
      <VideoSection />
      <ServiceToggle />
         <AlliedgeBenefits />
            <ServicesSection />
             <ClientsSection />
    </>
  );
};

export default Home;