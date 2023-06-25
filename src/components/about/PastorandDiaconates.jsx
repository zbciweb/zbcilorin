import React from "react";
import { Link } from "react-router-dom";
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
                        
                <div className="sidebar">
                  <div className="sidebar__widget">
                    <div className="share">
                    
                      <Link to={pastors[0].facebook} target="_blank" rel="noreferrer noopener" title={`Contact ${pastors[0].name} on Facebook `} >
                        <i className="ri-facebook-line"></i>
                      </Link>
                      <Link to={`tel:${pastors[0].phoneNumber}`} title={`Call ${pastors[1].name}  `}>
                        <i className="ri-phone-line"></i>
                      </Link>
                      <Link to={pastors[0].whatsapp} target="_blank" rel="noreferrer noopener" title={`Contact ${pastors[0].name} on WhatsApp `}>
                        <i className="ri-whatsapp-line"></i>
                      </Link>
                      <Link to={`mailto:${pastors[0].email}`} title={`Email ${pastors[1].name} `}>
                        <i className="ri-mail-line"></i>
                      </Link>
                    </div>
                  </div>
                  </div>
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Totam laborum, aperiam iste sit tempore consequuntur
                  voluptates quaerat animi molestias doloribus nobis numquam
                  amet inventore nihil autem praesentium libero laudantium.
                  Possimus, maiores, eius ipsum beatae numquam nemo cum
                  officiis.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Totam laborum, aperiam iste sit tempore consequuntur
                  voluptates quaerat animi molestias doloribus nobis numquam
                  amet inventore nihil autem praesentium libero laudantium.
                  Possimus, maiores, eius ipsum beatae numquam nemo cum
                  officiis, veniam quidem quibusdam impedit inventore rem.
                </p>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Totam laborum, aperiam iste sit tempore consequuntur
                  voluptates quaerat animi molestias doloribus nobis numquam
                  amet inventore nihil autem praesentium libero laudantium.
                  Possimus, maiores, eius ipsum beatae numquam nemo cum
                  officiis.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center mar-t-sm">
          
            <div className="flex-md-6 flex-lg-7">
              <div className="our-pastor__content">
                <div className="section-heading">
                  <span>Our {pastors[1].disposition}</span>
                  <h2>{pastors[1].name}</h2>
                </div>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Totam laborum, aperiam iste sit tempore consequuntur
                  voluptates quaerat animi molestias doloribus nobis numquam
                  amet inventore nihil autem praesentium libero laudantium.
                  Possimus, maiores, eius ipsum beatae numquam nemo cum
                  officiis.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Totam laborum, aperiam iste sit tempore consequuntur
                  voluptates quaerat animi molestias doloribus nobis numquam
                  amet inventore nihil autem praesentium libero laudantium.
                  Possimus, maiores, eius ipsum beatae numquam nemo cum
                  officiis, veniam quidem quibusdam impedit inventore rem.
                </p>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Totam laborum, aperiam iste sit tempore consequuntur
                  voluptates quaerat animi molestias doloribus nobis numquam
                  amet inventore nihil autem praesentium libero laudantium.
                  Possimus, maiores, eius ipsum beatae numquam nemo cum
                  officiis.
                </p>


                
              </div>
            </div>
            <div className="flex-md-6 flex-lg-5">
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
                  
                <div className="sidebar">
                  <div className="sidebar__widget">
                    <div className="share">
                    
                      <Link to={pastors[1].facebook} target="_blank" rel="noreferrer noopener" title={`Contact ${pastors[1].name} on Facebook `} >
                        <i className="ri-facebook-line"></i>
                      </Link>
                      <Link to={`tel:${pastors[1].phoneNumber}`} title={`Call ${pastors[1].name}  `}>
                        <i className="ri-phone-line"></i>
                      </Link>
                      <Link to={pastors[1].whatsapp} target="_blank" rel="noreferrer noopener" title={`Contact ${pastors[1].name} on WhatsApp `}>
                        <i className="ri-whatsapp-line"></i>
                      </Link>
                      <Link to={`mailto:${pastors[1].email}`} title={`Email ${pastors[1].name} `}>
                        <i className="ri-mail-line"></i>
                      </Link>
                    </div>
                  </div>
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

          <div className="row">
            {diaconates.map((d, i) => (
              <div className="flex-md-6 flex-lg-4 mar-b-sm" key={i}>
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
