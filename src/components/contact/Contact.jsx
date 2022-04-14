import React from "react";

import EmailForm from "./EmailForm";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className={`container ${classes["contact__container"]}`}>
        <div className={classes["contact__options"]}>
          <article className={classes["contact__option"]}>
            <MdOutlineMail className={classes["contact__option-icon"]} />
            <h4>Email</h4>
            <h5>
              marchelllo27<wbr></wbr>@gmail.com
            </h5>
            <a
              href="mailto:marchelllo27@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className={classes["contact__option"]}>
            <RiMessengerLine className={classes["contact__option-icon"]} />
            <h4>Messenger</h4>
            <h5>Tofan Marc</h5>
            <a
              href="https://m.me/Mara-109180351765590"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className={classes["contact__option"]}>
            <BsWhatsapp className={classes["contact__option-icon"]} />
            <h4>WhatsApp</h4>
            <h5>+33783881567</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+33783881567"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <EmailForm />
      </div>
    </section>
  );
};

export default Contact;
