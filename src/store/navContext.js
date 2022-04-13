import React from "react";

const navContext = React.createContext({
  activeNavLink: "",
  changeActiveLink: () => {},
});

export default navContext;