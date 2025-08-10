import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import AboutUsPage from "./pages/About";
import Power from "./pages/Sectors/Power";
import Capital from "./pages/Sectors/Capital";
import Technology from "./pages/Sectors/Technology";
import Insights from "./pages/Insight";
import CareerPage from "./pages/Career";
import Contact from "./pages/Contact";
import Press from "./pages/News&Events/PressRelease";
import Videos from "./pages/News&Events/Videos";
import Photos from "./pages/News&Events/Photos";
import ScrollToTop from "./utils/ScrollToTop";
import News from "./pages/News&Events/News";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/power" element={<Power />} />
        <Route path="/capital" element={<Capital />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/press" element={<Press />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
