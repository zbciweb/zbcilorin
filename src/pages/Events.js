import React from 'react' 
import TimeLocation from '../components/TimeLocation'
import event1 from '../assets/images/event-1@1.5x.jpg'
import event2 from '../assets/images/event-2@1.5x.jpg'
import event3 from '../assets/images/event-3@1.5x.jpg'
import sermon1 from '../assets/images/sermon-1@1.5x.jpg'
import { Link } from 'react-router-dom'

const Events = () => {
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
        <div className="breadcrumb__current--page-link">Events</div>
      </div>

    </div>

  </div>

</section>

<div className="all-events default-section-spacing">

  <div className="container">

    <div className="section-heading text-center no-margin">
      <span>Events</span>
      <h2>Our events</h2>
    </div>

    <div className="search search-header default-section-spacing">

      <div className="row">

        <div className="flex-md-3 flex-lg-4">

          <div className="search__result">
            <div className="text leading uppercase bold">Results</div>
            <p>Showing 6 out of 24 events</p>
          </div>

        </div>

        <div className="flex-md-9 flex-lg-8">

          <div className="search__search">
            <div className="text leading uppercase bold">Search</div>
          </div>

          <form action="#" className="form search__form">

            <div className="display-flex">

              <div className="form__group">

                <input type="text" className="form__input" placeholder="Search for events..."/>

              </div>

              <div>
                <button type="submit" className="button">Search</button>
              </div>

            </div>

          </form>

        </div>

      </div>

    </div>

    <div className="all-events__events">

      <div className="row">

        <div className="flex-md-6 flex-lg-4 mar-b-sm">

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

              <div className="event__link"><a href="events-single.html" className="button">Learn more</a></div>

            </div>

          </div>

        </div>

        <div className="flex-md-6 flex-lg-4 mar-b-sm">

          <div className="card card--event event">

            <div className="card__header">
              <img src={sermon1} alt="" className="card__image"/>
            </div>

            <div className="card__footer">

              <div className="event__metas vertical">
                <div className="event__meta--date meta"><i className="ri-calendar-event-line"></i> <span>03/28/2020</span>
                </div>
                <div className="event__meta--time meta"><i className="ri-time-line"></i> <span>06:45 PM - 08:45 PM</span>
                </div>
                <div className="event__meta--location meta"><i className="ri-map-pin-line"></i> <span>123 Jay St, Albany,
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

        <div className="flex-md-6 flex-lg-4 mar-b-sm">

          <div className="card card--event event">

            <div className="card__header">
              <img src={event2} alt="" className="card__image"/>
            </div>

            <div className="card__footer">

              <div className="event__metas vertical">
                <div className="event__meta--date meta"><i className="ri-calendar-event-line"></i> <span>04/28/2020</span>
                </div>
                <div className="event__meta--time meta"><i className="ri-time-line"></i> <span>11:45 AM - 01:45 PM</span>
                </div>
                <div className="event__meta--location meta"><i className="ri-map-pin-line"></i> <span>123 Jay St, Albany,
                    NY
                    12203</span></div>
              </div>

              <div className="event__title">
                <h2>Church anniversary luncheon @GLC</h2>
              </div>

              <div className="event__link"><a href="events-single.html" className="button">Learn more</a></div>

            </div>

          </div>

        </div>

        <div className="flex-md-6 flex-lg-4">

          <div className="card card--event event">

            <div className="card__header">
              <img src={event3} alt="" className="card__image"/>
            </div>

            <div className="card__footer">

              <div className="event__metas vertical">
                <div className="event__meta--date meta"><i className="ri-calendar-event-line"></i> <span>05/28/2020</span>
                </div>
                <div className="event__meta--time meta"><i className="ri-time-line"></i> <span>11:45 AM - 12:45 PM</span>
                </div>
                <div className="event__meta--location meta"><i className="ri-map-pin-line"></i> <span>123 Jay St, Albany,
                    NY
                    12203</span></div>
              </div>

              <div className="event__title">
                <h2>Night prayer revival service @GLC</h2>
              </div>

              <div className="event__link"><a href="events-single.html" className="button">Learn more</a></div>

            </div>

          </div>
        </div>

        <div className="flex-md-6 flex-lg-4">

          <div className="card card--event event">

            <div className="card__header">
              <img src={event2} alt="" className="card__image"/>
            </div>

            <div className="card__footer">

              <div className="event__metas vertical">
                <div className="event__meta--date meta"><i className="ri-calendar-event-line"></i> <span>04/28/2020</span>
                </div>
                <div className="event__meta--time meta"><i className="ri-time-line"></i> <span>11:45 AM - 01:45 PM</span>
                </div>
                <div className="event__meta--location meta"><i className="ri-map-pin-line"></i> <span>123 Jay St, Albany,
                    NY
                    12203</span></div>
              </div>

              <div className="event__title">
                <h2>Church anniversary luncheon @GLC</h2>
              </div>

              <div className="event__link"><a href="events-single.html" className="button">Learn more</a></div>

            </div>
          </div>

        </div>

        <div className="flex-md-6 flex-lg-4">

          <div className="card card--event event">

            <div className="card__header">
              <img src={sermon1} alt="" className="card__image"/>
            </div>

            <div className="card__footer">

              <div className="event__metas vertical">
                <div className="event__meta--date meta"><i className="ri-calendar-event-line"></i> <span>03/28/2020</span>
                </div>
                <div className="event__meta--time meta"><i className="ri-time-line"></i> <span>06:45 PM - 08:45 PM</span>
                </div>
                <div className="event__meta--location meta"><i className="ri-map-pin-line"></i> <span>123 Jay St, Albany,
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

      </div>

    </div>
    <div className="pagination">

      <span className="pagination__arrow"><Link href=""><i className="ri-arrow-left-s-line"></i></Link></span>
      <span className="pagination__number"><Link href="">1</Link></span>
      <span className="pagination__number active"><Link href="">2</Link></span>
      <span className="pagination__number"><Link href="">3</Link></span>
      <span className="pagination__arrow"><Link href=""><i className="ri-arrow-right-s-line"></i></Link></span>

    </div>

  </div>

</div>

<TimeLocation/>
</main>
    
    </div>
  )
}

export default Events
