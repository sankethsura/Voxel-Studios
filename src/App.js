import "./App.css";
import {  Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import CaseStudies from "./Components/CaseStudies";
import ContactForm from "./Components/ContactForm";
function App() {
  return (
    <div className="App">
      <div className="w-full bg-[#020818f9] z-10"><Navbar /></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/casestudies" element={<CaseStudies />} />
        <Route path="/contactform" element={<ContactForm />} />
        
        </Routes>
    </div>
  );
}

export default App;
