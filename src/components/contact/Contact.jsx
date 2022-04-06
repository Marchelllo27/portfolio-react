import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import classes from "./Contact.module.css";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm(
      "service_cxgq4vh",
      "template_mthwv15",
      formRef.current,
      "GXo-_8IWe6C53Hr_5"
    );

    e.target.reset();
  };

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
              href="https://m.me/profile.php?id=100080298755222"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className={classes["contact__option"]}>
            <BsWhatsapp className={classes["contact__option-icon"]} />
            <h4>WhatsApp</h4>
            <h5>+1234567</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+33783881567"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={formRef} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
