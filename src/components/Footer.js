import React from 'react'
import logo from '../assets/images/logo-sm.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
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

        <div className="footer__info credit">Template designed and developed by Blazythemes</div>

      </div>

      <div className="flex-md-6 flex-lg-4">

        <div className="footer__info social">
          <span>Follow us on social medias</span>
          <div class="social__icons">
            <Link href=""><i class="ri-facebook-line"></i></Link>
            <Link href=""><i class="ri-twitter-line"></i></Link>
            <Link href=""><i class="ri-linkedin-line"></i></Link>
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
