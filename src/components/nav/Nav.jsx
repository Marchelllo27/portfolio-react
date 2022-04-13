import React, { useContext } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { GiBrain } from "react-icons/gi";
import { BiMessageSquareDetail } from "react-icons/bi";
// STYLES
import classes from "./Nav.module.css";
// CONTEXT
import context from "../../store/context";

const Nav = () => {
  const navCtx = useContext(context);

  return (
    <nav>
      <a
        href="/#"
        onClick={() => navCtx.changeActiveLink("#")}
        className={navCtx.activeNavLink === "#" ? classes.active : null}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => navCtx.changeActiveLink("#about")}
        className={navCtx.activeNavLink === "#about" ? classes.active : null}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => navCtx.changeActiveLink("#experience")}
        className={
          navCtx.activeNavLink === "#experience" ? classes.active : null
        }
      >
        <GiBrain/>
      </a>
      <a
        href="#libraries"
        onClick={() => navCtx.changeActiveLink("#services")}
        className={navCtx.activeNavLink === "#services" ? classes.active : null}
      >
        <BiBook/>
      </a>
      <a
        href="#contact"
        onClick={() => navCtx.changeActiveLink("#contact")}
        className={navCtx.activeNavLink === "#contact" ? classes.active : null}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
