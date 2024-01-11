import React from "react";
import TimeLocation from "../components/TimeLocation";
import staff5 from "../assets/images/gallery/gallery-1@1.5x.jpg";
import { Link } from "react-router-dom";

const StaffsSingle = () => {
  return (
    <div>
      <main>
        <section className="banner full-width">
          <div className="container">
            <div className="banner__content">
              <div className="banner__heading">
                <h1>Staffs single</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam fugit
                </p>
              </div>

              <div className="breadcrumb">
                <div className="breadcrumb__home--link">
                  <Link to={"/"}>Home</Link>
                </div>
                <span></span>
                <div className="breadcrumb__current--page-link">
                  Staffs single
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="staffs-single default-section-spacing">
          <div className="container">
            <div className="row align-items-center">
              <div className="flex-md-7 flex-lg-8">
                <div className="staffs-single__details">
                  <div className="staff__name">
                    <h3>Matthew T. Chronister</h3>
                  </div>
                  <div className="staff__title">Worship leader</div>
                  <p className="bold">Member since 2015</p>
                </div>

                <div className="staffs-single__testimonial">
                  <h3>Matthew's testimonial</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Exercitationem porro enim rerum eligendi, voluptatum impedit
                    non, temporibus ipsum sint itaque quis? Distinctio officia
                    consequuntur, reiciendis animi quae voluptatibus perferendis
                    accusantium laudantium ab. Non inventore architecto sint
                    incidunt ea nulla molestias culpa, exercitationem eum
                    repellat provident asperiores repudiandae quos ipsa velit.
                  </p>
                  <p>
                    Magnam, in quae eius ut aliquam repellat quos porro eligendi
                    at quibusdam laudantium temporibus esse aut dolores,
                    expedita hic iure impedit dolor, numquam vel. Esse dolore
                    quidem veniam repellendus voluptatibus quas, voluptate
                    ratione, fuga vero aperiam amet maiores dolor molestias
                    totam autem minus magnam obcaecati est odit asperiores!
                    Minima, quam.
                  </p>
                  <p>
                    Cupiditate beatae repellat quam culpa nobis. Dicta possimus,
                    saepe autem ipsum magni consequuntur cupiditate unde
                    assumenda. Facere, rerum? Est a aspernatur nesciunt?
                    Obcaecati voluptas vel animi velit culpa, labore quos
                    assumenda, maxime voluptatum quasi minus temporibus ducimus.
                    Illum esse id laudantium temporibus labore, assumenda velit
                    voluptatum nihil eius sed ullam?
                  </p>
                </div>
              </div>

              <div className="flex-md-5 flex-lg-4">
                <div className="card card--picture staff">
                  <div className="card__header">
                    <img src={staff5} alt="A man" className="card__image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <TimeLocation />
      </main>
    </div>
  );
};

export default StaffsSingle;
