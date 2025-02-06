import "./App.css";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About"
import NewIn from "./pages/NewIn"
import Contact from "./pages/Contact"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
     <Router>
     <Header />
     <Routes>
       <Route path="/" element={<Home />} /> 
       <Route path="/about" element={<About />} />
       <Route path="/newin" element={<NewIn />} />
       <Route path="/contact" element={<Contact />} />
     </Routes>
     <Footer />
   </Router>
  );
}
export default App;




