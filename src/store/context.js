import React from "react";

const navContext = React.createContext({
  activeNavLink: "",
  showNotification: false,
  changeActiveLink: () => {},
  showHideNotification: () => {},
});

export default navContext;