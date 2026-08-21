import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStrip from "./components/TechStrip";
import Stats from "./components/Stats";
import BigType from "./components/BigType";
import Features from "./components/Features";
import Modes from "./components/Modes";
import Assistants from "./components/Assistants";
import Mcp from "./components/Mcp";
import Channels from "./components/Channels";
import SkillsModels from "./components/SkillsModels";
import Architecture from "./components/Architecture";
import Security from "./components/Security";
import QuickStart from "./components/QuickStart";
import Footer, { CTA } from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <Stats />
        <Features />
        <BigType />
        <Modes />
        <Assistants />
        <Mcp />
        <Channels />
        <SkillsModels />
        <Architecture />
        <Security />
        <QuickStart />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
