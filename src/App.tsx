import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ElementDefault} from "./screens/Pages/ElementDefault";
import {About} from "./screens/Pages/About";
import { Destination } from "./screens/Pages/Destination";
import { DestinationDetails } from "./screens/Pages/DestinationDetails";
import { Contact } from "./screens/Pages/Contact";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        AOS.init({
          easing: "linear", // Easing type
          once: true, // Run only once
        });
      }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ElementDefault />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/details" element={<DestinationDetails />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
