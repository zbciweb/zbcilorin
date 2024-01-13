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
                    ZION BAPTIST CHURCH, ADEWOLE HOUSING ESTATE, ILORIN Exists
                    for HARVESTING OF SOULS aggressively into God’s kingdom
                    MOULDING LIVES to conform to the image of Christ DEVELOPING
                    A SENSE of love and care among brethren DEMONSTRATING GOD’S
                    LOVE through service to believers and the lost CELEBRATING
                    GOD’S PRESENCE through spirit filled worship experience
                  </p>
                </div>

                <div className="flex-lg-6">
                  <div className="section-heading text-white">
                    <span>Visions</span>
                    <h2>Our vision</h2>
                  </div>

                  <p>
                    Knowing Christ and making Him Known all over the world
                    -Phil. 3:10; Hab.2:14
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our-belief default-section-spacing text-center">
          <div className="container">
            <div className="section-heading">
              <span>OUR GOALS</span>
              <h2>
                To Worship, to Fellowship, to Disciple, to Evangelized and
                stewardship
              </h2>
            </div>

            <div className="row">
              <div className="flex-md-6 flex-lg-4 mar-b-sm">
                <div className="our-belief__box">
                  <div className="heading">
                    <h3>GOD’S word to the LOST</h3>
                  </div>

                  <p >
                    All have sinned-Rm.3:23 Consequence of sin is sure – Rm.6:23<br/>
                    You cannot save yourself –Eph.2:8-9 <br/>God’s Salvation is also
                    for you – Jn. 3:16 <br/>Come as you are – Isa. 1:18 <br/> Confess Him
                    as your savior and Lord – Rm- Rm. 10:9 <br/>Follow Jesus in
                    Baptism – Col.2:13; Rev 6:9 <br/>Worship with His people – Heb.
                    10:25
                  </p>
                </div>
              </div>

              <div className="flex-md-6 flex-lg-4 mar-b-sm">
                <div className="our-belief__box">
                  <div className="heading">
                    <h3>GOD’S Word for the SAVED</h3>
                  </div>

                  <p>
                    Jesus paid the full penalty for you – 1 Pet. 2:24 <br/> His
                    righteousness is now placed to your credit – 1 Cor. 1:30 <br/>
                    Contribute as God prospers you – Mal.3:8, 1 Cor. 8:7 <br/>Pray
                    and Study the Bible daily – 2 Tim. 2:15; 3:16 <br/> Confess to God
                    every sin – Jn. 1:9 <br/> Practice the presence of Christ –
                    Heb.13:5
                  </p>
                </div>
              </div>

              <div className="flex-md-6 flex-lg-4">
                <div className="our-belief__box">
                  <div className="heading">
                    <h3>OUR CORE VALUE</h3>
                  </div>

                  <p>
                    Soul Competency Priesthood of all Believers Congregational
                    Polity Unity in Diversity Responsible autonomy of a local
                    Baptist Church Christian Virtues Righteousness The Great
                    Commission Development of Human Resources
                  </p>
                </div>
              </div>

              {/* <div className="flex-md-6 flex-lg-3">
                <div className="our-belief__box">
                  <div className="heading">
                    <h3>Sanctification</h3>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, accusamus.
                  </p>
                </div>
              </div> */}
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
