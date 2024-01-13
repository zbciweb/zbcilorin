import React from "react";
// import { Link } from "react-router-dom";
import { diaconates, pastors } from "../../utils/pastors&diaconates";
function PastorandDiaconates() {
  return (
    <>
      <section className="our-pastor default-section-spacing">
        <div className="section-heading text-center">
          <span>Church Leaders</span>
          <h2>The Pastors</h2>
        </div>
        <div className="container">
          <div className="row align-items-center mar-b-sm">
            <div className="flex-md-6 flex-lg-5">
              <div className="card card--picture staff">
                <div className="card__header">
                  <img
                    src={pastors[0].image}
                    alt={pastors[0].name}
                    className="card__image"
                  />
                </div>

                <div className="card__footer">
                  <div className="staff__name text-center">
                    <h3>{pastors[0].name}</h3>
                    <div className="staff__title">{pastors[0].disposition}</div>
                  </div>

                  {/* <div className="sidebar">
                    <div className="sidebar__widget">
                      <div className="share">
                        <Link
                          to={pastors[0].facebook}
                          target="_blank"
                          rel="noreferrer noopener"
                          title={`Contact ${pastors[0].name} on Facebook `}
                        >
                          <i className="ri-facebook-line"></i>
                        </Link>
                        <Link
                          to={`tel:${pastors[0].phoneNumber}`}
                          title={`Call ${pastors[0].name}  `}
                        >
                          <i className="ri-phone-line"></i>
                        </Link>
                        <Link
                          to={pastors[0].whatsapp}
                          target="_blank"
                          rel="noreferrer noopener"
                          title={`Contact ${pastors[0].name} on WhatsApp `}
                        >
                          <i className="ri-whatsapp-line"></i>
                        </Link>
                        <Link
                          to={`mailto:${pastors[0].email}`}
                          title={`Email ${pastors[0].name} `}
                        >
                          <i className="ri-mail-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="flex-md-6 flex-lg-7">
              <div className="section-heading">
                <span>Our {pastors[0].disposition}</span>
                <h2>{pastors[0].name}</h2>
              </div>

              <div className="our-pastor__content">
                <p>
                  Festus Olu Ade ALADE was born into a levite family of late
                  Pastor & late Mrs Solomon Alice Alade. he is a native of Saki
                  in Oyo State, He has Diploma in Religious Studies, Diploma in
                  Theology, Bachelor in Theology, Master of Arts in Christian
                  Education, Doctor of Ministry in Church Administration and
                  Doctor of Philosophy in Human Resource management.
                </p>
                <p>
                  He is a Preacher, Teacher, Writer, Praise Leader, drama
                  Minster, children Minster, Fast in ICT, a Printer and
                  Publisher. He has pastor in the following Churches, First
                  Baptist Church, Koso Iseyin for his supervisory ministry as
                  children and music minister, FBC, Otu as a children and music
                  minister, and became the substantive pastor of the church
                  after his senior pastor retired, lead Pastor FBC, New Bussa.
                  Niger State and currently the lead Pastor Zion Baptist Church,
                  Adewole Estate, Ilorin
                </p>

                <p>
                  He is married to Chap. Julianah Omotayo Omotanbaje Alade (nee
                  Bamimore) and the marriage is blessed with divine children and
                  grand Children. Glory to God.
                </p>
              </div>
            </div>
          </div>
          <div className=" mar-t-sm">
            <div className="section-heading text-center">
              <span>Other Pastors</span>
            </div>
          </div>
          <div className="row align-items-center mar-t-sm">
            <div className="flex-md-6 flex-lg-4">
              <div className="card card--picture staff">
                <div className="card__header">
                  <img
                    src={pastors[1].image}
                    alt={pastors[1].name}
                    className="card__image"
                  />
                </div>

                <div className="card__footer">
                  <div className="staff__name text-center">
                    <h3>{pastors[1].name}</h3>
                    <div className="staff__title">{pastors[1].disposition}</div>
                  </div>

                  {/* <div className="sidebar">
                    <div className="sidebar__widget">
                      <div className="share">
                        <Link
                          to={pastors[1].facebook}
                          target="_blank"
                          rel="noreferrer noopener"
                          title={`Contact ${pastors[1].name} on Facebook `}
                        >
                          <i className="ri-facebook-line"></i>
                        </Link>
                        <Link
                          to={`tel:${pastors[1].phoneNumber}`}
                          title={`Call ${pastors[1].name}  `}
                        >
                          <i className="ri-phone-line"></i>
                        </Link>
                        <Link
                          to={pastors[1].whatsapp}
                          target="_blank"
                          rel="noreferrer noopener"
                          title={`Contact ${pastors[1].name} on WhatsApp `}
                        >
                          <i className="ri-whatsapp-line"></i>
                        </Link>
                        <Link
                          to={`mailto:${pastors[1].email}`}
                          title={`Email ${pastors[1].name} `}
                        >
                          <i className="ri-mail-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="flex-md-6 flex-lg-4">
              <div className="card card--picture staff">
                <div className="card__header">
                  <img
                    src={pastors[2].image}
                    alt={pastors[2].name}
                    className="card__image"
                  />
                </div>

                <div className="card__footer">
                  <div className="staff__name text-center">
                    <h3>{pastors[2].name}</h3>
                    <div className="staff__title">{pastors[2].disposition}</div>
                  </div>

              
                </div>
              </div>
            </div>
            <div className="flex-md-6 flex-lg-4">
              <div className="card card--picture staff">
                <div className="card__header">
                  <img
                    src={pastors[3].image}
                    alt={pastors[3].name}
                    className="card__image"
                  />
                </div>

                <div className="card__footer">
                  <div className="staff__name text-center">
                    <h3>{pastors[3].name}</h3>
                    <div className="staff__title">{pastors[3].disposition}</div>
                  </div>

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-staffs default-section-spacing text-center background-lighter-gray">
        <div className="container">
          <div className="section-heading text-center">
            <span>Church Leaders</span>
            <h2>THE DIACONATES</h2>
          </div>

          <div className="row d-flex">
            {diaconates.map((d, i) => (
              <div className="flex-md-6 flex-lg-4 mar-b-sm align-items-center" key={i}>
                <div className="card card--picture staff">
                  <div className="card__header">
                    <img src={d.image} alt="A man" className="card__image" />
                  </div>

                  <div className="card__footer">
                    <div className="staff__name">
                      <h3>{d.name}</h3>
                    </div>
                    <div className="staff__title">{d.disposition}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default PastorandDiaconates;
