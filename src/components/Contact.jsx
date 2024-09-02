import React from "react";

export default function Contact() { 
  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert("Thanks for contacting us, we will get back to you soon!");
      form.reset(); // Reset the form fields
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
  }

  return (
    <section id="contact">
      <form className="contact-container" onSubmit={handleSubmit}>
        <h2>Get in touch</h2>
        <p>
          If you want me to work together, have any questions or want me to
          speak at your event, my inbox is always open. Whether I just want to
          say hi, I'll try my best to get back to you! Cheers!
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
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </section>
  );
}
