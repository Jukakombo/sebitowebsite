import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import NavLinks from "@components/nav-links";
import logoDark from "@images/logo-dark.png";
const HeaderOne = () => {
  var today = new Date();

  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  var dateTime = date + " " + time;

  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 120) {
      setSticky(true);
    } else if (window.scrollY < 120) {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <>
      <div className="topbar" id="home">
        <Container>
          <p>
            <i className="far fa-clock"></i> Working hours from 7:00 am - 6.00pm
            Daily
          </p>

          <div className="topbar-social">
            <a
              href="https://www.facebook.com/"
              className="fab fa-facebook-f"
            ></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin-in"></a>
          </div>
        </Container>
      </div>
      <header className="upper-header">
        <Container>
          <div className="logo">
            <a href="/">
              <img src={logoDark} alt="" />
            </a>
            <span className="side-menu-toggler mobile-nav__opener">
              <i className="fa fa-bars"></i>
            </span>
          </div>
          <div className="header-infos">
            <div className="header-info">
              <i className="besit-icon-phone"></i>
              <h3>
                Call Us: <a href="tel:+2119-27194-949">+211(0)927194949</a>
              </h3>
              <h3>
                Call Us: <a href="tel: +2119-1872-1171">+211(0)918721171</a>
              </h3>
              <p>Date:{dateTime}</p>
            </div>
            <div className="header-info">
              <i className="far fa-map-marker-alt"></i>
              <h3>Gudele 2,</h3>
              <p>Juba, South Sudan</p>
            </div>
          </div>
        </Container>
      </header>

      <nav className="main-menu stricky">
        <Container>
          <NavLinks />
          <ScrollLink
            activeClass="current"
            className="thm-btn"
            role="button"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact Us Now! <i className="fa fa-arrow-circle-right"></i>
          </ScrollLink>
        </Container>
      </nav>
      {/* stricky menu cloned */}

      <nav
        className={`main-menu stricky stricked-menu ${
          sticky === true ? "stricky-fixed" : null
        }  `}
      >
        <Container>
          <NavLinks />
          <ScrollLink
            activeClass="current"
            className="thm-btn"
            role="button"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Free Consultant <i className="fa fa-arrow-circle-right"></i>
          </ScrollLink>
        </Container>
      </nav>
    </>
  );
};

export default HeaderOne;
