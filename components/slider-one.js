import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";
import { Link as ScrollLink } from "react-scroll";
import bgImage1 from "@images/backgrounds/slider-bg-1-1.jpg";
import bgImage2 from "@images/backgrounds/slider-bg-1-2.jpg";
import bgImage3 from "@images/backgrounds/slider-bg-1-3.jpg";
import bgImage4 from "@images/backgrounds/slider-bg-1-4.jpg";
import bgImage5 from "@images/backgrounds/slider-bg-1-5.jpg";
import bgImage6 from "@images/backgrounds/slider-bg-1-6.jpg";
import bgImage7 from "@images/backgrounds/slider-bg-1-7.jpg";
SwiperCore.use([Autoplay, Pagination, EffectFade]);

const SliderOne = () => {
  const carouselOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    pagination: {
      el: "#main-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  };
  return (
    <section className="main-slider">
      <Swiper className="thm-swiper__slider" {...carouselOptions}>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bgImage7})` }}
          ></div>

          <Container>
            <div className="main-slider__box">
              <div className="block-title text-left">
                <p>
                  <span></span> Welcome To JB General Trading Co. Ltd
                </p>
              </div>
              <h3>Your Best Trading Company.</h3>
              <p>
                Your Best Trading Company In Building Materials, Food Items, Non
                Food Items ...
              </p>
              <ScrollLink
                activeClass="current"
                className="thm-btn"
                role="button"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={5000}
              >
                More About Us <i className="fa fa-arrow-circle-right"></i>{" "}
              </ScrollLink>
            </div>
          </Container>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bgImage1})` }}
          ></div>

          <Container>
            <div className="main-slider__box">
              <div className="block-title text-left">
                <p>
                  <span></span> Future Of Our Company
                </p>
              </div>

              <p>
                To become a leading marketer of building materials and food
                items and the best service delivery company in South Sudan.
              </p>
              <ScrollLink
                activeClass="current"
                className="thm-btn"
                role="button"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={5000}
              >
                More About Us <i className="fa fa-arrow-circle-right"></i>{" "}
              </ScrollLink>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bgImage2})` }}
          ></div>

          <Container>
            <div className="main-slider__box">
              <div className="block-title text-left">
                <p>
                  <span></span>Working Harder To Solve Your Problems
                </p>
              </div>

              <p>
                We are focused more in solving your building and feeding
                problems by our affordable pricing policy. "Let every family
                build a dreamed house and have something to eat" is our desire.
              </p>
              <ScrollLink
                activeClass="current"
                className="thm-btn"
                role="button"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={5000}
              >
                More About Us <i className="fa fa-arrow-circle-right"></i>{" "}
              </ScrollLink>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bgImage3})` }}
          ></div>

          <Container>
            <div className="main-slider__box">
              <div className="block-title text-left">
                <p>
                  <span></span>Pricing Policy
                </p>
              </div>

              <p>
                Our price structure is the lowest in the market. We keep
                striving to maintain our pricing policy to put smiles in the
                faces of our valued customers. "Your Joy Is Our Satisfaction".
              </p>
              <ScrollLink
                activeClass="current"
                className="thm-btn"
                role="button"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={5000}
              >
                More About Us <i className="fa fa-arrow-circle-right"></i>{" "}
              </ScrollLink>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bgImage4})` }}
          ></div>
          <Container>
            <div className="main-slider__box">
              <div className="block-title text-left">
                <p>
                  <span></span>Welcome
                </p>
              </div>

              <p>Hey 👏 welcome to our store</p>
              <ScrollLink
                activeClass="current"
                className="thm-btn"
                role="button"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={5000}
              >
                More About Us <i className="fa fa-arrow-circle-right"></i>{" "}
              </ScrollLink>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bgImage5})` }}
          ></div>
          <Container>
            <div className="main-slider__box">
              <div className="block-title text-left">
                <p>
                  <span></span>Welcome
                </p>
              </div>

              <p>Hey 👏 welcome to our store</p>
              <ScrollLink
                activeClass="current"
                className="thm-btn"
                role="button"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={5000}
              >
                More About Us <i className="fa fa-arrow-circle-right"></i>{" "}
              </ScrollLink>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bgImage6})` }}
          ></div>

          <Container>
            <div className="main-slider__box">
              <div className="block-title text-left">
                <p>
                  <span></span>Welcome
                </p>
              </div>

              <p>Hey 👏 welcome to our store</p>
              <ScrollLink
                activeClass="current"
                className="thm-btn"
                role="button"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={5000}
              >
                More About Us <i className="fa fa-arrow-circle-right"></i>{" "}
              </ScrollLink>
            </div>
          </Container>
        </SwiperSlide>
        <div className="swiper-pagination" id="main-slider-pagination"></div>
      </Swiper>
    </section>
  );
};

export default SliderOne;
