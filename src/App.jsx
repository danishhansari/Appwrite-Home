import { Suspense, createContext, lazy, useState } from "react";
const DiscordAd = lazy(() => import("./components/DiscordAd"));
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
import "./index.css";
import "./style.css";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Twitter from "./components/Twitter";
import CodeSnippets from "./components/CodeSnippets";
const Features = lazy(() => import("./components/Features"));
const Flexiblity = lazy(() => import("./components/Flexiblity"));

export const ThemeContext = createContext(null)

function App() {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"))
    }
  return (
    <>
      <Suspense fallback={<div className="text-center">...</div>}>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div id={theme}>
          <DiscordAd />
          <Navbar theme={theme}/>
          <Hero theme={theme}/>
          <Features />
          <CodeSnippets />
          <Flexiblity theme={theme}/>
          <Twitter />
          <Stats />
          <Footer theme={theme}/>
        </div>
        </ThemeContext.Provider> 
      </Suspense>
    </>
  );
}

export default App;
