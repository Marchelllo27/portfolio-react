import React, { useContext } from "react";

// Components
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Libraries from "./components/libraries/Libraries";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Notification from "./components/others/Notification";
// Context
import context from "./store/context";

const App = () => {
  const Ctx = useContext(context);

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Libraries />
      <Portfolio />
      <Contact />
      <Footer />
      {Ctx.showNotification && <Notification title="Email has been sent" />}
    </>
  );
};

export default App;
