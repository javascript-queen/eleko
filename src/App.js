import React from "react";
import { Routes, Route } from "react-router-dom";
import Pricing from "./routes/Pricing";
import About from "./routes/About";
import Home from "./routes/Home";
import Calendar from "./routes/Calendar";
import Contact from "./routes/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
