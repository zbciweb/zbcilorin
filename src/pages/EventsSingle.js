import React from 'react' 
import TimeLocation from '../components/TimeLocation'
import single from '../assets/images/single.jpg'
import sermon1 from '../assets/images/sermon-1@1.5x.jpg'
import event1 from '../assets/images/event-1@1.5x.jpg'
import { Link } from 'react-router-dom'

const EventsSingle = () => {
  return (
    <div>
   
      <main>
      <section className="banner full-width">

        <div className="container">

          <div className="banner__content">

            <div className="banner__heading">
              <h1>Events</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugit</p>
            </div>

            <div className="breadcrumb">
              <div className="breadcrumb__home--link"><a href="index.html">Home</a></div>
              <span></span>
              <div><a href="events.html">Events</a></div>
              <span></span>
              <div className="breadcrumb__current--page-link">Night prayer revival service @GLC</div>
            </div>

          </div>

        </div>

      </section>

      <div className="single events-single default-section-spacing">

        <div className="container">

          <div className="row">

            <div className="flex-lg-8">

              <div className="single__content">

                <div className="card single__featured--image no-padding">
                  <img src={single} alt="A man praying" className="card__image"/>
                </div>

                <div className="single__metas events-single__metas">

                  <div className="row align-items-center">

                    <div className="flex-sm-12">

                      <div className="event__metas vertical">
                        <div className="event__meta--date meta"><i className="ri-calendar-event-line"></i>
                          <span>05/28/2020</span>
                        </div>
                        <div className="event__meta--time meta"><i className="ri-time-line"></i> <span>11:45 AM - 12:45
                            PM</span>
                        </div>
                        <div className="event__meta--location meta"><i className="ri-map-pin-line"></i> <span>123 Jay St,
                            Albany,
                            NY
                            12203</span></div>
                      </div>

                      <div className="event__title">
                        <h2>Night prayer revival service @GLC</h2>
                      </div>

                    </div>

                  </div>

                </div>

                <div className="single__content--full">

                  <h3>Description</h3>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequuntur nulla voluptate quas
                    excepturi aliquam mollitia aut veniam voluptates suscipit error voluptatibus deserunt, blanditiis
                    necessitatibus dolorem aspernatur rerum unde similique ab praesentium? Sint minus repellendus vitae
                    dignissimos autem nostrum quisquam nemo officia, facere, explicabo perferendis fugiat excepturi.</p>
                  <p>Odio laborum unde voluptatum facilis quam consequuntur ut adipisci id, accusantium vel perspiciatis
                    sed suscipit excepturi nobis distinctio quos consectetur a. Recusandae, quaerat assumenda fuga et
                    facilis consectetur, consequuntur nihil provident officiis at nemo rerum similique incidunt corrupti
                    cum voluptates ex sequi magnam impedit reprehenderit tempora soluta!</p>

                </div>

              </div>

            </div>

            <div className="flex-lg-4">

              <div className="sidebar">

                <div className="sidebar__widget">
                  <div className="share">
                    <span>Share</span>
                    <Link href="" title="Share it on Facebook"><i className="ri-facebook-line"></i></Link>
                    <Link href="" title="Share it on LinkedIn"><i className="ri-linkedin-line"></i></Link>
                    <Link href="" title="Share it on Twitter"><i className="ri-twitter-line"></i></Link>
                    <Link href="" title="Email it"><i className="ri-mail-line"></i></Link>
                  </div>
                </div>

                <div className="sidebar__widget">

                  <h3 className="sidebar__title">Upcoming events</h3>

                  <div className="card card--event event custom-height">

                    <div className="card__header">
                      <img src={event1} alt="" className="card__image"/>
                    </div>

                    <div className="card__footer">

                      <div className="event__metas vertical">
                        <div className="event__meta--date meta"><i className="ri-calendar-event-line"></i>
                          <span>02/28/2020</span>
                        </div>
                        <div className="event__meta--time meta"><i className="ri-time-line"></i> <span>11:45 AM - 12:45
                            PM</span>
                        </div>
                        <div className="event__meta--location meta"><i className="ri-map-pin-line"></i> <span>123 Jay St,
                            Albany,
                            NY
                            12203</span></div>
                      </div>

                      <div className="event__title">
                        <h2>Scholarship fundraiser @GLC</h2>
                      </div>

                      <div className="event__link"><a href="events-single.html" className="button">Learn more</a></div>

                    </div>

                  </div>

                  <div className="card card--event event custom-height">

                    <div className="card__header">
                      <img src={sermon1} alt="" className="card__image"/>
                    </div>

                    <div className="card__footer">

                      <div className="event__metas vertical">
                        <div className="event__meta--date meta"><i className="ri-calendar-event-line"></i>
                          <span>03/28/2020</span>
                        </div>
                        <div className="event__meta--time meta"><i className="ri-time-line"></i> <span>06:45 PM - 08:45
                            PM</span>
                        </div>
                        <div className="event__meta--location meta"><i className="ri-map-pin-line"></i> <span>123 Jay St,
                            Albany,
                            NY
                            12203</span></div>
                      </div>

                      <div className="event__title">
                        <h2>Bible study of end times (eschatology) begins @GLC</h2>
                      </div>

                      <div className="event__link"><a href="events-single.html" className="button">Learn more</a></div>

                    </div>

                  </div>

                </div>

                <div className="sidebar__widget">

                  <h3 className="sidebar__title">Subscribe</h3>

                  <form action="#" className="form">

                    <div className="form__group mar-b-sm">
                      <input type="email" className="form__input" placeholder="Enter your email address"/>
                    </div>

                    <button type="submit" className="button">Subscribe</button>

                  </form>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
      <TimeLocation/>

    </main>
   
    </div>
  )
}

export default EventsSingle
