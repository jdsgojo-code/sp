import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Specs from "./components/Specs";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <main className="bg-bg min-h-screen pt-24 pb-12">
      <ScrollProgress />
      <Navbar />
      
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8">
          <Hero />
          <Products />
          <Specs />
          <Team />
          <Contact />
        </div>
      </div>

      <Footer />
    </main>
  );
}
