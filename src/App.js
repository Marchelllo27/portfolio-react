import React from "react";

// Components
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Libraries from "./components/libraries/Libraries";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
// Context
import NavContextProvider from "./store/NavContextProvider";

const App = () => {
  return (
    <NavContextProvider>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Libraries />
      <Portfolio />
      <Contact />
      <Footer />
    </NavContextProvider>
  );
};

export default App;
