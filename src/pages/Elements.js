import React from 'react' 
import logo from '../assets/images/logo-dark.png'
import sermon3 from '../assets/images/sermon-3@1.5x.jpg'
import ministry4 from '../assets/images/ministry-4@1.5x.jpg'
import event1 from '../assets/images/event-1@1.5x.jpg'
import post2 from '../assets/images/post-2@1.5x.jpg'
import staff1 from '../assets/images/staff-1@1.5x.jpg'
import gallery1 from '../assets/images/gallery-1@1.5x.jpg'
import { Link } from 'react-router-dom'

const Elements = () => {
  return (
    <div>
    
      <main>
      <section className="banner full-width">

        <div className="container">

          <div className="banner__content">

            <div className="banner__heading">
              <h1>Elements</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugit</p>
            </div>

            <div className="breadcrumb">
              <div className="breadcrumb__home--link"><a href="index.html">Home</a></div>
              <span></span>
              <div className="breadcrumb__current--page-link">Elements</div>
            </div>

          </div>

        </div>

      </section>

      <section id="buttons" className="elements default-section-spacing">
        <div className="container">

          <h2>Buttons</h2>

          <div className="mar-b-sm">
            <Link href="" className="button">Default button</Link>
          </div>

          <div className="mar-b-sm">
            <Link href="" className="button button--link">Button link <i className="ri-arrow-right-line"></i></Link>
          </div>

          <div>
            <Link href="" className="button button-block-sm">Button block</Link>
          </div>

        </div>
      </section>
      

      <section id="navigations" className="elements">

        <div className="container">
          <h2>Navigations</h2>
        </div>

        <div className="mar-b-sm">

          <div className="container">
            <h3>Navbar</h3>
          </div>

          <header className="header dark-text white-bg">

            <div className="container">

              <nav className="header__nav bottom-nav">

                <div className="header__logo brand--logo">
                  <Link href=""><img src={logo} alt="Greater Love Church"/></Link>
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

                  <div className="header__extra">
                    <div className="cta">
                      <Link href="" className="button button-block-sm">Button</Link>
                    </div>
                  </div>

                  <li className="header__list active"><Link href="">Link</Link></li>

                  <li className="header__list">
                    <Link href="" className="dropdown-link">Dropdown link</Link>

                    <div className="header__submenu">
                      <ul>

                        <li className="header__list"><Link href="">Dropdown link</Link></li>
                        <li className="header__list"><Link href="">Dropdown link</Link></li>

                      </ul>

                    </div>
                  </li>
                  <li className="header__list">
                    <Link href="" className="dropdown-link">Another dropdown</Link>

                    <div className="header__submenu">
                      <ul>

                        <li className="header__list"><Link href="">Dropdown link</Link></li>

                        <li className="header__list">
                          <Link href="" className="dropdown-link">Dropdown with dropdown</Link>

                          <div className="header__submenu">
                            <ul>
                              <li className="header__list"><Link href="">Extra dropdown</Link></li>
                              <li className="header__list"><Link href="">Extra dropdown</Link></li>
                            </ul>
                          </div>

                        </li>

                      </ul>
                    </div>
                  </li>

                  <li className="header__list"><Link href="">Link</Link></li>

                  <li className="header__list"><Link href="">Link</Link></li>

                </ul>

                <div className="header__extra desktop-version">
                  <div className="shopping-cart">

                    <div className="bag">
                      <Link href=""><i className="ri-shopping-bag-line"></i>
                        <span className="full"></span></Link>
                    </div>

                  </div>

                  <div className="cta hide-on-sm show-on-lg">
                    <Link href="" className="button">Button</Link>
                  </div>
                </div>

              </nav>

            </div>

          </header>

        </div>

        <div className="container">

          <div className="mar-b-sm">
            <h3>Pagination</h3>

            <div className="pagination">

              <span className="pagination__arrow"><Link href=""><i className="ri-arrow-left-s-line"></i></Link></span>
              <span className="pagination__number"><Link href="">1</Link></span>
              <span className="pagination__number active"><Link href="">2</Link></span>
              <span className="pagination__number"><Link href="">3</Link></span>
              <span className="pagination__arrow"><Link href=""><i className="ri-arrow-right-s-line"></i></Link></span>

            </div>

          </div>

          <div className="mar-b-sm">
            <h3>Breadcrumbs</h3>

            <div className="breadcrumb">
              <div className="breadcrumb__home--link"><Link href="">Home</Link></div>
              <span></span>
              <div className="breadcrumb__current--page-link">Elements</div>
            </div>

            <div className="mar-b-sm mar-t-sm"></div>

            <div className="breadcrumb">
              <div className="breadcrumb__home--link"><Link href="">Home</Link></div>
              <span></span>
              <div><Link href="">Pages</Link></div>
              <span></span>
              <div className="breadcrumb__current--page-link">Elements</div>
            </div>

          </div>

        </div>

      </section>
      

      <section id="cards" className="elements default-section-spacing">

        <div className="container">
          <h2>Cards</h2>

          <div className="row">

            <div className="flex-md-6 flex-lg-4 mar-b-sm">

              <h3>Sermon card</h3>

              <div className="card sermon">

                <div className="card__header">
                  <img src={sermon3} alt="" className="card__image sermon__image"/>
                </div>

                <div className="card__footer">

                  <div className="sermon__metas">
                    <div className="sermon__meta--date meta"><i className="ri-calendar-event-line"></i>
                      <span>02/28/2020</span>
                    </div>
                    <div className="sermon__meta--speaker meta"><i className="ri-user-star-line"></i> <span>Pastor Erik B.
                        Hogan</span>
                    </div>
                  </div>

                  <div className="sermon__content">
                    <div className="title">
                      <h3>Jesus is the Hope and Future</h3>
                    </div>

                    <div className="excerpt">
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam laborum, aperiam iste sit
                        tempore
                        consequuntur voluptates quaerat animi molestias doloribus nobis numquam amet inventore nihil
                        autem
                        praesentium libero laudantium...</p>
                    </div>
                  </div>

                  <div className="sermon__link">
                    <Link href="" className="button">Read more</Link>
                  </div>

                  <div className="sermon__download">
                    <span className="text-white">Download</span>
                    <Link href=""><i className="ri-video-line"></i></Link>
                    <Link href=""><i className="ri-headphone-line"></i></Link>
                    <Link href=""><i className="ri-file-pdf-line"></i></Link>
                  </div>
                </div>

              </div>

            </div>

            <div className="flex-md-6 flex-lg-4 mar-b-sm">

              <h3>Ministry card</h3>

              <div className="card ministry">

                <div className="card__header">
                  <img src={ministry4} alt="Church event" className="card__image ministry__image"/>
                </div>

                <div className="card__footer">

                  <div className="ministry__title">
                    <h3>Homeless outreach ministry</h3>
                  </div>

                  <div className="ministry__meta"><i className="ri-group-line"></i> <span>14 Members</span></div>

                  <div className="ministry__content">
                    <div className="excerpt">
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint culpa totam laborum.</p>
                    </div>
                    <div className="ministry__link"><Link href="" className="button">Learn more</Link></div>
                  </div>

                </div>

              </div>

            </div>

            <div className="flex-md-6 flex-lg-4 mar-b-sm">

              <h3>Event card</h3>

              <div className="card card--event event">

                <div className="card__header">
                  <img src={event1} alt="" className="card__image"/>
                </div>

                <div className="card__footer">

                  <div className="event__metas vertical">
                    <div className="event__meta--date meta"><i className="ri-calendar-event-line"></i> <span>02/28/2020</span>
                    </div>
                    <div className="event__meta--time meta"><i className="ri-time-line"></i> <span>11:45 AM - 12:45 PM</span>
                    </div>
                    <div className="event__meta--location meta"><i className="ri-map-pin-line"></i> <span>123 Jay St, Albany,
                        NY
                        12203</span></div>
                  </div>

                  <div className="event__title">
                    <h2>Scholarship fundraiser @GLC</h2>
                  </div>

                  <div className="event__link"><Link href="" className="button">Learn more</Link></div>

                </div>

              </div>

            </div>

            <div className="flex-md-6 flex-lg-4">

              <h3>Blog card</h3>

              <div className="card blog">

                <div className="card__header">
                  <img src={post2} alt="Women praying" className="card__image blog__image"/>
                </div>

                <div className="card__footer">

                  <div className="blog__metas">
                    <div className="blog__meta--date meta"><i className="ri-calendar-event-line"></i> <span>02/28/2020</span>
                    </div>
                    <div className="blog__meta--speaker meta"><i className="ri-user-star-line"></i> <span>Pastor Erik B.
                        Hogan</span>
                    </div>
                  </div>

                  <div className="blog__title">
                    <h3>Giving God all the praises and glory</h3>
                  </div>

                  <div className="blog__content">
                    <div className="excerpt">
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis excepturi sunt doloribus
                        consequuntur eveniet nostrum dicta, voluptate enim rem voluptatem.</p>
                    </div>
                    <div className="blog__link"><Link href="" className="button">Read more</Link></div>
                  </div>

                </div>

              </div>
            </div>

            <div className="flex-md-6 flex-lg-4">

              <h3>Picture / staff card</h3>

              <div className="card card--picture staff">

                <div className="card__header">
                  <img src={staff1} alt="A man" className="card__image"/>
                </div>

                <div className="card__footer">

                  <div className="staff__name">
                    <h3>Walter L. Brown</h3>
                  </div>
                  <div className="staff__title">Assistant pastor</div>
                  <div className="staff__link"><Link href="" className="button">Learn more</Link></div>

                </div>

              </div>

            </div>

            <div className="flex-md-6 flex-lg-4">

              <h3>Gallery card</h3>

              <div className="card gallery__card">

                <div className="card__header">
                  <img src={gallery1} alt="Holy Bible" className="card__image"/>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
     

    
      <section id="grid" className="elements pad-b-sm">

        <div className="container">
          <h2>Grids</h2>

          <div className="row mar-b-sm">

            <div className="flex-lg-1">
              <h3>1/12</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex-lg-1">
              <h3>1/12</h3>
              <p>Provident quasi eos aliquam aspernatur!</p>
            </div>
            <div className="flex-lg-1">
              <h3>1/12</h3>
              <p>Voluptas, ab iusto? Distinctio, perspiciatis?</p>
            </div>
            <div className="flex-lg-1">
              <h3>1/12</h3>
              <p>Nemo harum illo recusandae beatae.</p>
            </div>
            <div className="flex-lg-1">
              <h3>1/12</h3>
              <p>Quo quidem eos nobis ullam!</p>
            </div>
            <div className="flex-lg-1">
              <h3>1/12</h3>
              <p>Dolorum tenetur totam modi ullam.</p>
            </div>
            <div className="flex-lg-1">
              <h3>1/12</h3>
              <p>Exercitationem rerum odio dolorum itaque!</p>
            </div>
            <div className="flex-lg-1">
              <h3>1/12</h3>
              <p>Dignissimos aspernatur quod suscipit eaque?</p>
            </div>
            <div className="flex-lg-1">
              <h3>1/12</h3>
              <p>Similique placeat incidunt deserunt! Ipsa.</p>
            </div>
            <div className="flex-lg-1">
              <h3>1/12</h3>
              <p>Libero illo assumenda corrupti ipsa!</p>
            </div>
            <div className="flex-lg-1">
              <h3>1/12</h3>
              <p>Sapiente, laborum? Magni, iusto amet.</p>
            </div>
            <div className="flex-lg-1">
              <h3>1/12</h3>
              <p>Excepturi fugiat quidem molestiae similique.</p>
            </div>

          </div>

          <div className="row mar-b-sm">

            <div className="flex-lg-2">
              <h3>2/12</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="flex-lg-2">
              <h3>2/12</h3>
              <p>Possimus perferendis et illum, error ad alias quidem.</p>
            </div>
            <div className="flex-lg-2">
              <h3>2/12</h3>
              <p>Consequuntur debitis, sapiente ad impedit officiis laboriosam! Suscipit.</p>
            </div>
            <div className="flex-lg-2">
              <h3>2/12</h3>
              <p>Qui, facere voluptatibus sint aut rem consequuntur! Expedita.</p>
            </div>
            <div className="flex-lg-2">
              <h3>2/12</h3>
              <p>Reiciendis unde excepturi iusto nemo, eos soluta maxime.</p>
            </div>
            <div className="flex-lg-2">
              <h3>2/12</h3>
              <p>Inventore fuga praesentium, velit corrupti consequatur facere impedit?</p>
            </div>

          </div>

          <div className="row mar-b-sm">

            <div className="flex-lg-3">
              <h3>3/12</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, ut.</p>
            </div>
            <div className="flex-lg-3">
              <h3>3/12</h3>
              <p>Sit officiis commodi exercitationem modi nobis eveniet consequuntur rerum voluptatibus!</p>
            </div>
            <div className="flex-lg-3">
              <h3>3/12</h3>
              <p>Officia voluptatibus unde possimus eos nemo autem, fugit similique quis.</p>
            </div>
            <div className="flex-lg-3">
              <h3>3/12</h3>
              <p>Possimus saepe hic voluptatibus provident! Id nisi error quo. Officia.</p>
            </div>

          </div>

          <div className="row mar-b-sm">

            <div className="flex-lg-4">
              <h3>4/12</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, ut.</p>
            </div>
            <div className="flex-lg-4">
              <h3>4/12</h3>
              <p>Sit officiis commodi exercitationem modi nobis eveniet consequuntur rerum voluptatibus!</p>
            </div>
            <div className="flex-lg-4">
              <h3>4/12</h3>
              <p>Officia voluptatibus unde possimus eos nemo autem, fugit similique quis.</p>
            </div>

          </div>

          <div className="row mar-b-sm">

            <div className="flex-lg-5">
              <h3>5/12</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis amet accusamus maiores, aliquam
                dolor quaerat.</p>
            </div>
            <div className="flex-lg-7">
              <h3>7/12</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui repellat neque nobis. Facere, odit
                eveniet.</p>
            </div>

          </div>

          <div className="row mar-b-sm">

            <div className="flex-lg-6">
              <h3>6/12</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis amet accusamus maiores, aliquam
                dolor quaerat.</p>
            </div>
            <div className="flex-lg-6">
              <h3>6/12</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui repellat neque nobis. Facere, odit
                eveniet.</p>
            </div>

          </div>

          <div className="row mar-b-sm">

            <div className="flex-lg-7">
              <h3>7/12</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui repellat neque nobis. Facere, odit
                eveniet.</p>
            </div>

            <div className="flex-lg-5">
              <h3>5/12</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis amet accusamus maiores, aliquam
                dolor quaerat.</p>
            </div>

          </div>

          <div className="row mar-b-sm">

            <div className="flex-lg-8">
              <h3>8/12</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui repellat neque nobis. Facere, odit
                eveniet.</p>
            </div>

            <div className="flex-lg-4">
              <h3>4/12</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis amet accusamus maiores, aliquam
                dolor quaerat.</p>
            </div>

          </div>

          <div className="row mar-b-sm">

            <div className="flex-lg-9">
              <h3>9/12</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui repellat neque nobis. Facere, odit
                eveniet.</p>
            </div>

            <div className="flex-lg-3">
              <h3>3/12</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis amet accusamus maiores, aliquam
                dolor quaerat.</p>
            </div>

          </div>

          <div className="row mar-b-sm">

            <div className="flex-lg-10">
              <h3>10/12</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui repellat neque nobis. Facere, odit
                eveniet.</p>
            </div>

            <div className="flex-lg-2">
              <h3>2/12</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis amet accusamus maiores, aliquam
                dolor quaerat.</p>
            </div>

          </div>

          <div className="row mar-b-sm">

            <div className="flex-lg-11">
              <h3>11/12</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui repellat neque nobis. Facere, odit
                eveniet.</p>
            </div>

            <div className="flex-lg-1">
              <h3>1/12</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis amet accusamus maiores</p>
            </div>

          </div>

          <div className="row">

            <div className="flex-lg-11">
              <h3>12/12</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui repellat neque nobis. Facere, odit
                eveniet.</p>
            </div>

          </div>

        </div>

      </section>

    </main>
   
    </div>
  )
}

export default Elements
