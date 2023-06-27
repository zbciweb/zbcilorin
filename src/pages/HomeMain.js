import React from "react";
import Sermon from "../../src/assets/images/sermon-1@1.5x.jpg";
import Ministry1 from "../../src/assets/images/ministry-1@1.5x.jpg";
import Ministry3 from "../../src/assets/images/ministry-3@1.5x.jpg";
import Ministry2 from "../../src/assets/images/ministry-2@1.5x.jpg";
import User1 from "./../assets/images/user-1.jpg";
import User2 from "./../assets/images/user-3.jpg";
import User3 from "./../assets/images/user-2.jpg";
import Post1 from "./../assets/images/post-1@1.5x.jpg";
import Post2 from "./../assets/images/post-2@1.5x.jpg";
import Sermon2 from "./../assets/images/sermon-1@1.5x.jpg";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import AOS from "aos";
import TimeLocation from "../components/TimeLocation";
import Gallery from "../components/Gallery";

const HomeMain = () => {
  AOS.init();
  return (
    <>
      <main>
        <Slider />
        {/* <section class="hero full-width">

  <div className="hero__carousel owl-carousel" id="hero-carousel">
    <div className="slide display-flex-column justify-align-center" id="first-slide">
      <div className="container">
        <div className="hero__content text-center">
          <span className="hero__intro">We are glad you are here</span>
          <h1>Welcome to Greater Love Church</h1>
          <p className="leading">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea veniam vitae
            repudiandae, reprehenderit ducimus at.</p>

          <div className="hero__cta">
            <Link href="" className="button">Learn more</Link>
          </div>

        </div>

      </div>

    </div>
    <div className="slide display-flex-column justify-align-center" id="second-slide">

      <div className="container">

        <div className="hero__content text-center">

          <span className="hero__intro">We are glad you are here</span>
          <h1>Come fellowship with us</h1>
          <p className="leading">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea veniam vitae
            repudiandae,
            reprehenderit ducimus at.</p>

          <div class="hero__cta">
            <Link href="" className="button">Learn more</Link>
          </div>

        </div>

      </div>

    </div>

  </div>

</section> */}
        <div className="next-event default-section-spacing background-primary">
          <div className="container">
            <div className="row align-items-center">
              <div className="flex-md-9">
                <div className="intro fancy-font">Next event</div>
                <div className="event">
                  <div className="event__metas horizontal">
                    <div className="event__meta--date meta">
                      <i className="ri-calendar-event-line"></i>{" "}
                      <span>02/28/2020</span>
                    </div>
                    <div className="event__meta--time meta">
                      <i className="ri-time-line"></i>{" "}
                      <span>11:45 AM - 12:45 PM</span>
                    </div>
                    <div className="event__meta--location meta">
                      <i className="ri-map-pin-line"></i>{" "}
                      <span>123 Jay St, Albany, NY 12203</span>
                    </div>
                  </div>

                  <div className="event__title">
                    <h2>Scholarship fundraiser @GLC</h2>
                  </div>
                </div>
              </div>

              <div className="flex-md-3">
                <div className="next-event__cta">
                  <Link
                    href="events-single.html"
                    className="button button-block-sm"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="last-sermon default-section-spacing">
          <div className="container">
            <div className="row align-items-center">
              <div className="flex-md-6 flex-lg-5">
                <div
                  className="card sermon"
                  data-aos="fade-up"
                  data-aos-offset="400"
                >
                  <div className="card__header">
                    <img
                      src={Sermon}
                      alt="A man reading the Holy Bible"
                      className="card__image sermon__image"
                    />
                  </div>
                  <div className="card__footer">
                    <div className="sermon__download">
                      <span className="text-white">Download</span>
                      <Link href="">
                        <i className="ri-video-line"></i>
                      </Link>
                      <Link href="">
                        <i className="ri-headphone-line"></i>
                      </Link>
                      <Link href="">
                        <i className="ri-file-pdf-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-md-6 flex-lg-7">
                <div
                  className="last-sermon__content"
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-delay="300"
                >
                  <div className="section-heading">
                    <span>Sermons</span>
                    <h2>Last week sermon</h2>
                  </div>

                  <div className="sermon__metas">
                    <div className="sermon__meta--date meta">
                      <i className="ri-calendar-event-line"></i>{" "}
                      <span>02/28/2020</span>
                    </div>
                    <div className="sermon__meta--speaker meta">
                      <i className="ri-user-star-line"></i>{" "}
                      <span>Pastor Erik B. Hogan</span>
                    </div>
                  </div>

                  <div className="sermon__content">
                    <div className="title">
                      <h3>Loving Jesus with all your heart, mind, and soul</h3>
                    </div>
                    <div className="excerpt">
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Totam laborum, aperiam iste sit tempore
                        consequuntur voluptates quaerat animi molestias
                        doloribus nobis numquam amet inventore nihil autem
                        praesentium libero laudantium. Possimus, maiores, eius
                        ipsum beatae numquam nemo cum officiis, veniam quidem
                        quibusdam impedit inventore rem. Hic ea eligendi
                        voluptate commodi quo...
                      </p>
                    </div>
                  </div>

                  <div className="sermon__link">
                    <Link href="" className="button">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="our-ministries default-section-spacing background-lighter-gray">
          <div className="container">
            <div className="section-heading text-center">
              <span>Our ministries</span>
              <h2>Check out some of our ministries</h2>
            </div>

            <div className="row mar-b-sm">
              <div className="flex-lg-6">
                <div className="card ministry">
                  <div className="card__header">
                    <img
                      src={Ministry1}
                      alt="A man holding and reading the Holy Bible"
                      className="card__image ministry__image"
                    />
                  </div>

                  <div className="card__footer">
                    <div className="ministry__title">
                      <h3>MEN&apos;S MISSIONARY UNION (MMU)</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-lg-6">
                <div className="row mar-b-sm">
                  <div className="flex-lg-12">
                    <div className="card ministry custom-height">
                      <div className="card__header">
                        <img
                          src={Ministry3}
                          alt="A little boy laughing while reading the Holy Bible"
                          className="card__image ministry__image"
                        />
                      </div>

                      <div className="card__footer">
                        <div className="ministry__title">
                          <h3>Women Missionary Society (WMS)</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="flex-lg-12">
                    <div className="card ministry custom-height">
                      <div className="card__header">
                        <img
                          src={Ministry2}
                          alt="Young women praying"
                          className="card__image ministry__image"
                        />
                      </div>

                      <div className="card__footer">
                        <div className="ministry__title">
                          <h3>Youth Ministry</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="flex-lg-6">
                <div className="row mar-b-sm">
                  <div className="flex-lg-12">
                    <div className="card ministry custom-height">
                      <div className="card__header">
                        <img
                          src={Ministry3}
                          alt="A little boy laughing while reading the Holy Bible"
                          className="card__image ministry__image"
                        />
                      </div>

                      <div className="card__footer">
                        <div className="ministry__title">
                          <h3>TEENAGERS MINISTRY</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="flex-lg-12">
                    <div className="card ministry custom-height">
                      <div className="card__header">
                        <img
                          src={Ministry2}
                          alt="Young women praying"
                          className="card__image ministry__image"
                        />
                      </div>

                      <div className="card__footer">
                        <div className="ministry__title">
                          <h3>CHILDRENS MINISTRY</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-lg-6">
                <div className="card ministry">
                  <div className="card__header">
                    <img
                      src={Ministry1}
                      alt="A man holding and reading the Holy Bible"
                      className="card__image ministry__image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Gallery page="Church" />

        <section className="our-testimonial default-section-spacing background-secondary">
          <div className="our-testimonial__background--cover"></div>

          <div className="our-testimonial__content">
            <div className="container">
              <div className="row align-items-center">
                <div className="flex-lg-5"></div>

                <div className="flex-lg-7">
                  <div className="section-heading text-white">
                    <span>Testimonials</span>
                    <h2>What people are saying...</h2>
                  </div>

                  <div className="row">
                    <div className="flex-md-6 flex-lg-12 mar-b-sm">
                      <div className="testimonial">
                        <div className="testimonial__avatar">
                          <div className="card card--picture card--square testimonial__user">
                            <div className="card__header">
                              <img
                                src={User1}
                                alt="A man"
                                className="card__image"
                              />
                            </div>

                            <div className="card__footer">
                              <div className="testimonial__author">
                                George E. Pugh
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial__text text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Itaque animi, magni nisi dolorum nam debitis
                          atque doloremque iure eaque mollitia. Autem cum
                          explicabo libero voluptatum, at suscipit officia,
                          dolore, quia sed cumque repudiandae quo voluptas
                          fugiat laudantium doloribus reprehenderit. Nulla harum
                          perspiciatis recusandae ratione possimus.
                        </div>
                      </div>
                    </div>

                    <div className="flex-md-6 flex-lg-12 mar-b-sm">
                      <div className="testimonial">
                        <div className="testimonial__avatar">
                          <div className="card card--picture card--square testimonial__user">
                            <div className="card__header">
                              <img
                                src={User2}
                                alt="A woman"
                                className="card__image"
                              />
                            </div>

                            <div className="card__footer">
                              <div className="testimonial__author">
                                Nancy A. Austin
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="testimonial__text text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Itaque animi, magni nisi dolorum nam debitis
                          atque doloremque iure eaque mollitia. Autem cum
                          explicabo libero voluptatum, at suscipit officia,
                          dolore, quia sed cumque repudiandae quo voluptas
                          fugiat laudantium doloribus reprehenderit. Nulla harum
                          perspiciatis recusandae ratione possimus.
                        </div>
                      </div>
                    </div>

                    <div className="flex-md-12 flex-lg-12">
                      <div className="testimonial">
                        <div className="testimonial__avatar">
                          <div className="card card--picture card--square testimonial__user">
                            <div className="card__header">
                              <img
                                src={User3}
                                alt="A man"
                                className="card__image"
                              />
                            </div>

                            <div className="card__footer">
                              <div className="testimonial__author">
                                Joe K. Liley
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="testimonial__text text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Itaque animi, magni nisi dolorum nam debitis
                          atque doloremque iure eaque mollitia. Autem cum
                          explicabo libero voluptatum, at suscipit officia,
                          dolore, quia sed cumque repudiandae quo voluptas
                          fugiat laudantium doloribus reprehenderit. Nulla harum
                          perspiciatis recusandae ratione possimus.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="recent-articles default-section-spacing text-center">
          <div className="container">
            <div className="section-heading">
              <span>Our blog</span>
              <h2>Fresh articles from our blog</h2>
            </div>
            <div className="row">
              <div className="flex-md-6 flex-lg-4">
                <div className="card blog">
                  <div className="card__header">
                    <img
                      src={Post1}
                      alt="A man praying standing"
                      className="card__image blog__image"
                    />
                  </div>

                  <div className="card__footer">
                    <div className="blog__metas">
                      <div className="blog__meta--date meta">
                        <i className="ri-calendar-event-line"></i>{" "}
                        <span>02/28/2020</span>
                      </div>
                      <div className="blog__meta--speaker meta">
                        <i className="ri-user-star-line"></i>{" "}
                        <span>Pastor Erik B. Hogan</span>
                      </div>
                    </div>

                    <div className="blog__title">
                      <h3>Living for Christ requires boldness</h3>
                    </div>

                    <div className="blog__content">
                      <div className="excerpt">
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Debitis excepturi sunt doloribus consequuntur
                          eveniet nostrum dicta, voluptate enim rem voluptatem.
                        </p>
                      </div>
                      <div className="blog__link">
                        <a href="blog-single.html" className="button">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-md-6 flex-lg-4">
                <div className="card blog">
                  <div className="card__header">
                    <img
                      src={Post2}
                      alt="Women praying"
                      className="card__image blog__image"
                    />
                  </div>

                  <div className="card__footer">
                    <div className="blog__metas">
                      <div className="blog__meta--date meta">
                        <i className="ri-calendar-event-line"></i>{" "}
                        <span>02/28/2020</span>
                      </div>
                      <div className="blog__meta--speaker meta">
                        <i className="ri-user-star-line"></i>{" "}
                        <span>Pastor Erik B. Hogan</span>
                      </div>
                    </div>

                    <div className="blog__title">
                      <h3>Living in the last days as Christians</h3>
                    </div>

                    <div className="blog__content">
                      <div className="excerpt">
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Debitis excepturi sunt doloribus consequuntur
                          eveniet nostrum dicta, voluptate enim rem voluptatem.
                        </p>
                      </div>
                      <div className="blog__link">
                        <Link href="blog-single.html" className="button">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-md-12 flex-lg-4">
                <div className="card blog">
                  <div className="card__header">
                    <img
                      src={Sermon2}
                      alt="A man reading the Holy Bible"
                      className="card__image blog__image"
                    />
                  </div>

                  <div className="card__footer">
                    <div className="blog__metas">
                      <div className="blog__meta--date meta">
                        <i className="ri-calendar-event-line"></i>{" "}
                        <span>02/28/2020</span>
                      </div>
                      <div className="blog__meta--speaker meta">
                        <i className="ri-user-star-line"></i>{" "}
                        <span>Pastor Erik B. Hogan</span>
                      </div>
                    </div>

                    <div className="blog__title">
                      <h3>Understanding the Bible requires dedication</h3>
                    </div>

                    <div className="blog__content">
                      <div className="excerpt">
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Debitis excepturi sunt doloribus consequuntur
                          eveniet nostrum dicta, voluptate enim rem voluptatem.
                        </p>
                      </div>
                      <div className="blog__link">
                        <a href="blog-single.html" className="button">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="subscription default-section-spacing background-lighter-gray">
          <div className="container">
            <div className="section-heading">
              <span>Stay in touch</span>
              <h2>Join our mailing list</h2>
            </div>

            <form action="#" className="form">
              <div className="row">
                <div className="flex-md-9">
                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      placeholder="Enter your valid email address"
                    />
                  </div>
                </div>

                <div className="flex-md-3">
                  <button
                    type="submit"
                    className="button button-block-sm form__submit"
                  >
                    Subscribe today
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <TimeLocation />
      </main>
    </>
  );
};

export default HomeMain;