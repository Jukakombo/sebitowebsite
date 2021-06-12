import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "@components/project-card";
import { PROJECT_DATA } from "@data/index";
const Project = () => {
  const carouselOptions = {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    autoplay: { delay: 5000 },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      375: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      576: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 1,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 1,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 1,
      },
    },
  };
  return (
    <section className="project-one" id="project">
      <Container>
        <div className="project-one__top">
          <Row>
            <Col md={12} lg={6}>
              <div className="block-title text-left">
                <p>
                  <span></span>Our Location
                </p>
                <h3>Gudele 2, Juba South Sudan</h3>
              </div>
            </Col>
            <Col md={12} lg={6}>
              <p className="project-one__top-text">
                Give the details about your store/wholesaler location eg. gudele
                2 at bus park oposite ............ etc
              </p>
            </Col>
          </Row>
        </div>
        <Swiper className="thm-swiper__slider" {...carouselOptions}>
          {PROJECT_DATA.map((project, index) => (
            <SwiperSlide key={`project-key-${index}`}>
              <ProjectCard data={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Project;
