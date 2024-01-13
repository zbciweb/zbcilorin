import React, { useState } from 'react'
import LogoLight from '../assets/images/church logo.png'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [show, setShow] = useState(false)

  const updateMenu = () => {
    if (!show) {
      setBurgerClass('burger-bar clicked')
    } else {
      setBurgerClass("burger-bar unclicked")
    }
    setShow(!show)
  }

  return (
    <div>
      <header className={"header transparent fixed light-text"}
        data-onscroll-logo={LogoLight}>

        <div className="container">

          <nav className="header__nav bottom-nav">
            <div className="row align-items-center">
              <div className="col-auto">
                <div className="header__logo brand--logo">
                  <Link to={'/'}>
                    <img src={LogoLight} style={{ width: '50px' }} alt="Zion Baptist Church" />
                  </Link>
                </div>
              </div>
              <div className="col ml-5">
                <p style={{ color: "#fff" }}>Zion Baptist<br /> Church Ilorin</p>
              </div>
            </div>


            <div className="header__mobile--opener hide-on-lg">
              
              <button className='burger-menu' onClick={updateMenu}>
              <span className={burger_class}></span>
              <span className={burger_class}></span>
              <span className={burger_class}></span>
              </button>
            </div>



            <ul className={show ? "show-on-lg header__navitems active" : "show-on-lg header__navitems"}
              id="mobile-menu"
            >



              <li className="header__list active"><Link to={'/'}>Home</Link></li>


              <li className="header__list"><Link to={'/about'}>About</Link></li>

              {/* <li className="header__list">
              <Link className="dropdown-link">Sermons</Link>

              <div className="header__submenu">
                <ul>
                  <li className="header__list"><Link to={'/sermons'} >Sermons</Link></li>

                  <li className="header__list"><Link to={'/sermons'} >Sermons</Link></li> 

                </ul>

              </div>
            </li> */}

              <li className="header__list">
                <Link to={'/ministries'} className="dropdown-link">Ministries</Link>

                {/* <div className="header__submenu">
                <ul>

                  <li className="header__list"><Link to={'/ministries'}>Ministries</Link></li>
                  <li className="header__list"><Link to={'/ministries/ministries-singles'}>Ministries single</Link></li>

                </ul>
              </div> */}
              </li>

              {/* <li className="header__list">
              <Link className="dropdown-link">Events</Link>

              <div className="header__submenu">
                <ul>

                  <li className="header__list"><Link to={'/events'}>Events</Link></li>
                  <li className="header__list"><Link to={'/events/events-single'}>Events single</Link></li>

                </ul>
              </div>
            </li> */}

              {/* <li className="header__list">
              <Link href="" className="dropdown-link">Pages</Link>

              <div className="header__submenu">
                <ul>

                  <li className="header__list"><Link to={'/donations'}>Donations</Link></li>
                  <li className="header__list"><Link to={'/staffs-single'}>Staffs single</Link></li>
                  {<li className="header__list"><Link to={'/elements'}>Elements</Link></li>}

                </ul>
              </div>
            </li> */}

              {/* <li className="header__list">
              <Link href="" className="dropdown-link">Blog</Link>

              <div className="header__submenu">
                <ul>

                  <li className="header__list"><Link to={'/blog'}>Blog list</Link></li>
                  <li className="header__list"><Link to={'/blog/blog-single'}>Blog single</Link></li>

                </ul>
              </div>
            </li> */}

              <li className="header__list"><Link to={'/contact'}>Contact</Link></li>


            </ul>

            {/*  <div className="header__extra desktop-version">
              <div className="cta hide-on-sm show-on-lg">
                <Link to={'/donations'} className="button">Donate</Link>
              </div>
            </div> */}
          </nav>

        </div>

      </header>
    </div>
  )
}

export default Nav
