import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ElementDefault} from "./screens/Pages/ElementDefault";
import {About} from "./screens/Pages/About";
import { Destination } from "./screens/Pages/Destination";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ElementDefault />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} />

      </Routes>
    </Router>
  );
}

export default App;
