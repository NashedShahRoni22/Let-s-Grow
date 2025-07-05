"use client";
import PerformanceHeroSection from "./PerformanceHeroSection";
import ReviewsSection from "../../components/home/ReviewsSection";
import Portfolio from "./Portfolio";

export default function PortfolioPage() {
    return (
        <section className="text-white">
            <PerformanceHeroSection />
            <Portfolio />
            <ReviewsSection />
        </section>
    );
}
