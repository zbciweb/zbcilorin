import React from "react";
import TimeLocation from "../components/TimeLocation";
import single from "../assets/images/single.jpg";

import sermon2 from "../assets/images/sermon-2@1.5x.jpg";

import { Link, useParams } from "react-router-dom";
import Gallery from "../components/Gallery";
import { removeHyphen, selectRandomMembers } from "../utils/fn";
import { __ministries } from "../utils/ministries";
const MinistriesSinge = () => {
  const { ministries } = useParams();

  const selectedMinistries = selectRandomMembers(__ministries, 2);

  return (
    <div>
      <main>
        <section className="banner full-width">
          <div className="container">
            <div className="banner__content">
              <div className="banner__heading">
                <h1>Ministries</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam fugit
                </p>
              </div>

              <div className="breadcrumb">
                <div className="breadcrumb__home--link">
                  <Link to="/">Home</Link>
                </div>
                <span></span>
                <div>
                  <Link to="/ministries">Ministries</Link>
                </div>
                <span></span>
                <div className="breadcrumb__current--page-link">
                  {removeHyphen(ministries)}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="single ministries-single default-section-spacing">
          <div className="container">
            <div className="row">
              <div className="flex-lg-8">
                <div className="single__content">
                  <div className="card single__featured--image no-padding">
                    <img
                      src={single}
                      alt="A man praying"
                      className="card__image"
                    />
                  </div>
                  <div className="single__metas ministries-single__metas">
                    <div className="row align-items-center">
                      <div className="flex-md-8 flex-lg-9">
                        <div className="ministry__meta">
                          <div className="meta">
                            <i className="ri-user-star-line"></i>{" "}
                            <span>
                              Heads by{" "}
                              <span className="bold">
                                Deacon Geoffrey E. Henderson
                              </span>
                            </span>
                          </div>
                          <div className="meta">
                            <i className="ri-group-line"></i>{" "}
                            <span>14 Brothers</span>
                          </div>
                          <div className="meta">
                            <i className="ri-calendar-event-line"></i>{" "}
                            <span>Meets once every month</span>
                          </div>
                        </div>

                        <div className="ministry__content">
                          <div className="title">
                            <h2>Men's ministry</h2>
                          </div>
                        </div>
                      </div>

                      <div className="flex-md-4 flex-lg-3">
                        <div className="ministry__link">
                          <Link href="#" className="button button-block-md">
                            Join this ministry
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single__content--full">
                    <h3>Description</h3>

                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut consequuntur nulla voluptate quas excepturi aliquam
                      mollitia aut veniam voluptates suscipit error voluptatibus
                      deserunt, blanditiis necessitatibus dolorem aspernatur
                      rerum unde similique ab praesentium? Sint minus
                      repellendus vitae dignissimos autem nostrum quisquam nemo
                      officia, facere, explicabo perferendis fugiat excepturi.
                    </p>
                    <p>
                      Odio laborum unde voluptatum facilis quam consequuntur ut
                      adipisci id, accusantium vel perspiciatis sed suscipit
                      excepturi nobis distinctio quos consectetur a. Recusandae,
                      quaerat assumenda fuga et facilis consectetur,
                      consequuntur nihil provident officiis at nemo rerum
                      similique incidunt corrupti cum voluptates ex sequi magnam
                      impedit reprehenderit tempora soluta!
                    </p>

                    <h3>Responsibilities</h3>

                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Vel alias aperiam ut libero impedit distinctio perferendis
                      expedita amet ratione similique commodi optio dolorem
                      sequi, non dolores esse mollitia numquam saepe magni
                      fugiat blanditiis iste aliquid.
                    </p>
                    <p>
                      Sed repellendus vel accusantium debitis, cum dolor
                      delectus sit odit numquam laudantium nihil nam in at?
                      Fuga, veritatis suscipit itaque dolorem laboriosam impedit
                      delectus fugit reprehenderit.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex-lg-4">

              <div className="sidebar">

                <div className="sidebar__widget">
                  <div className="share">
                    <span>Share</span>
                    <Link href="" title="Share it on Facebook"><i className="ri-facebook-line"></i></Link>
                    <Link href="" title="Share it on LinkedIn"><i className="ri-linkedin-line"></i></Link>
                    <Link href="" title="Share it on Twitter"><i className="ri-twitter-line"></i></Link>
                    <Link href="" title="Email it"><i className="ri-mail-line"></i></Link>
                  </div>

                  <div className="sidebar__widget">
                    <h3 className="sidebar__title">Other Ministries</h3>

                    {selectedMinistries.map((d, i) => (
                      <div key={i} className="card custom-height ministry">
                        <div className="card__header">
                          <img
                            src={d.image}
                            alt={d.name}
                            className="card__image ministry__image"
                          />
                        </div>
                        <div className="card__footer">
                          <div className="ministry__title">
                            <h3>{removeHyphen(d.name)}</h3>
                          </div>

                          <div className="ministry__content">
                            <div className="ministry__link">
                              <Link
                                to={`/ministries/${d.name}`}
                                className="button"
                              >
                                Learn more
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="sidebar__widget">
                    <h3 className="sidebar__title">Volunteer</h3>

                    <div className="card custom-height text-center">
                      <div className="card__header">
                        <img
                          src={sermon2}
                          alt=""
                          className="card__image ministry__image"
                        />
                      </div>

                      <div className="card__footer">
                        <div className="ministry__title text-white mar-b-sm">
                          <h3>
                            Love helping out?
                            <br />
                            We can use your help!
                          </h3>
                        </div>

                        <div className="ministry__link">
                          <Link to="/donate" className="button">
                            Donate
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar__widget">
                    <h3 className="sidebar__title">Subscribe</h3>

                    <form action="#" className="form">
                      <div className="form__group mar-b-sm">
                        <input
                          type="email"
                          className="form__input"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <button type="submit" className="button">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {<Gallery page={ministries} />}
        <TimeLocation />
      </main>
    </div>
  );
};

export default MinistriesSinge
