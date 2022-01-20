import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import First from "../Components/Section/First";
import About from "../Components/Section/About";
import Portfolio from "../Components/Section/Portfolio";
import Contact from "../Components/Section/Contact";

function Main() {
  return (
    <div>
      <Header />
      <First />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
