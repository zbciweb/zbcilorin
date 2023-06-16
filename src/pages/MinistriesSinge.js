import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
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

const MinistriesSinge = () => {
  return (
    <div>
        <Nav/>
        <main>

      
      <section class="banner full-width">

        <div class="container">

          <div class="banner__content">

            <div class="banner__heading">
              <h1>Ministries</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugit</p>
            </div>

            <div class="breadcrumb">
              <div class="breadcrumb__home--link"><a href="index.html">Home</a></div>
              <span></span>
              <div><a href="ministries.html">Ministries</a></div>
              <span></span>
              <div class="breadcrumb__current--page-link">Men's ministry</div>
            </div>

          </div>

        </div>

      </section>
      <div class="single ministries-single default-section-spacing">

        <div class="container">

          <div class="row">

            <div class="flex-lg-8">

              <div class="single__content">

                <div class="card single__featured--image no-padding">
                  <img src={single} alt="A man praying" class="card__image"/>
                </div>
                <div class="single__metas ministries-single__metas">

                  <div class="row align-items-center">

                    <div class="flex-md-8 flex-lg-9">

                      <div class="ministry__meta">
                        <div class="meta"><i class="ri-user-star-line"></i> <span>Heads by <span class="bold">Deacon
                              Geoffrey E. Henderson</span></span></div>
                        <div class="meta"><i class="ri-group-line"></i> <span>14 Brothers</span></div>
                        <div class="meta"><i class="ri-calendar-event-line"></i> <span>Meets once every month</span>
                        </div>
                      </div>

                      <div class="ministry__content">
                        <div class="title">
                          <h2>Men's ministry</h2>
                        </div>
                      </div>

                    </div>

                    <div class="flex-md-4 flex-lg-3">

                      <div class="ministry__link">
                        <a href="#" class="button button-block-md">Join this ministry</a>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="single__content--full">

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

            <div class="flex-lg-4">

              <div class="sidebar">

                <div class="sidebar__widget">
                  <div class="share">
                    <span>Share</span>
                    <a href="" title="Share it on Facebook"><i class="ri-facebook-line"></i></a>
                    <a href="" title="Share it on LinkedIn"><i class="ri-linkedin-line"></i></a>
                    <a href="" title="Share it on Twitter"><i class="ri-twitter-line"></i></a>
                    <a href="" title="Email it"><i class="ri-mail-line"></i></a>
                  </div>
                </div>

                <div class="sidebar__widget">

                  <h3 class="sidebar__title">Other ministries</h3>

                  <div class="card custom-height ministry">

                    <div class="card__header">
                      <img src={ministry2} alt="A man holding and reading the Holy Bible"
                        class="card__image ministry__image"/>
                    </div>
                    <div class="card__footer">

                      <div class="ministry__title">
                        <h3>Women's ministry</h3>
                      </div>

                      <div class="ministry__meta"><i class="ri-group-line"></i> <span>12 Sisters</span></div>

                      <div class="ministry__content">
                        <div class="excerpt">
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint culpa totam laborum.</p>
                        </div>
                        <div class="ministry__link"><a href="ministries-single.html" class="button">Learn more</a></div>
                      </div>
                    </div>

                  </div>

                  <div class="card custom-height ministry">

                    <div class="card__header">
                      <img src={ministry3} alt="A little boy laughing while reading the Holy Bible"
                        class="card__image ministry__image"/>
                    </div>

                    <div class="card__footer">

                      <div class="ministry__title">
                        <h3>Children's ministry</h3>
                      </div>

                      <div class="ministry__meta"><i class="ri-group-line"></i> <span>26 Children</span></div>

                      <div class="ministry__content">
                        <div class="excerpt">
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint culpa totam laborum.</p>
                        </div>
                        <div class="ministry__link"><a href="ministries-single.html" class="button">Learn more</a></div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="sidebar__widget">

                  <h3 class="sidebar__title">Volunteer</h3>

                  <div class="card custom-height text-center">

                    <div class="card__header">
                      <img src={sermon2} alt="" class="card__image ministry__image"/>
                    </div>

                    <div class="card__footer">

                      <div class="ministry__title text-white mar-b-sm">
                        <h3>Love helping out?<br/>We can use your help!</h3>
                      </div>

                      <div class="ministry__link"><a href="#" class="button">Volunteer</a></div>

                    </div>

                  </div>

                </div>
                <div class="sidebar__widget">

                  <h3 class="sidebar__title">Subscribe</h3>

                  <form action="#" class="form">

                    <div class="form__group mar-b-sm">
                      <input type="email" class="form__input" placeholder="Enter your email address"/>
                    </div>

                    <button type="submit" class="button">Subscribe</button>

                  </form>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
      <section class="our-gallery gallery gallery--equal-grid default-section-spacing background-lighter-gray">

        <div class="container">

          <div class="section-heading text-center">
            <span>Gallery</span>
            <h2>Some pictures from this ministry</h2>
          </div>

          <div class="row">

            <div class="flex-md-6 flex-lg-3 no-padding no-margin">

              <a href="images/gallery-1@2x.jpg" class="gallery-link" data-lightbox="church-picture"
                data-title="Picture of the Holy Bible">

                <div class="card gallery__card">

                  <div class="card__header">
                    <img src={gallery1} alt="Picture of the Holy Bible" class="card__image"/>
                  </div>

                </div>

              </a>

            </div>

            <div class="flex-md-6 flex-lg-3 no-padding no-margin">

              <a href="images/gallery-2@2x.jpg" class="gallery-link" data-lightbox="church-picture"
                data-title="Picture of Jesus on a medal cross">

                <div class="card gallery__card">

                  <div class="card__header">
                    <img src={gallery2} alt="Picture of Jesus on a medal cross" class="card__image"/>
                  </div>

                </div>

              </a>

            </div>

            <div class="flex-md-6 flex-lg-3 no-padding no-margin">

              <a href="images/gallery-3@2x.jpg" class="gallery-link" data-lightbox="church-picture"
                data-title="Bible study">

                <div class="card gallery__card">

                  <div class="card__header">
                    <img src={gallery3} alt="Bible study" class="card__image"/>
                  </div>

                </div>

              </a>
            </div>

            <div class="flex-md-6 flex-lg-3 no-padding no-margin">

              <a href="images/gallery-4@2x.jpg" class="gallery-link" data-lightbox="church-picture"
                data-title="Inside of a church">

                <div class="card gallery__card">

                  <div class="card__header">
                    <img src={gallery4} alt="Inside of a church" class="card__image"/>
                  </div>

                </div>
              </a>

            </div>

            <div class="flex-md-6 flex-lg-3 no-padding no-margin">

              <a href="images/gallery-5@2x.jpg" class="gallery-link" data-lightbox="church-picture"
                data-title="Picture of people worshiping in church">

                <div class="card gallery__card">

                  <div class="card__header">
                    <img src={gallery5} alt="Picture of people worshiping in church"
                      class="card__image"/>
                  </div>

                </div>

              </a>

            </div>

            <div class="flex-md-6 flex-lg-3 no-padding no-margin">

              <a href="images/gallery-6@2x.jpg" class="gallery-link" data-lightbox="church-picture"
                data-title="Picture of women laughing">

                <div class="card gallery__card">

                  <div class="card__header">
                    <img src={gallery6} alt="Picture of women laughing" class="card__image"/>
                  </div>

                </div>

              </a>

            </div>

            <div class="flex-md-6 flex-lg-3 no-padding no-margin">

              <a href="images/gallery-7@2x.jpg" class="gallery-link" data-lightbox="church-picture"
                data-title="Picture of a worship leader singing">

                <div class="card gallery__card">

                  <div class="card__header">
                    <img src={gallery7} alt="Worship leader singing" class="card__image"/>
                  </div>

                </div>

              </a>

            </div>

            <div class="flex-md-6 flex-lg-3 no-padding no-margin">

              <a href="images/gallery-8@2x.jpg" class="gallery-link" data-lightbox="church-picture"
                data-title="Picture of a smart kid at school">

                <div class="card gallery__card">

                  <div class="card__header">
                    <img src={gallery8} alt="Smart kid at school" class="card__image"/>
                  </div>

                </div>

              </a>

            </div>

          </div>

        </div>

      </section>
      <TimeLocation/>
    </main>
        <Footer/>
      
    </div>
  )
}

export default MinistriesSinge
