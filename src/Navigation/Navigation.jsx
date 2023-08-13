import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import "./Navigation.scss";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);
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
