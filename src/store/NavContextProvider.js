import navContext from "./navContext";
import { useState } from "react";

const NavContextProvider = props => {
  const [activeNav, setActiveNav] = useState("#");

  const changeActiveLink = value => {
    setActiveNav(value);
  };

  const navContextValue = {
    activeNavLink: activeNav,
    changeActiveLink: changeActiveLink,
  };

  return (
    <navContext.Provider value={navContextValue}>
      {props.children}
    </navContext.Provider>
  );
};

export default NavContextProvider;
