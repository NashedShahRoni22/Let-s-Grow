import HeroSection from "../components/home/HeroSection";
import LeaderboardSection from "../components/home/LeaderboardSection";
import ReviewsSection from "../components/home/ReviewsSection";
import TopAssetsSection from "../components/home/TopAssetsSection";
import WhyUs from "../components/home/WhyUs";


export default function Home() {
  return (
      <main>
        <HeroSection/>
        <WhyUs/>
        <TopAssetsSection/>
        <LeaderboardSection/>
        <ReviewsSection/>
      </main>
  );
}
