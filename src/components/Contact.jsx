import React, { useState } from "react";

export default function Contact() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  function handleInputChange(e) {
    const form = e.currentTarget.form || e.currentTarget;
    const allFilled = Array.from(form.elements).every((input) =>
      input.required ? input.value.trim() !== "" : true
    );
    setIsButtonDisabled(!allFilled);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: new URLSearchParams(data),
      });
      console.log("response " + response);
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert("Thanks for contacting us, we will get back to you soon!");
      form.reset();
      setIsButtonDisabled(true); // Reset button state after form submission
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
  }

  return (
    <section id="contact">
      <form className="contact-container" onSubmit={handleSubmit} onChange={handleInputChange}>
        <h2>Get in touch</h2>
        <p>
          If you're interested in collaborating, have any questions, or would like me to speak at
          your event, feel free to reach out. Whether it's a project inquiry or just a friendly
          hello, I'll do my best to respond promptly. My inbox at{" "}
          <span>abdibacha67@gmail.com</span> is always open, or you can fill out the form below.
          Looking forward to connecting with you! Cheers!
        </p>
        <div className="allinputs">
          <input
            id="frm-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            placeholder="Email"
          />
          <input
            id="frm-phone"
            type="text"
            name="phone"
            autoComplete="tel"
            required
            placeholder="Phone Number"
          />
          <input
            id="frm-first"
            type="text"
            name="first"
            autoComplete="given-name"
            required
            placeholder="First Name"
          />
          <input
            id="frm-last"
            type="text"
            name="last"
            autoComplete="family-name"
            required
            placeholder="Last Name"
          />
          <textarea
            id="frm-message"
            rows="6"
            name="message"
            placeholder="Message"
          ></textarea>
          <div className="button block">
            <button type="submit" disabled={isButtonDisabled} className={isButtonDisabled ? 'blurred' : ''}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
