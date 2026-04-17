import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import WhatsAppButton from "./components/WhatsAppButton";
import ProductDetail from "./components/ProductDetail";

// Layout for the home page sections
const Home = () => (
  <>
    <Navbar />
    <div className="w-full px-4 sm:px-8 lg:px-12 mt-24">
      <div className="flex flex-col gap-8">
        <Hero />
        <Products />
        <Team />
        <Contact />
      </div>
    </div>
    <Footer />
  </>
);

// Scroll to top on route change component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="bg-bg min-h-screen">
        <ScrollProgress />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={
            <>
              <Navbar />
              <div className="mt-20">
                <ProductDetail />
              </div>
              <Footer />
            </>
          } />
        </Routes>

        <WhatsAppButton />
      </main>
    </Router>
  );
}
