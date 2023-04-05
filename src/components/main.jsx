import React from "react";
import { Routes, Route } from "react-router";

const main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </main>
  );
};

export default main;
