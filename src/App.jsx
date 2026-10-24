import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Projects } from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<section className="flex min-h-screen flex-col items-center justify-center px-5 pt-24 text-center text-slate-800"><h1 className="text-4xl font-bold">Page not found</h1><p className="mt-3">The page you requested does not exist.</p><a className="mt-5 font-semibold text-blue-600 underline" href="/">Return home</a></section>} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
