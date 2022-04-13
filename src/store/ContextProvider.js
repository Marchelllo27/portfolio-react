import context from "./context";
import { useState } from "react";

const ContextProvider = props => {
  const [activeNav, setActiveNav] = useState("#");
  const [showNotification, setShowNotification] = useState(false);

  const changeActiveLink = value => {
    setActiveNav(value);
  };

  const showHideNotification = value => {
    setShowNotification(value);
  };

  const contextValue = {
    activeNavLink: activeNav,
    showNotification: showNotification,
    changeActiveLink: changeActiveLink,
    showHideNotification: showHideNotification,
  };

  return (
    <context.Provider value={contextValue}>{props.children}</context.Provider>
  );
};

export default ContextProvider;
