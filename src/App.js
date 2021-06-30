import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../src/assets/css/style.css";

// import "../src/assets/vendor/jquery/jquery.min.js";
// import "../src/assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
// import "../src/assets/vendor/jquery.easing/jquery.easing.min.js";
// import "../src/assets/vendor/owl.carousel/owl.carousel.min.js";
// import "../src/assets/vendor/waypoints/jquery.waypoints.min.js";
// import "../src/assets/vendor/counterup/counterup.min.js";
// import "../src/assets/vendor/isotope-layout/isotope.pkgd.min.js";
// import "../src/assets/vendor/venobox/venobox.min.js";
// import "../src/assets/vendor/aos/aos.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Expirence from "./components/expirence/Expirence";
import Education from "./components/education/Education";

import ExpirenceData from "./components/expirence/ExpirenceData";
import EducationData from "./components/education/EducationData";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const [expirence] = useState(ExpirenceData);
  const [education] = useState(EducationData);
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Expirence expirence={expirence} />
      <Education education={education} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
