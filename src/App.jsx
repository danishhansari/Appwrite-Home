import { Suspense, lazy } from "react";
const DiscordAd = lazy(() => import("./components/DiscordAd"));
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
import "./index.css";
import "./style.css";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Twitter from "./components/Twitter";
// import TweetGrid from "./components/TweetGrid";
const Features = lazy(() => import("./components/Features"));
const Flexiblity = lazy(() => import("./components/Flexiblity"));
function App() {
  return (
    <>
      <Suspense fallback={<div className="text-center">...</div>}>
        <DiscordAd />
        <Navbar />
        <Hero />
      </Suspense>
      <Features />
      <Flexiblity />
      <Stats />
      <Twitter />
      <Footer />

    </>
  );
}

export default App;
