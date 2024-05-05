import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Services from "./pages/services";
import Contact from "./pages/contact";
import About from "./pages/about";
import Amazing from "./pages/amazing";
import Portfoliosinglecard from "./pages/Portfoliosinglecard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/:pId" element={<Portfoliosinglecard />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/amazing" element={<Amazing />} />
    </Routes>
  );
}

export default App;
