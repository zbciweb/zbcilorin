import React, { useState } from 'react'
import LogoLight from '../assets/images/church logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
 
  const [show, setShow] = useState(false)
  const [color, setColor] = useState(false);

  const handleShow = () => {
    setShow(!show)
  }

   const changeBackground = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  }
window.addEventListener('scroll', changeBackground);

  return (
    <div>
    <header className={color ? "header fixed transparent dark-text white-bg" : "header transparent fixed light-text" } 
    // data-onscroll-classes="dark-text white-bg"
   data-onscroll-logo={LogoLight}>

   <div className="container">

     <nav className="header__nav bottom-nav">

       <div className="header__logo brand--logo">
            <Link to={'/'}><img src={LogoLight} style={{ width:'50px'}} alt="Greater Love Church" /></Link>
          </div>

          <div onClick={handleShow} className="header__mobile--opener hide-on-lg">
            { show ? (<button className="header__mobile--icon" aria-expanded="true" aria-controls="mobile-menu"
              data-toggle="mobile-menu"
              >

              </button>) : (<button className="header__mobile--icon" aria-expanded="false" aria-controls="mobile-menu"
              data-toggle="mobile-menu"
              >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>) 
            
            }
          </div>
          
          

          <ul className={ show ? "show-on-lg header__navitems active": "show-on-lg header__navitems"} 
          id="mobile-menu"
          >

          
            <li className="header__extra">
              <div className="cta">
                <Link to={'/donations'} className="button button-block-sm">Donate</Link>
              </div>
            </li>

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
              <Link className="dropdown-link">Ministries</Link>

              <div className="header__submenu">
                <ul>

                  <li className="header__list"><Link to={'/ministries'}>Ministries</Link></li>
                  <li className="header__list"><Link to={'/ministries/ministries-singles'}>Ministries single</Link></li>

                </ul>
              </div>
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
