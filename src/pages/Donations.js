import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import TimeLocation from '../components/TimeLocation'
import { Link } from 'react-router-dom'

const Donations = () => {
  return (
    <div>
      <Nav/>
      <main>
      <section className="banner full-width">

        <div className="container">

          <div className="banner__content">

            <div className="banner__heading">
              <h1>Donations</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugit</p>
            </div>

            <div className="breadcrumb">
              <div className="breadcrumb__home--link"><a href="index.html">Home</a></div>
              <span></span>
              <div className="breadcrumb__current--page-link">Donations</div>
            </div>

          </div>

        </div>

      </section>
      <section className="donations default-section-spacing">

        <div className="container">

          <div className="section-heading text-center">
            <span>Donation</span>
            <h2>Donation</h2>
          </div>

          <div className="card-wrapper"></div>
          <form action="#" className="form donations__form">

            <div className="donations__amount">
              <h3>Choose an amount</h3>

              <div className="row">

                <div className="flex-sm-6 flex-md-2">

                  <div className="form__group">
                    <input type="radio" name="donation-amount" className="form__radio" id="25"/>
                    <label for="25" className="form__label form__label--radio">$25</label>
                  </div>

                </div>

                <div className="flex-sm-6 flex-md-2">

                  <div className="form__group">
                    <input type="radio" name="donation-amount" className="form__radio" id="50"/>
                    <label for="50" className="form__label form__label--radio">$50</label>
                  </div>

                </div>

                <div className="flex-sm-6 flex-md-2">

                  <div className="form__group">
                    <input type="radio" name="donation-amount" className="form__radio" id="75"/>
                    <label for="75" className="form__label form__label--radio">$75</label>
                  </div>

                </div>
                <div className="flex-sm-6 flex-md-2">

                  <div className="form__group">
                    <input type="radio" name="donation-amount" className="form__radio" id="100"/>
                    <label for="100" className="form__label form__label--radio">$100</label>
                  </div>

                </div>

                <div className="flex-md-4">

                  <div className="form__group">
                    <label for="custom" className="form__label form__label--custom"><span><i
                          className="ri-money-dollar-circle-line"></i></span></label>
                    <input type="text" name="donation-amount" className="form__input" id="custom"
                      placeholder="Enter a custom amount"/>
                  </div>

                </div>

              </div>

            </div>

            <div className="donations__frequency">
              <h3>Choose a frequency</h3>

              <div className="row">

                <div className="flex-sm-4">

                  <div className="form__group">
                    <input type="radio" name="donation-frequency" className="form__radio" id="one-time"/>
                    <label for="one-time" className="form__label form__label--radio">One-time</label>
                  </div>

                </div>

                <div className="flex-sm-4">

                  <div className="form__group">
                    <input type="radio" name="donation-frequency" className="form__radio" id="monthly"/>
                    <label for="monthly" className="form__label form__label--radio">Monthly</label>
                  </div>

                </div>

                <div className="flex-sm-4">

                  <div className="form__group">
                    <input type="radio" name="donation-frequency" className="form__radio" id="yearly"/>
                    <label for="yearly" className="form__label form__label--radio">Yearly</label>
                  </div>
                </div>

              </div>

            </div>

            <div className="donations__type">
              <h3>Choose a donation type</h3>

              <div className="row">

                <div className="flex-sm-6 flex-md-3">

                  <div className="form__group">
                    <input type="radio" name="donation-type" className="form__radio" id="building-funds"/>
                    <label for="building-funds" className="form__label form__label--radio">Building Funds</label>
                  </div>

                </div>

                <div className="flex-sm-6 flex-md-3">

                  <div className="form__group">
                    <input type="radio" name="donation-type" className="form__radio" id="church-anniversary"/>
                    <label for="church-anniversary" className="form__label form__label--radio">Church Anniversary</label>
                  </div>

                </div>

                <div className="flex-sm-6 flex-md-3">

                  <div className="form__group">
                    <input type="radio" name="donation-type" className="form__radio" id="pantry"/>
                    <label for="pantry" className="form__label form__label--radio">Pantry</label>
                  </div>

                </div>

                <div className="flex-sm-6 flex-md-3">

                  <div className="form__group">
                    <input type="radio" name="donation-type" className="form__radio" id="ministry"/>
                    <label for="ministry" className="form__label form__label--radio">Ministries</label>
                  </div>

                </div>

              </div>
            </div>

            <div className="donations__payment">
              <h3>Choose a payment type</h3>

              <div className="row">

                <div className="flex-sm-6">

                  <div className="form__group">
                    <input type="radio" name="donation-payment" className="form__radio" id="paypal"/>
                    <label for="paypal" className="form__label form__label--radio">PayPal</label>
                  </div>

                </div>

                <div className="flex-sm-6">

                  <div className="form__group">
                    <input type="radio" name="donation-payment" className="form__radio" id="credit-card"/>
                    <label for="credit-card" className="form__label form__label--radio">Credit card</label>
                  </div>

                </div>

              </div>

            </div>
            <div className="credit-card-payment-form">

              <div className="row">

                <div className="flex-md-6 mar-b-sm">

                  <div className="form__group">
                    <input type="text" name="name-on-card" className="form__input" id="name-on-card"
                      placeholder="Enter the name on card"/>
                  </div>

                </div>

                <div className="flex-md-6 mar-b-sm">

                  <div className="form__group">
                    <input type="text" name="email-payment" className="form__input" id="email-payment"
                      placeholder="Enter your email address"/>
                  </div>

                </div>

                <div className="flex-md-6 mar-b-sm">

                  <div className="form__group">
                    <input type="text" name="billing-address-payment" className="form__input" id="billing-address-payment"
                      placeholder="Enter your billing address"/>
                  </div>
                </div>

                <div className="flex-md-6 mar-b-sm">

                  <div className="form__group">
                    <input type="text" name="billing-address-city-payment" className="form__input"
                      id="billing-address-city-payment" placeholder="Enter your billing address city"/>
                  </div>

                </div>

                <div className="flex-md-6 mar-b-sm">

                  <div className="form__group">
                    <input type="text" name="billing-address-state-payment" className="form__input"
                      id="billing-address-state-payment" placeholder="Enter your billing address state"/>
                  </div>
                </div>

                <div className="flex-md-6 mar-b-sm">

                  <div className="form__group">
                    <input type="text" name="billing-address-zipcode-payment" className="form__input"
                      id="billing-address-zipcode-payment" placeholder="Enter your billing address zip code"/>
                  </div>

                </div>

                <div className="flex-md-6 mar-b-sm">

                  <div className="form__group">
                    <input type="text" name="card-number-payment" className="form__input" id="card-number-payment"
                      placeholder="Enter your card number"/>
                  </div>

                </div>

                <div className="flex-md-6 mar-b-sm">

                  <div className="form__group">
                    <input type="text" name="card-expiration-payment" className="form__input" id="card-expiration-payment"
                      placeholder="Enter your card expiration date (MM/YY)"/>
                  </div>
                </div>

                <div className="flex-md-6 mar-b-sm">

                  <div className="form__group">
                    <input type="text" name="card-ccv-payment" className="form__input" id="card-ccv-payment"
                      placeholder="Enter your card CCV"/>
                  </div>

                </div>

                <div className="flex-md-6">

                  <button className="button button-block-sm" type="submit">Donate</button>

                </div>

              </div>

            </div>

            <div className="paypal-link">
              <Link href="" className="button" target="_blank">Complete your donation on PayPal</Link>
            </div>

          </form>

        </div>

      </section>

      <TimeLocation/>

    </main>
      <Footer/>
    </div>
  )
}

export default Donations
