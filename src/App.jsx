import { Suspense, lazy } from "react";
const DiscordAd = lazy(() => import("./components/DiscordAd"));
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
import "./index.css";
import './style.css'
import Stats from "./components/Stats";
const Features = lazy(() => import('./components/Features'))
const Flexiblity = lazy(() => import('./components/Flexiblity'))
function App() {
  return (
    <>
      <Suspense fallback={<div className="text-center">...</div>}>
        <DiscordAd />
        <Navbar />
      </Suspense>
      <Hero />
      <Features />
      <Flexiblity />
      <Stats />
    </>
  );
}

export default App;
