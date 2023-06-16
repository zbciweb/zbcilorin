import React from 'react'
import ministry1 from '../assets/images/ministry-1@1.5x.jpg'
import ministry2 from '../assets/images/ministry-2@1.5x.jpg'
import ministry3 from '../assets/images/ministry-3@1.5x.jpg'
import ministry4 from '../assets/images/ministry-4@1.5x.jpg'
import ministry5 from '../assets/images/ministry-5@1.5x.jpg'
import ministry6 from '../assets/images/ministry-6@1.5x.jpg'
import TimeLocation from '../components/TimeLocation'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

const Ministies = () => {
  return (
    <div>
        <Nav/>
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
        <div className="breadcrumb__current--page-link">Ministries</div>
      </div>

    </div>

  </div>

</section>
<div className="all-ministries default-section-spacing">

  <div className="container">

    <div className="section-heading text-center no-margin">
      <span>Ministries</span>
      <h2>Our ministries</h2>
    </div>

    <div className="search search-header default-section-spacing">

      <div className="row">

        <div className="flex-md-3 flex-lg-4">

          <div className="search__result">
            <div className="text leading uppercase bold">Results</div>
            <p>Showing 6 out of 24 ministries</p>
          </div>

        </div>

        <div className="flex-md-9 flex-lg-8">

          <div className="search__search">
            <div className="text leading uppercase bold">Search</div>
          </div>

          <form action="#" className="form search__form">

            <div className="display-flex">

              <div className="form__group">

                <input type="text" className="form__input" placeholder="Search for ministries..."/>

              </div>

              <div>
                <button type="submit" className="button">Search</button>
              </div>

            </div>

          </form>

        </div>

      </div>

    </div>

    <div className="all-ministries__ministries">

      <div className="row">

        <div className="flex-md-6 flex-lg-4 mar-b-sm">

          <div className="card ministry">

            <div className="card__header">
              <img src={ministry1} alt="A man holding and reading the Holy Bible"
                className="card__image ministry__image"/>
            </div>
            <div className="card__footer">

              <div className="ministry__title">
                <h3>Men's ministry</h3>
              </div>

              <div className="ministry__meta"><i className="ri-group-line"></i> <span>14 Brothers</span></div>

              <div className="ministry__content">
                <div className="excerpt">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint culpa totam laborum.</p>
                </div>
                <div className="ministry__link"><a href="ministries-single.html" className="button">Learn more</a></div>
              </div>

            </div>

          </div>

        </div>
        <div className="flex-md-6 flex-lg-4 mar-b-sm">

          <div className="card ministry">

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

        <div className="flex-md-6 flex-lg-4 mar-b-sm">

          <div className="card ministry">

            <div className="card__header">
              <img src={ministry2} alt="Young women praying" className="card__image ministry__image"/>
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

        </div>

        <div className="flex-md-6 flex-lg-4">

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
                <div className="ministry__link"><a href="ministries-single.html" className="button">Learn more</a></div>
              </div>

            </div>

          </div>

        </div>

        <div className="flex-md-6 flex-lg-4">

          <div className="card ministry">

            <div className="card__header">
              <img src={ministry5} alt="Women laughing" className="card__image ministry__image"/>
            </div>

            <div className="card__footer">

              <div className="ministry__title">
                <h3>Women's choir</h3>
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

        </div>

        <div className="flex-md-6 flex-lg-4">

          <div className="card ministry">

            <div className="card__header">
              <img src={ministry6} alt="Man singing" className="card__image ministry__image"/>
            </div>

            <div className="card__footer">

              <div className="ministry__title">
                <h3>Men's choir</h3>
              </div>

              <div className="ministry__meta"><i className="ri-group-line"></i> <span>10 Brothers</span></div>

              <div className="ministry__content">
                <div className="excerpt">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint culpa totam laborum.</p>
                </div>
                <div className="ministry__link"><a href="ministries-single.html" className="button">Learn more</a></div>
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
<Footer/>
    </div>
  )
}

export default Ministies
