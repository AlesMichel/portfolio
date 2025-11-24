import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <>
        <Header />
        <main className="max-w-6xl mx-auto px-6 pb-24">
          <Hero />
          <Projects />
          <Experience />
        </main>
        <Footer />
      </>
  );
}
