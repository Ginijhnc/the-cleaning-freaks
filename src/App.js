import React from "react";
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ExteriorCleaning from "./pages/Exterior-Cleaning";
import InteriorCleaning from "./pages/Interior-Cleaning";
import NotFound from "./pages/Not-Found";
// Possible future addition: index.js file in order to reduce the number of page imports.-

function App() {
   return (
      <>
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route
                  path="/interior-cleaning"
                  element={<InteriorCleaning />}
               />
               <Route
                  path="/exterior-cleaning"
                  element={<ExteriorCleaning />}
               />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </BrowserRouter>
         <Footer />
      </>
   );
}

export default App;
