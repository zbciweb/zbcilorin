import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import hero1 from "../assets/images/hero-1.jpg";
import hero2 from "../assets/images/hero-2.jpg";


const Sliders = () => {
  const content = [
    {
      greetings: "We are glad you are here",
      title: "Welcome to ZION",
      subtitle: "Community of Grace and Peace",
      text: "The City of the Lord",

      background: hero1,
      link: "/about",
    },
    {
      greetings: "We are glad you are here",
      title: "Fellowship with us",
      text: "",
      background: hero2,
      link: "#worshiptime",
    },
  ];

  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <section className="hero full-width">
        <div className="hero__carousel owl-carousel">
          <Slider {...settings}>
            {content.map((item, index) => {
              return (
                <div className="hero full-width" key={index}>
                  <div className="slider__overlay">
                    <img
                      src={item.background}
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100vw",
                      }}
                      alt=""
                    />
                  </div>

                  <div className="slide display-flex-column justify-align-center">
                    <div className="container">
                      <div className="hero__content text-center">
                        <span className="hero__intro">{item.greetings}</span>
                        <h1>{item.title}</h1>
                        <h3>{item.subtitle}</h3>
                        <p className="leading">{item.text}</p>
                        <div className="hero__cta">
                          <Link to={item.link} className="button">
                            Learn more
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* .hero__content */}
                  </div>
                  {/*    <div className="slide display-flex-column justify-align-center container">
                    <div className="hero__content text-center">
                      <span className="hero__intro">{item.greetings}</span>
                      <h1>{item.title}</h1>
                      <p className="leading">{item.text}</p>

                      <div className="hero__cta">
                        <Link to={item.link} className="button">
                          Learn more
                        </Link>
                      </div>
                    </div>
                  </div> */}
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Sliders;
