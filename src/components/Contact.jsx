import React from "react";
import "../style/contact.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1>Contact Me</h1>
        <p>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div className="contact-info">
          <p>
            <FaEnvelope /> &nbsp;
            <a href="mailto:niranjanan.22it@kongu.edu">
              niranjanan.22it@kongu.edu
            </a>
          </p>
          <p>
            <FaLinkedin /> &nbsp;
            <a
              href="https://www.linkedin.com/in/niranjana-nallasamy"
              target="_blank"
              rel="noopener noreferrer"
            >
              niranjana-nallasamy
            </a>
          </p>
          <p>
            <FaGithub /> &nbsp;
            <a
              href="https://github.com/NIRANJANANALLASAMY"
              target="_blank"
              rel="noopener noreferrer"
            >
             NIRANJANANALLASAMY
            </a>
          </p>
          <p>
            <FaMapMarkerAlt /> &nbsp; Tiruppur, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
