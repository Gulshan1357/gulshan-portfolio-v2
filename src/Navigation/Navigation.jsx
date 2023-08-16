import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

import "./Navigation.scss";

const Navigation = ({ isModified = false }) => {
  const [isOpen, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);

  // Different navigation options for Project Details page
  if (isModified) {
    return (
      <nav className="nav">
        <div className="nav-items">
          <div className="nav-item">
            {(isOpen || screenWidth > 500) && (
              <ul className="nav-links">
                <li className="nav-link">
                  <button onClick={handleClick}>Back to HomePage</button>
                </li>
                <li className="nav-link">
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div className="nav-item hamburger">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav className="nav">
      <div className="nav-items">
        <div className="nav-item">
          {(isOpen || screenWidth > 500) && (
            <ul className="nav-links">
              <li className="nav-link">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="nav-link">
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-link">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>

        <div className="nav-item hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
