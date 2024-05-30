
import { Routes, Route } from "react-router-dom";
import Layout from "./Features/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />

      </Route>
    </Routes>
    </>
  )
}

export default App
