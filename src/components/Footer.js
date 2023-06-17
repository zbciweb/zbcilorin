import React from 'react'
import logo from '../assets/images/church logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className="scroll-to-top"><i className="ri-arrow-up-line"></i></div>
      <footer className="footer">

<div className="container">

  <div className="footer__top display-flex justify-align-center">

    <div className="footer__logo">
      <div className="logo-wrapper">
        <img src={logo} alt="Small logo"/>
      </div>
    </div>

  </div>

  <div className="footer__bottom">

    <div className="row align-items-center">

      <div className="flex-md-6 flex-lg-4">

        <div className="footer__info copyright">&copy; 2020 - Greater Love Church - All Rights Reserved</div>

      </div>

      <div className="flex-md-6 flex-lg-4">

        <div className="footer__info credit">Zion Baptist Church Ilorin, Adewole</div>

      </div>

      <div className="flex-md-6 flex-lg-4">

        <div className="footer__info social">
          <span>Follow us on social medias</span>
          <div className="social__icons">
            <Link href=""><i className="ri-facebook-line"></i></Link>
            <Link href=""><i className="ri-twitter-line"></i></Link>
            <Link href=""><i className="ri-linkedin-line"></i></Link>
          </div>
        </div>

      </div>

    </div>

  </div>

</div>

</footer>
    </div>
  )
}

export default Footer
