import HeroSection from "./components/home/HeroSection";
import LeaderboardSection from "./components/home/LeaderboardSection";
import ReviewsSection from "./components/home/ReviewsSection";
import TopAssetsSection from "./components/home/TopAssetsSection";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

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
