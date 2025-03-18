import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Hero from "./components/Hero";
import ExperienceTimeline from "./components/ExperienceTimeline";
import { AzizBaatout } from "./AzizBaatout";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="full-background">
      <div className="relative max-h-screen overflow-y-auto">
        <Hero links={AzizBaatout.links} />
        <ExperienceTimeline experiences={AzizBaatout.experiences} />
        <Projects />
        <TechStack />
      </div>
    </div>
  </StrictMode>
);
