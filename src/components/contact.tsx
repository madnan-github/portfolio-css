"use client"
import '@/style/contact.css';
import { useState } from "react";

const Contact = ()=> {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. Your message has been received!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
<div className="contact-container">
  <form onSubmit={handleSubmit} className="contact-form">
    <h1 className="contact-title">Contact Me</h1>
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleChange}
      className="contact-input"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleChange}
      className="contact-input"
      required
    />
    <textarea
      name="message"
      placeholder="Your Message"
      value={formData.message}
      onChange={handleChange}
      className="contact-textarea"
      rows={5}
      required
    ></textarea>
    <button type="submit" className="contact-button">
      Send Message
    </button>
  </form>
</div>

  );
}

export default Contact