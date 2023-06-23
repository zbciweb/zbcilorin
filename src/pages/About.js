import React from "react";

import { Link } from "react-router-dom"; 
import TimeLocation from "../components/TimeLocation";
import PastorandDiaconates from "../components/about/PastorandDiaconates";

const About = () => {
  return (
    <div>
      <main>
        <section className="banner full-width">
          <div className="container">
            <div className="banner__content">
              <div className="banner__heading">
                <h1>About us</h1>
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
                <div className="breadcrumb__current--page-link">About</div>
              </div>
            </div>
          </div>
        </section>

        <section className="our-mission-vision default-section-spacing text-white">
          <div className="our-mission-vision__content">
            <div className="container">
              <div className="row">
                <div className="flex-lg-6">
                  <div className="section-heading">
                    <span>Missions</span>
                    <h2>Our missions</h2>
                  </div>

                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate ut delectus qui quos alias dignissimos
                    reprehenderit explicabo repellendus. Ipsam, accusantium
                    tenetur? Iste numquam odio voluptatem exercitationem
                    officiis debitis aliquam quis.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate ut delectus qui quos alias dignissimos
                    reprehenderit explicabo repellendus. Ipsam, accusantium
                    tenetur? Iste numquam odio voluptatem exercitationem
                    officiis debitis aliquam quis.
                  </p>
                  <p className="mar-b-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate ut delectus qui quos alias dignissimos
                    reprehenderit explicabo repellendus. Ipsam, accusantium
                    tenetur? Iste numquam odio voluptatem exercitationem
                    officiis debitis aliquam quis.
                  </p>
                </div>

                <div className="flex-lg-6">
                  <div className="section-heading text-white">
                    <span>Visions</span>
                    <h2>Our vision</h2>
                  </div>

                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate ut delectus qui quos alias dignissimos
                    reprehenderit explicabo repellendus. Ipsam, accusantium
                    tenetur? Iste numquam odio voluptatem exercitationem
                    officiis debitis aliquam quis.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate ut delectus qui quos alias dignissimos
                    reprehenderit explicabo repellendus. Ipsam, accusantium
                    tenetur? Iste numquam odio voluptatem exercitationem
                    officiis debitis aliquam quis.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate ut delectus qui quos alias dignissimos
                    reprehenderit explicabo repellendus. Ipsam, accusantium
                    tenetur? Iste numquam odio voluptatem exercitationem
                    officiis debitis aliquam quis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our-belief default-section-spacing text-center">
          <div className="container">
            <div className="section-heading">
              <span>Our belief</span>
              <h2>Our faith - what we believe</h2>
            </div>

            <div className="row">
              <div className="flex-md-6 flex-lg-3 mar-b-sm">
                <div className="our-belief__box">
                  <div className="heading">
                    <h3>The Bible</h3>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, accusamus.
                  </p>
                </div>
              </div>

              <div className="flex-md-6 flex-lg-3 mar-b-sm">
                <div className="our-belief__box">
                  <div className="heading">
                    <h3>The Holy Trinity</h3>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, accusamus.
                  </p>
                </div>
              </div>

              <div className="flex-md-6 flex-lg-3">
                <div className="our-belief__box">
                  <div className="heading">
                    <h3>The Blessed Hope</h3>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, accusamus.
                  </p>
                </div>
              </div>

              <div className="flex-md-6 flex-lg-3">
                <div className="our-belief__box">
                  <div className="heading">
                    <h3>Sanctification</h3>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, accusamus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PastorandDiaconates />
        <section className="our-stats text-center">
          <div className="container">
            <div className="row">
              <div className="flex-md-6 flex-lg-3 mar-b-sm">
                <div className="our-stats__box">
                  <div className="heading">
                    <div>1995</div>
                  </div>

                  <h3>Year built</h3>
                </div>
              </div>

              <div className="flex-md-6 flex-lg-3 mar-b-sm">
                <div className="our-stats__box">
                  <div className="heading">
                    <div>25,000</div>
                  </div>

                  <h3>Members</h3>
                </div>
              </div>

              <div className="flex-md-6 flex-lg-3">
                <div className="our-stats__box">
                  <div className="heading">
                    <div>$584K</div>
                  </div>

                  <h3>Given in scholarship</h3>
                </div>
              </div>

              <div className="flex-md-6 flex-lg-3">
                <div className="our-stats__box">
                  <div className="heading">
                    <div>56</div>
                  </div>

                  <h3>Ministries</h3>
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

export default About;
