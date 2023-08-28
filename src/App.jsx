import { Suspense, lazy } from "react";
const DiscordAd = lazy(() => import("./components/DiscordAd"));
const Navbar = lazy(() => import("./components/Navbar"));

import "./index.css";
function App() {
  return (
    <>
      <Suspense fallback={<div className="text-center">...</div>}>
        <DiscordAd />
      </Suspense>
      <Navbar />
    </>
  );
}

export default App;
