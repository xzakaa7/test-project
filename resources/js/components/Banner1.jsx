import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import MockupShowcase from "./MockupShowcase";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Contact from "./Contact";
import PrivacySection from "./PrivacySection";
import FloatingWAButton from "./FloatingWAButton";
import Footer from "./Footer";

const Banner = () => (
    <div className="w-full min-h-screen bg-[#fcfcfd] font-poppins">
        <Nav />
        <Home />
        <About />
        <HowItWorks />
        <Features />
        <MockupShowcase />
        <Testimonials />
        <Pricing />
        <Contact />
        <PrivacySection />
        <FloatingWAButton />
        <Footer />
    </div>
);

export default Banner;
