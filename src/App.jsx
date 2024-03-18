import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link,useLocation  } from "react-router-dom";
import Home from './home'
import Footer from './footer'
import Contact from './contact'
import Hero from './hero'
const App = () => {
  
  return (
    <div className="f12">
      <Router>
      {/* Hero section and Nvs */}

      <div className="jjhhaadx">
        <div className="jxcgweif">
          <div className="flex space-between align-item-center njxiuewf">
            <div className="flex g3 align-item-center">
              <Link to="/" className="fw-700 f20 c-pointer text-decoration-none black">Brainwave.io</Link>
              <div className="flex g3 fw-600 align-item-center">
                <Link className="c-pointer text-decoration-none black">Demos</Link>
                <Link className="c-pointer text-decoration-none black">Pages</Link>
                <Link className="c-pointer text-decoration-none black">Support</Link>
                <Link to="/contact" className="c-pointer text-decoration-none black">Contact</Link>
              </div>
            </div>
            <div>
              <button className="hcyqac-btn">Get started a project</button>
            </div>
          </div>
          <Routes>
          <Route
              exact
              path="/"
              element={<Hero />}
            />
          </Routes>
        </div>
      </div>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/contact" element={<Contact />} ></Route>
        </Routes>
          

        <Footer />
      </Router>
    </div>
  );
};

export default App;
