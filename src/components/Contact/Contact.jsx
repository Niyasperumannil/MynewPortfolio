import React, { useState } from "react";
import "./Contact.css";
import { FiPhoneCall, FiSend } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const phoneNumber = "YOUR_WHATSAPP_NUMBER"; // ✅ e.g., 971501234567 (no + or spaces)
    const { name, email, message } = formData;

    const text = `*New Contact Message*%0A
👤 *Name:* ${name}%0A
✉️ *Email:* ${email}%0A
💬 *Message:* ${message}`;

    const whatsappURL = `https://wa.me/${9778340818}?text=${text}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1 className="contact-title">Contact Me</h1>

        <div className="contact-info">
          <div className="contact-item">
            <FiPhoneCall className="contact-icon" />
            <p className="contact-text">9778340818</p>
          </div>

          <div className="contact-item">
            <MdOutlineEmail className="contact-icon" />
            <p className="contact-text">itsniyasofficial@gmail.com
</p>
          </div>

          <div className="contact-item">
            <FiSend className="contact-icon" />
            <p className="contact-text">
              Kerala<br />
              Palakkad
            </p>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <form className="contact-form" onSubmit={handleWhatsAppSend}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="ej.: Genoveva Lian Hullt"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="example@bslthemes.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="To Write"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* ✅ WhatsApp Button */}
          <button type="submit" className="send-btn">
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
