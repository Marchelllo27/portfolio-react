import React, { useContext, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import context from "../../store/context";
import classes from "./Notification.module.css";

const Notification = props => {
  const Ctx = useContext(context);
  const showHideNotification = Ctx.showHideNotification;

  const closeNotificationHandler = () => {
    Ctx.showHideNotification(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => showHideNotification(false), 4000);
    return () => {
      clearTimeout(timer);
    };
  }, [showHideNotification]);

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
