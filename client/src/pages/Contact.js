import React from "react";
import TimeLocation from "../components/TimeLocation";
import { Link } from "react-router-dom";
import ContactForm from "../components/forms/contactForm";
 
const Contact = () => {
  return (
    <>
      <main>
        <section className="banner full-width">
          <div className="container">
            <div className="banner__content">
              <div className="banner__heading">
                <h1>Contact</h1>
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
                <div className="breadcrumb__current--page-link">Contact</div>
              </div>
            </div>
          </div>
        </section>

        <TimeLocation />

        <section className="contact default-section-spacing">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="flex-md-8">
            <ContactForm/>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
