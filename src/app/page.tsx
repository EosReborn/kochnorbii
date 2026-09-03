import Navbar from "@/components/Navbar";
import Spine from "@/components/Spine";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Lab from "@/components/Lab";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Spine />
      <Navbar />
      <main id="main">
        <Hero />
        <SelectedWork />
        <About />
        <Capabilities />
        <Lab />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
