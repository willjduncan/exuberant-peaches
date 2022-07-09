import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { validateEmail } from "../../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5x88tyj",
        "template_9w29b6t",
        form.current,
        "DRRJlKa-zv5411BAR"
      )
      .then(
        (result) => {
          console.log(result.text);
          let from_nameEl = document.getElementById("from_name");
          let reply_toEl = document.getElementById("reply_to");
          let messageEl = document.getElementById("message");
          let SuccessEl = document.getElementById("success");
          SuccessEl.classList.add("fade-in");
          from_nameEl.value = "";
          reply_toEl.value = "";
          messageEl.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e) => {
    if (e.target.name === "Email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section className="contact-bg">
      <div className="contact-container">
        <h1 className="contact-title">Contact me</h1>
        <h2 className="contact-title"></h2>
        <form id="contact-form" ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlFor="from_name">Name:</label>
            <input
              id="from_name"
              type="text"
              name="from_name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="reply_to">Email address:</label>
            <input
              id="reply_to"
              ype="email"
              name="reply_to"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <p id="success" className="hidden">
            Message Sent!
          </p>
          <button data-testid="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
