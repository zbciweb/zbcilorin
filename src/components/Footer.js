import React from "react";
import logo from "../assets/images/mixlr-logo-9336.svg";
import { Link } from "react-router-dom";


const Footer = () => {

  return (
    <div>
      <div className="scroll-to-top">
        <i className="ri-arrow-up-line"></i>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="footer__top display-flex justify-align-center">
            <div className="footer__logo">
              <div className="logo-wrapper">
              
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="row align-items-center">
              <div className="flex-md-6 flex-lg-5">
                <div className="footer__info copyright">
                  &copy; {new Date().getFullYear()} - Zion Baptist Church, Adewole, Ilorin - All Rights Reserved
                </div>
                <div className="footer__info copyright">
                  Designed by Public Relations Unit, ZBCI MEDIA
                </div>
              </div>

              <div className="flex-md-6 flex-lg-2">
                <div className="footer__info credit">
                
                </div>
              </div>

              <div className="flex-md-8 flex-lg-5">
                <div className="footer__info social">
                  <span>Follow us on all our social media platforms</span>
                  <div className="social__icons">
                  <a href="web.facebook.com/zbcipage" target="_blank" rel="noopener noreferrer">
                      <i className="ri-facebook-line"></i>        
                    </a>
                    <Link to="/about">
                      <img className="" src={logo} alt="" />
                    </Link>
                    <Link to="/about">
                      <i className="ri-youtube-line" ></i>
                    </Link>
                    <Link to='/'>
                      <i className="ri-instagram-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
