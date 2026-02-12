import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Suspense, lazy } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageSkeleton } from "@/components/Skeleton";

// Lazy load pages for skeleton effect
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const TPM = lazy(() => import("@/pages/TPM"));
const Machinery = lazy(() => import("@/pages/Machinery"));
const Pallets = lazy(() => import("@/pages/Pallets"));
const Contact = lazy(() => import("@/pages/Contact"));

function App() {
  return (
    <div className="min-h-screen bg-[#09090B]">
      <BrowserRouter>
        <Navigation />
        <main>
          <Suspense fallback={<PageSkeleton />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/tpm" element={<TPM />} />
              <Route path="/machinery" element={<Machinery />} />
              <Route path="/pallets" element={<Pallets />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Toaster position="bottom-right" theme="dark" />
      </BrowserRouter>
    </div>
  );
}

export default App;
