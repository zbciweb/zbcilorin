import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import hero1 from "../assets/images/hero-1.jpg";
import hero2 from "../assets/images/hero-2.jpg";

const Sliders = () => {
  const [products, setProducts] = useState([]);

  const content = [
    {
      greetings: "We are glad you are here",
      title: "Welcome to Zion Baptist Church Ilorin",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea veniam vitae repudiandae, reprehenderit ducimus at.",
      background: hero1,
      link: "/about",
    },
    {
      greetings: "We are glad you are here",
      title: "Come fellowship with us",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea veniam vitae repudiandae, reprehenderit ducimus at.",
      background: hero2,
      link: "/about",
    },
  ];

  useEffect(() => {
    setProducts(content);
  }, []);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="hero full-width">
      <div>
        <Slider {...settings}>
          {products.map((item, index) => {
            return (
              <div className="hero full-width" key={index}>
                <img
                  src={item.background}
                  style={{ position: "absolute", height: "100%" }}
                  alt=""
                />
                <div className="slide display-flex-column justify-align-center container">
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
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Sliders;
