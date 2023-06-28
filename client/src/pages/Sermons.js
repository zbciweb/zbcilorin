import React from 'react' 
import { Link } from 'react-router-dom'
import sermon1 from '../assets/images/sermon-1@1.5x.jpg'
import sermon2 from '../assets/images/sermon-2@1.5x.jpg'
import sermon3 from '../assets/images/sermon-3@1.5x.jpg'
import sermon4 from '../assets/images/sermon-4@1.5x.jpg'
import sermon5 from '../assets/images/sermon-5@1.5x.jpg'
import sermon6 from '../assets/images/sermon-6@1.5x.jpg'
import TimeLocation from '../components/TimeLocation'

const Sermons = () => {
  return (
    <div>
       
        <main>
      <section className="banner full-width">

        <div className="container">

          <div className="banner__content">

            <div className="banner__heading">
              <h1>Sermons</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugit</p>
            </div>

            <div className="breadcrumb">
              <div className="breadcrumb__home--link"><Link to={'/'}>Home</Link></div>
              <span></span>
              <div className="breadcrumb__current--page-link">Sermons</div>
            </div>

          </div>

        </div>

      </section>
      <div className="all-sermons default-section-spacing">

        <div className="container">

          <div className="section-heading text-center no-margin">
            <span>Sermons</span>
            <h2>Our sermons</h2>
          </div>

          <div className="search search-header default-section-spacing">

            <div className="row">

              <div className="flex-md-3 flex-lg-4">

                <div className="search__result">
                  <div className="text leading uppercase bold">Results</div>
                  <p>Showing 6 out of 24 sermons</p>
                </div>

              </div>

              <div className="flex-md-9 flex-lg-8">

                <div className="search__search">
                  <div className="text leading uppercase bold">Search</div>
                </div>

                <form action="#" className="form search__form">

                  <div className="display-flex">

                    <div className="form__group">

                      <input type="text" className="form__input" placeholder="Search for sermons..."/>

                    </div>

                    <div>
                      <button type="submit" className="button">Search</button>
                    </div>

                  </div>
                </form>

              </div>

            </div>

          </div>

          <div className="all-sermons__sermons">

            <div className="row">

              <div className="flex-md-6 flex-lg-4 mar-b-sm">

                <div className="card sermon">

                  <div className="card__header">
                    <img src={sermon1} alt="A man reading the Holy Bible"
                      className="card__image sermon__image"/>
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
                        <h3>Loving Jesus with all your heart, mind, and soul</h3>
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
                      <a href="sermons-single.html" className="button">Read more</a>
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

                <div className="card sermon">

                  <div className="card__header">
                    <img src={sermon2} alt="A man reading the Holy Bible"
                      className="card__image sermon__image"/>
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
                        <h3>Living the Christian life</h3>
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
                      <a href="sermons-single.html" className="button">Read more</a>
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
                      <a href="sermons-single.html" className="button">Read more</a>
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

              <div className="flex-md-6 flex-lg-4">

                <div className="card sermon">

                  <div className="card__header">
                    <img src={sermon5} alt="" className="card__image sermon__image"/>
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
                        <h3>Are you truly born again?</h3>
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
                      <Link to={"/sermons-single"} className="button">Read more</Link>
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

              <div className="flex-md-6 flex-lg-4">

                <div className="card sermon">

                  <div className="card__header">
                    <img src={sermon4} alt="" className="card__image sermon__image"/>
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
                        <h3>Understanding God's Grace and Justice</h3>
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
                      <Link to={'/sermons-single'} className="button">Read more</Link>
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

              <div className="flex-md-6 flex-lg-4">

                <div className="card sermon">

                  <div className="card__header">
                    <img src={sermon6} alt="" className="card__image sermon__image"/>
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
                        <h3>Understanding the Bible and its prophecies</h3>
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
                      <Link to={'/sermons-single'} className="button">Read more</Link>
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
    <div className="scroll-to-top"><i className="ri-arrow-up-line"></i></div>
    
    </div>
  )
}

export default Sermons
