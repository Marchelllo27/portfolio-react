import React, { useContext } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import context from "../../store/context";
import classes from "./Notification.module.css";

const Notification = props => {
  const Ctx = useContext(context);

  const closeNotificationHandler = () => {
    Ctx.showHideNotification(false);
  };

  return (
    <div className={classes.notification__container}>
      <p>{props.title}</p>
      <AiOutlineCloseCircle
        className={classes.closeBtn}
        onClick={closeNotificationHandler}
      />
    </div>
  );
};

export default Notification;
