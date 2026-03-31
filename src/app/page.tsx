"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import { Problem, Solution, Differentiation } from "@/components/sections/ProblemSolution";
import Features from "@/components/sections/Features";
import { BusinessImpact, Trust } from "@/components/sections/ImpactTrust";
import { UseCases, Integrations, Localization } from "@/components/sections/UseCasesIntegrations";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import DemoForm from "@/components/sections/DemoForm";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Differentiation />
        <Features />
        <BusinessImpact />
        <UseCases />
        <Integrations />
        <Localization />
        <Trust />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <DemoForm />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
