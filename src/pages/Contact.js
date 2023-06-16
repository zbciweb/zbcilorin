import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import TimeLocation from '../components/TimeLocation'

const Contact = () => {
  return (
    <div>
      <Nav/>
      <main>
      <section className="banner full-width">

        <div className="container">

          <div className="banner__content">

            <div className="banner__heading">
              <h1>Contact</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugit</p>
            </div>

            <div className="breadcrumb">
              <div className="breadcrumb__home--link"><a href="index.html">Home</a></div>
              <span></span>
              <div className="breadcrumb__current--page-link">Contact</div>
            </div>

          </div>

        </div>

      </section>
      

     
      <TimeLocation/>
      
      <section className="contact default-section-spacing">

        <div className="container">

          <form action="#" className="form contact__form">

            <div className="row">

              <div className="flex-md-6">

                <div className="form__group">
                  <label for="fname" className="form__label">Your first name <span className="color-danger">*</span></label>
                  <input type="text" id="fname" className="form__input" name="fname" placeholder="Enter your full name"/>
                </div>

              </div>

              <div className="flex-md-6 mar-b-sm">

                <div className="form__group">
                  <label for="email-2" className="form__label">Your email address <span
                      className="color-danger">*</span></label>
                  <input type="email" id="email-2" className="form__input" name="email"
                    placeholder="Enter your email address"/>
                </div>

              </div>

              <div className="flex-md-12 mar-b-sm">

                <div className="form__group">
                  <label for="subject" className="form__label">Subject <span className="color-danger">*</span></label>
                  <input type="text" id="subject" className="form__input" name="subject" placeholder="Enter your subject"/>
                </div>

              </div>
              <div className="flex-md-12 mar-b-sm">

                <div className="form__group">
                  <label for="message-2" className="form__label">Message <span className="color-danger">*</span></label>
                  <textarea name="message" id="message-2" className="form__textarea form__input"
                    placeholder="Enter your message..."></textarea>
                </div>

              </div>

              <div className="flex-md-12 mar-b-sm">

                <button className="button" type="submit" name="submit">Send message</button>

              </div>



            </div>

          </form>

        </div>

      </section>
    </main>
      <Footer/>
    </div>
  )
}

export default Contact
