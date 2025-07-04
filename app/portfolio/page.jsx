"use client";
import React from "react";
import PerformanceHeroSection from "./PerformanceHeroSection";
import ReviewsSection from "../components/home/ReviewsSection";
import Portfolio from "./Portfolio";

export default function PortfolioPage() {
    return (
        <section className="min-h-screen text-white">
            <PerformanceHeroSection />
            <Portfolio />
            <ReviewsSection />
        </section>
    );
}
