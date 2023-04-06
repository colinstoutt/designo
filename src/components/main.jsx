import React from "react";
import { Routes, Route } from "react-router";

import Index from "../pages/Index";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Locations from "../pages/Locations";
import WebD from "../pages/WebD";
import AppD from "../pages/AppD";
import GraphicD from "../pages/GraphicD";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
      <Routes>
        <Route path="/web-design" element={<WebD />} />
      </Routes>
      <Routes>
        <Route path="/app-design" element={<AppD />} />
      </Routes>
      <Routes>
        <Route path="/graphic-design" element={<GraphicD />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/locations" element={<Locations />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default Main;
