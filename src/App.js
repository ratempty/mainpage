import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/page/Home";
import Skill from "./component/page/Skill";
import Project from "./component/page/Project";
import Contact from "./component/page/Contact";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
