import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import Layout from "./layouts/Layouts";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <>
                <Layout/>
              </>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
