import React from "react";

export default function Contact1() {
  return (
    <form className="contact-container">
      <h2>Get in touch</h2>
      <p>
        If you want me to work together, have any questions or want me to speak
        at your event, my inbox is always open. Whether I just want to say hi,
        I'll try my best to get back to you! Cheers!
      </p>
      <div className="allinputs">
        <div className="email block">
            <label htmlFor="frm-email">Email</label>
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
            <label htmlFor="frm-phone">Phone Number</label>
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
                <label htmlFor="frm-first">First Name</label>
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
                <label htmlFor="frm-last">Last Name</label>
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
            <textarea id="frm-message" rows="6" name="message" placeholder="Message" ></textarea>
        </div>
        <div className="button block">
            <button type="submit">Submit</button>
        </div>
     </div>
    </form>
  );
}
