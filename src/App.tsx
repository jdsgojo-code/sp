import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Specs from "./components/Specs";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="bg-bg min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="max-w-7xl mx-auto bento-grid">
        <Hero />
        <About />
        <Products />
        <Specs />
        <Contact />
      </div>
    </main>
  );
}
