import React from 'react' 
import TimeLocation from '../components/TimeLocation'
import single from '../assets/images/single.jpg'
import gallery1 from '../assets/images/gallery-1@1.5x.jpg'
import gallery2 from '../assets/images/gallery-2@1.5x.jpg'
import gallery3 from '../assets/images/gallery-3@1.5x.jpg'
import gallery4 from '../assets/images/gallery-4@1.5x.jpg'
import gallery5 from '../assets/images/gallery-5@1.5x.jpg'
import gallery6 from '../assets/images/gallery-6@1.5x.jpg'
import gallery7 from '../assets/images/gallery-7@1.5x.jpg'
import gallery8 from '../assets/images/gallery-8@1.5x.jpg'
import sermon2 from '../assets/images/sermon-2@1.5x.jpg'
import ministry2 from '../assets/images/ministry-2@1.5x.jpg'
import ministry3 from '../assets/images/ministry-3@1.5x.jpg'
import { Link } from 'react-router-dom'

const MinistriesSinge = () => {
  return (
    <div>
       
        <main>

      
      <section className="banner full-width">

        <div className="container">

          <div className="banner__content">

            <div className="banner__heading">
              <h1>Ministries</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugit</p>
            </div>

            <div className="breadcrumb">
              <div className="breadcrumb__home--link"><a href="index.html">Home</a></div>
              <span></span>
              <div><a href="ministries.html">Ministries</a></div>
              <span></span>
              <div className="breadcrumb__current--page-link">Men's ministry</div>
            </div>

          </div>

        </div>

      </section>
      <div className="single ministries-single default-section-spacing">

        <div className="container">

          <div className="row">

            <div className="flex-lg-8">

              <div className="single__content">

                <div className="card single__featured--image no-padding">
                  <img src={single} alt="A man praying" className="card__image"/>
                </div>
                <div className="single__metas ministries-single__metas">

                  <div className="row align-items-center">

                    <div className="flex-md-8 flex-lg-9">

                      <div className="ministry__meta">
                        <div className="meta"><i className="ri-user-star-line"></i> <span>Heads by <span className="bold">Deacon
                              Geoffrey E. Henderson</span></span></div>
                        <div className="meta"><i className="ri-group-line"></i> <span>14 Brothers</span></div>
                        <div className="meta"><i className="ri-calendar-event-line"></i> <span>Meets once every month</span>
                        </div>
                      </div>

                      <div className="ministry__content">
                        <div className="title">
                          <h2>Men's ministry</h2>
                        </div>
                      </div>

                    </div>

                    <div className="flex-md-4 flex-lg-3">

                      <div className="ministry__link">
                        <Link href="#" className="button button-block-md">Join this ministry</Link>
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

                  <h3>Responsibilities</h3>

                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel alias aperiam ut libero impedit
                    distinctio perferendis expedita amet ratione similique commodi optio dolorem sequi, non dolores esse
                    mollitia numquam saepe magni fugiat blanditiis iste aliquid.</p>
                  <p>Sed repellendus vel accusantium debitis, cum dolor delectus sit odit numquam laudantium nihil nam
                    in at? Fuga, veritatis suscipit itaque dolorem laboriosam impedit delectus fugit reprehenderit.</p>

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

                  <h3 className="sidebar__title">Other ministries</h3>

                  <div className="card custom-height ministry">

                    <div className="card__header">
                      <img src={ministry2} alt="A man holding and reading the Holy Bible"
                        className="card__image ministry__image"/>
                    </div>
                    <div className="card__footer">

                      <div className="ministry__title">
                        <h3>Women's ministry</h3>
                      </div>

                      <div className="ministry__meta"><i className="ri-group-line"></i> <span>12 Sisters</span></div>

                      <div className="ministry__content">
                        <div className="excerpt">
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint culpa totam laborum.</p>
                        </div>
                        <div className="ministry__link"><a href="ministries-single.html" className="button">Learn more</a></div>
                      </div>
                    </div>

                  </div>

                  <div className="card custom-height ministry">

                    <div className="card__header">
                      <img src={ministry3} alt="A little boy laughing while reading the Holy Bible"
                        className="card__image ministry__image"/>
                    </div>

                    <div className="card__footer">

                      <div className="ministry__title">
                        <h3>Children's ministry</h3>
                      </div>

                      <div className="ministry__meta"><i className="ri-group-line"></i> <span>26 Children</span></div>

                      <div className="ministry__content">
                        <div className="excerpt">
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint culpa totam laborum.</p>
                        </div>
                        <div className="ministry__link"><a href="ministries-single.html" className="button">Learn more</a></div>
                      </div>

                    </div>

                  </div>

                </div>

                <div className="sidebar__widget">

                  <h3 className="sidebar__title">Volunteer</h3>

                  <div className="card custom-height text-center">

                    <div className="card__header">
                      <img src={sermon2} alt="" className="card__image ministry__image"/>
                    </div>

                    <div className="card__footer">

                      <div className="ministry__title text-white mar-b-sm">
                        <h3>Love helping out?<br/>We can use your help!</h3>
                      </div>

                      <div className="ministry__link"><Link href="#" className="button">Volunteer</Link></div>

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
      <section className="our-gallery gallery gallery--equal-grid default-section-spacing background-lighter-gray">

        <div className="container">

          <div className="section-heading text-center">
            <span>Gallery</span>
            <h2>Some pictures from this ministry</h2>
          </div>

          <div className="row">

            <div className="flex-md-6 flex-lg-3 no-padding no-margin">

              <a href="images/gallery-1@2x.jpg" className="gallery-link" data-lightbox="church-picture"
                data-title="Picture of the Holy Bible">

                <div className="card gallery__card">

                  <div className="card__header">
                    <img src={gallery1} alt="The Holy Bible" className="card__image"/>
                  </div>

                </div>

              </a>

            </div>

            <div className="flex-md-6 flex-lg-3 no-padding no-margin">

              <a href="images/gallery-2@2x.jpg" className="gallery-link" data-lightbox="church-picture"
                data-title="Picture of Jesus on a medal cross">

                <div className="card gallery__card">

                  <div className="card__header">
                    <img src={gallery2} alt="Jesus on a medal cross" className="card__image"/>
                  </div>

                </div>

              </a>

            </div>

            <div className="flex-md-6 flex-lg-3 no-padding no-margin">

              <a href="images/gallery-3@2x.jpg" className="gallery-link" data-lightbox="church-picture"
                data-title="Bible study">

                <div className="card gallery__card">

                  <div className="card__header">
                    <img src={gallery3} alt="Bible study" className="card__image"/>
                  </div>

                </div>

              </a>
            </div>

            <div className="flex-md-6 flex-lg-3 no-padding no-margin">

              <a href="images/gallery-4@2x.jpg" className="gallery-link" data-lightbox="church-picture"
                data-title="Inside of a church">

                <div className="card gallery__card">

                  <div className="card__header">
                    <img src={gallery4} alt="Inside of a church" className="card__image"/>
                  </div>

                </div>
              </a>

            </div>

            <div className="flex-md-6 flex-lg-3 no-padding no-margin">

              <a href="images/gallery-5@2x.jpg" className="gallery-link" data-lightbox="church-picture"
                data-title="Picture of people worshiping in church">

                <div className="card gallery__card">

                  <div className="card__header">
                    <img src={gallery5} alt="People worshiping in church"
                      className="card__image"/>
                  </div>

                </div>

              </a>

            </div>

            <div className="flex-md-6 flex-lg-3 no-padding no-margin">

              <a href="images/gallery-6@2x.jpg" className="gallery-link" data-lightbox="church-picture"
                data-title="Picture of women laughing">

                <div className="card gallery__card">

                  <div className="card__header">
                    <img src={gallery6} alt="Women laughing" className="card__image"/>
                  </div>

                </div>

              </a>

            </div>

            <div className="flex-md-6 flex-lg-3 no-padding no-margin">

              <a href="images/gallery-7@2x.jpg" className="gallery-link" data-lightbox="church-picture"
                data-title="Picture of a worship leader singing">

                <div className="card gallery__card">

                  <div className="card__header">
                    <img src={gallery7} alt="Worship leader singing" className="card__image"/>
                  </div>

                </div>

              </a>

            </div>

            <div className="flex-md-6 flex-lg-3 no-padding no-margin">

              <a href="images/gallery-8@2x.jpg" className="gallery-link" data-lightbox="church-picture"
                data-title="Picture of a smart kid at school">

                <div className="card gallery__card">

                  <div className="card__header">
                    <img src={gallery8} alt="Smart kid at school" className="card__image"/>
                  </div>

                </div>

              </a>

            </div>

          </div>

        </div>

      </section>
      <TimeLocation/>
    </main>
       
      
    </div>
  )
}

export default MinistriesSinge
