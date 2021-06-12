import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import about1 from "@images/resources/about-1-1.png";
import about2 from "@images/resources/about-1-2.png";
const About = () => {
  return (
    <section className="about-one" id="about">
      <Container>
        <Row>
          <Col
            lg={6}
            className="col-lg-6 wow fadeInLeft"
            data-wow-duration="1500ms"
          >
            <div className="about-one__images">
              <img src={about1} alt="" />
              <img src={about2} alt="" />
              <div className="about-one__images-content text-center">
                <h3>100 plus</h3>
                <p>Happy Customers</p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-one__content">
              <div className="block-title text-left">
                <p>
                  <span></span>About Us
                </p>
              </div>

              <p>
                JB General Trading Co. Ltd is administered and operated by a
                fully experienced and qualified professional team of managers,
                marketers, staff and skillful working force to enhance best
                service delivery to our esteem customers.
              </p>
              <div className="about-one__box">
                <i className="besit-icon-medal"></i>
                <div className="about-one__box-content">
                  <h3>Delivery Solutions​</h3>
                  <p>
                    We are committed in delivery of our products on time and as
                    requested by our customers free of charge to their locations
                    within Juba.
                  </p>
                </div>
              </div>
              <div className="about-one__box">
                <i className="besit-icon-clock1"></i>
                <div className="about-one__box-content">
                  <h3>24/7 Support</h3>
                  <p>
                    Jb General Trading Co.Ltd have a good news you that you
                    don't have to handle it all by yourself. With customer
                    support services, such as telephone answering services,
                    there to help you
                  </p>
                </div>
              </div>

              <div className="about-one__call">
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
                  Get In Touch <i className="fa fa-arrow-circle-right"></i>{" "}
                </ScrollLink>

                <div className="about-one__call-box">
                  <i className="besit-icon-phone"></i>
                  <p>
                    Call anytime <br />{" "}
                    <a href="tel:+2119-2719-4949">+211(0)927194949</a>
                    <a href="tel:+2119-1872-1171">+211(0)918721171</a>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
