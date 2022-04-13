import React, { useState, useRef, useContext } from "react";
import validator from "validator";
import emailjs from "@emailjs/browser";

import context from "../../store/context";
import classes from "./Contact.module.css";

const EmailForm = () => {
  const ctx = useContext(context);
  const [error, setError] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = e => {
    e.preventDefault();
    if (
      nameRef.current.value.trim() !== "" &&
      validator.isEmail(emailRef.current.value) &&
      messageRef.current.value.trim() !== ""
    ) {
      emailjs.sendForm(
        "service_cxgq4vh",
        "template_mthwv15",
        e.target,
        "GXo-_8IWe6C53Hr_5"
      );
      e.target.reset();

      ctx.showHideNotification(true);
      setError(false);
    } else {
      return setError(true);
    }
  };

  return (
    <form onSubmit={sendEmail}>
      <input
        type="text"
        name="name"
        placeholder="Your Full Name"
        ref={nameRef}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        ref={emailRef}
        required
      />
      <textarea
        name="message"
        rows="7"
        placeholder="Your Message"
        ref={messageRef}
        required
      ></textarea>
      {error && (
        <small className={classes.error}>Please enter correct data!</small>
      )}
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
};

export default EmailForm;
