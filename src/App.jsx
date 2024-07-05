import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <>
    <BrowserRouter basename="/my-react-portfolio/">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />}/>
        <Route path="/contact" element={<Contact />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;