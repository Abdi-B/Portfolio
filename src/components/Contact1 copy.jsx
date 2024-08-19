import React from "react";

export default function Contact1() {
  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(data);

    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert("Thanks for contacting us, we will get back to you soon!");
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
  }
  return (
    <form className="contact-container" onSubmit={handleSubmit}>
      <h2>Get in touch</h2>
      <p>
        If you want me to work together, have any questions or want me to speak
        at your event, my inbox is always open. Whether I just want to say hi,
        I'll try my best to get back to you! Cheers!
      </p>
      <div className="allinputs">
        <div className="email block">
          {/* <label htmlFor="frm-email">Email</label> */}
          <input
            id="frm-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            placeholder="Email"
          />
        </div>
        <div className="block phone">
          {/* <label htmlFor="frm-phone">Phone Number</label> */}
          <input
            id="frm-phone"
            type="text"
            name="phone"
            autoComplete="tel"
            required
            placeholder="Phone Number"
          />
        </div>
        <div className="name block">
          <div>
            {/* <label htmlFor="frm-first">First Name</label> */}
            <input
              id="frm-first"
              type="text"
              name="first"
              autoComplete="given-name"
              required
              placeholder="First Name"
            />
          </div>
          <div>
            {/* <label htmlFor="frm-last">Last Name</label> */}
            <input
              id="frm-last"
              type="text"
              name="last"
              autoComplete="family-name"
              required
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="message block">
          <label htmlFor="frm-message">Message</label>
          <textarea
            id="frm-message"
            rows="6"
            name="message"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="button block">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}
