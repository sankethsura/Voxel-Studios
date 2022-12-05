import "./App.css";
import {  Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Windows from "./Components/Windows";
import ContactForm from "./Components/ContactForm";
import Android from "./Components/android";
function App() {
  return (
    <div className="App">
      <div className="w-full bg-[#020818f9] z-10"><Navbar /></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/DESIGNING" element={<Windows />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/sales" element={<Android />} />

        
        </Routes>
    </div>
  );
}

export default App;
