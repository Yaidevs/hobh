import { Experts } from "../components/Experts";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { NavBar } from "../components/Navbar";
import { OurApps } from "../components/OurApps";
import { Questions } from "../components/Questions";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Experts />
      <OurApps />
      <Questions/>
      <Footer/>
    </main>
  );
}
