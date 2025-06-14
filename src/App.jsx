import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx"

import Home from "./pages/Home";
import OurGroup from "./pages/OurGroup";
import Company from "./pages/Company";
import Career from "./pages/Career";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
// import Consultant from "./pages/Consultant";
import Contact from "./pages/Contact";


function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/our-group" element={<Layout><OurGroup /></Layout>} />
        <Route path="/company" element={<Layout><Company /></Layout>} />
        <Route path="/career" element={<Layout><Career /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
        {/* <Route path="/consultant" element={<Layout><Consultant /></Layout>} /> */}
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
