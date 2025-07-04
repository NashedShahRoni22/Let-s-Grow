import HeroSection from "../components/home/HeroSection";
import LeaderboardSection from "../components/home/LeaderboardSection";
import ReviewsSection from "../components/home/ReviewsSection";
import TopAssetsSection from "../components/home/TopAssetsSection";


export default function Home() {
  return (
      <main>
        <HeroSection/>
        <TopAssetsSection/>
        <LeaderboardSection/>
        <ReviewsSection/>
      </main>
  );
}
