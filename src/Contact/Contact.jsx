import { IconContext } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";

import "./Contact.scss";
const Contact = () => {
  return (
    <footer id="contact">
      <h1>Contact</h1>
      <div className="contact-icons">
        <IconContext.Provider value={{ className: "contact-icon" }}>
          <a
            href="https://www.linkedin.com/in/gulshan-sankhyan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "contact-icon" }}>
          <a
            href="https://github.com/Gulshan1357"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "contact-icon" }}>
          <a
            href="mailto:g.sankhyan1357@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </IconContext.Provider>
      </div>
    </footer>
  );
};

export default Contact;
