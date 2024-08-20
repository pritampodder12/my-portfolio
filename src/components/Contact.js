import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="text-3xl font-bold mb-4 text-white">Contact Me</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="input" />
        <input type="email" placeholder="Your Email" className="input" />
        <textarea placeholder="Your Message" className="input h-32"></textarea>
        <button type="submit" className="button-primary animated-border">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
