import React from 'react'
import pastor from '../assets/images/pastor@1.5x.jpg'
import staff1 from '../assets/images/staff-1@1.5x.jpg'
import staff2 from '../assets/images/staff-2@1.5x.jpg'
import staff3 from '../assets/images/staff-3@1.5x.jpg'
import staff4 from '../assets/images/staff-4@1.5x.jpg'
import staff5 from '../assets/images/staff-5@1.5x.jpg'
import staff6 from '../assets/images/staff-6@1.5x.jpg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import TimeLocation from '../components/TimeLocation'

const About = () => {
  return (
    <div>
      
      <main>

      <section className="banner full-width">

        <div className="container">

          <div className="banner__content">

            <div className="banner__heading">
              <h1>About us</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugit</p>
            </div>

            <div className="breadcrumb">
              <div className="breadcrumb__home--link"><Link to={'/'}>Home</Link></div>
              <span></span>
              <div className="breadcrumb__current--page-link">About</div>
            </div>

          </div>

        </div>

      </section>
 

      <section className="our-pastor default-section-spacing">

        <div className="container">

          <div className="row align-items-center">

            <div className="flex-md-6 flex-lg-7">

              <div className="our-pastor__content">

                <div className="section-heading">
                  <span>Our pastor</span>
                  <h2>Meet our pastor</h2>
                </div>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam laborum, aperiam iste sit tempore
                  consequuntur voluptates quaerat animi molestias doloribus nobis numquam amet inventore nihil autem
                  praesentium libero laudantium. Possimus, maiores, eius ipsum beatae numquam nemo cum officiis.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam laborum, aperiam iste sit tempore
                  consequuntur voluptates quaerat animi molestias doloribus nobis numquam amet inventore nihil autem
                  praesentium libero laudantium. Possimus, maiores, eius ipsum beatae numquam nemo cum officiis,
                  veniam quidem quibusdam impedit inventore rem.</p>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam laborum, aperiam iste sit tempore
                  consequuntur voluptates quaerat animi molestias doloribus nobis numquam amet inventore nihil autem
                  praesentium libero laudantium. Possimus, maiores, eius ipsum beatae numquam nemo cum officiis.</p>

              </div>

            </div>

            <div className="flex-md-6 flex-lg-5">

              <div className="card card--picture staff">

                <div className="card__header">
                  <img src={pastor} alt="A man" className="card__image"/>
                </div>

                <div className="card__footer">

                  <div className="staff__name">
                    <h3>Erik B. Hogan</h3>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

      </section>
      <section className="our-staffs default-section-spacing text-center background-lighter-gray">

        <div className="container">

          <div className="section-heading text-center">
            <span>Our staffs</span>
            <h2>Meet some of our friendly staffs</h2>
          </div>

          <div className="row">

            <div className="flex-md-6 flex-lg-4 mar-b-sm">

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

            <div className="flex-md-6 flex-lg-4 mar-b-sm">

              <div className="card card--picture staff">

                <div className="card__header">
                  <img src={staff2} alt="A man" className="card__image"/>
                </div>

                <div className="card__footer">

                  <div className="staff__name">
                    <h3>Maryanne G. Crum</h3>
                  </div>
                  <div className="staff__title">Worship leader</div>
                  <div className="staff__link"><Link href="" className="button">Learn more</Link></div>

                </div>

              </div>

            </div>

            <div className="flex-md-6 flex-lg-4 mar-b-sm">

              <div className="card card--picture staff">

                <div className="card__header">
                  <img src={staff3} alt="A man" className="card__image"/>
                </div>

                <div className="card__footer">

                  <div className="staff__name">
                    <h3>Clarence C. Laughlin</h3>
                  </div>
                  <div className="staff__title">Usher</div>
                  <div className="staff__link"><Link href="" className="button">Learn more</Link></div>

                </div>

              </div>

            </div>

            <div className="flex-md-6 flex-lg-4">

              <div className="card card--picture staff">

                <div className="card__header">
                  <img src={staff4} alt="A man" className="card__image"/>
                </div>

                <div className="card__footer">

                  <div className="staff__name">
                    <h3>Katrina A. Compton</h3>
                  </div>
                  <div className="staff__title">Assistant pastor</div>
                  <div className="staff__link"><Link href="staffs-single.html" className="button">Learn more</Link></div>

                </div>

              </div>

            </div>

            <div className="flex-md-6 flex-lg-4">

              <div className="card card--picture staff">

                <div className="card__header">
                  <img src={staff5} alt="A man" className="card__image"/>
                </div>

                <div className="card__footer">

                  <div className="staff__name">
                    <h3>Matthew T. Chronister</h3>
                  </div>
                  <div className="staff__title">Worship leader</div>
                  <div className="staff__link"><Link href="" className="button">Learn more</Link></div>

                </div>

              </div>

            </div>

            <div className="flex-md-6 flex-lg-4 no-margin">

              <div className="card card--picture staff">

                <div className="card__header">
                  <img src={staff6} alt="A man" className="card__image"/>
                </div>

                <div className="card__footer">

                  <div className="staff__name">
                    <h3>Sandy T. Cox</h3>
                  </div>
                  <div className="staff__title">Usher</div>
                  <div className="staff__link"><a href="staffs-single.html" className="button">Learn more</a></div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      <section className="our-mission-vision default-section-spacing text-white">

        <div className="our-mission-vision__content">

          <div className="container">

            <div className="row">

              <div className="flex-lg-6">

                <div className="section-heading">
                  <span>Missions</span>
                  <h2>Our missions</h2>
                </div>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ut delectus qui quos alias
                  dignissimos reprehenderit explicabo repellendus. Ipsam, accusantium tenetur? Iste numquam odio
                  voluptatem exercitationem officiis debitis aliquam quis.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ut delectus qui quos alias
                  dignissimos reprehenderit explicabo repellendus. Ipsam, accusantium tenetur? Iste numquam odio
                  voluptatem exercitationem officiis debitis aliquam quis.</p>
                <p className="mar-b-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ut delectus qui
                  quos alias
                  dignissimos reprehenderit explicabo repellendus. Ipsam, accusantium tenetur? Iste numquam odio
                  voluptatem exercitationem officiis debitis aliquam quis.</p>

              </div>

              <div className="flex-lg-6">

                <div className="section-heading text-white">
                  <span>Visions</span>
                  <h2>Our vision</h2>
                </div>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ut delectus qui quos alias
                  dignissimos reprehenderit explicabo repellendus. Ipsam, accusantium tenetur? Iste numquam odio
                  voluptatem exercitationem officiis debitis aliquam quis.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ut delectus qui quos alias
                  dignissimos reprehenderit explicabo repellendus. Ipsam, accusantium tenetur? Iste numquam odio
                  voluptatem exercitationem officiis debitis aliquam quis.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ut delectus qui quos alias
                  dignissimos reprehenderit explicabo repellendus. Ipsam, accusantium tenetur? Iste numquam odio
                  voluptatem exercitationem officiis debitis aliquam quis.</p>

              </div>

            </div>

          </div>

        </div>

      </section>
      <section className="our-belief default-section-spacing text-center">

        <div className="container">

          <div className="section-heading">
            <span>Our belief</span>
            <h2>Our faith - what we believe</h2>
          </div>

          <div className="row">

            <div className="flex-md-6 flex-lg-3 mar-b-sm">

              <div className="our-belief__box">

                <div className="heading">
                  <h3>The Bible</h3>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, accusamus.</p>

              </div>

            </div>

            <div className="flex-md-6 flex-lg-3 mar-b-sm">

              <div className="our-belief__box">

                <div className="heading">
                  <h3>The Holy Trinity</h3>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, accusamus.</p>

              </div>

            </div>

            <div className="flex-md-6 flex-lg-3">

              <div className="our-belief__box">

                <div className="heading">
                  <h3>The Blessed Hope</h3>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, accusamus.</p>

              </div>

            </div>

            <div className="flex-md-6 flex-lg-3">

              <div className="our-belief__box">

                <div className="heading">
                  <h3>Sanctification</h3>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, accusamus.</p>

              </div>

            </div>

          </div>

        </div>

      </section>
      <section className="our-stats text-center">

        <div className="container">

          <div className="row">

            <div className="flex-md-6 flex-lg-3 mar-b-sm">

              <div className="our-stats__box">

                <div className="heading">
                  <div>1995</div>
                </div>

                <h3>Year built</h3>

              </div>

            </div>

            <div className="flex-md-6 flex-lg-3 mar-b-sm">

              <div className="our-stats__box">

                <div className="heading">
                  <div>25,000</div>
                </div>

                <h3>Members</h3>

              </div>

            </div>

            <div className="flex-md-6 flex-lg-3">

              <div className="our-stats__box">

                <div className="heading">
                  <div>$584K</div>
                </div>

                <h3>Given in scholarship</h3>

              </div>

            </div>

            <div className="flex-md-6 flex-lg-3">

              <div className="our-stats__box">

                <div className="heading">
                  <div>56</div>
                </div>

                <h3>Ministries</h3>

              </div>

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

export default About
