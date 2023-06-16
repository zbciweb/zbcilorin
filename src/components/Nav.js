import React from 'react'
import LogoLight from '../assets/images/logo-light.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
       <header className="header transparent fixed light-text" data-onscroll-classes="dark-text white-bg"
      data-onscroll-logo="images/logo-dark.png">

      <div className="container">

        <nav className="header__nav bottom-nav">

          <div className="header__logo brand--logo">
            <Link to={'/'}><img src={LogoLight} alt="Greater Love Church" /></Link>
          </div>

          <div className="header__mobile--opener hide-on-lg">
            <button className="header__mobile--icon" aria-expanded="false" aria-controls="mobile-menu"
              data-toggle="mobile-menu">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
          </div>

          <ul className="header__navitems show-on-lg" id="mobile-menu">

          
            <li className="header__extra">
              <div className="cta">
                <a href="donations.html" className="button button-block-sm">Donate</a>
              </div>
            </li>

            <li className="header__list active"><Link to={'/'}>Home</Link></li>
            

            <li className="header__list"><Link to={'/about'}>About</Link></li>

            <li className="header__list">
              <Link className="dropdown-link">Sermons</Link>

              <div className="header__submenu">
                <ul>

                  <li className="header__list"><Link to={'/sermons'} >Sermons</Link></li>
                  <li className="header__list"><Link to={'/sermons/sermons-single'} >Sermons single</Link></li>

                </ul>

              </div>
            </li>

            <li className="header__list">
              <Link className="dropdown-link">Ministries</Link>

              <div className="header__submenu">
                <ul>

                  <li className="header__list"><Link to={'/ministries'}>Ministries</Link></li>
                  <li className="header__list"><Link to={'/ministries/ministries-singles'}>Ministries single</Link></li>

                </ul>
              </div>
            </li>

            <li className="header__list">
              <Link className="dropdown-link">Events</Link>

              <div className="header__submenu">
                <ul>

                  <li className="header__list"><Link to={'/events'}>Events</Link></li>
                  <li className="header__list"><Link to={'/events/events-single'}>Events single</Link></li>

                </ul>
              </div>
            </li>

            <li className="header__list">
              <Link href="" className="dropdown-link">Pages</Link>

              <div className="header__submenu">
                <ul>

                  <li className="header__list"><Link to={'/donations'}>Donations</Link></li>
                  <li className="header__list"><Link to={'/staffs-single'}>Staffs single</Link></li>
                  <li className="header__list"><Link to={'/elements'}>Elements</Link></li>

                </ul>
              </div>
            </li>

            <li className="header__list">
              <Link href="" className="dropdown-link">Blog</Link>

              <div className="header__submenu">
                <ul>

                  <li className="header__list"><Link to={'/blog'}>Blog list</Link></li>
                  <li className="header__list"><Link to={'/blog/blog-single'}>Blog single</Link></li>

                </ul>
              </div>
            </li>

            <li className="header__list"><Link to={'/contact'}>Contact</Link></li>
            

          </ul>

          <div className="header__extra desktop-version">
            <div className="cta hide-on-sm show-on-lg">
              <Link to={'/donations'} className="button">Donate</Link>
            </div>
          </div>
        </nav>

      </div>

    </header>
    </div>
  )
}

export default Nav
