import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import TimeLocation from '../components/TimeLocation'
import post1 from '../assets/images/post-1@1.5x.jpg'
import post2 from '../assets/images/post-2@1.5x.jpg'
import sermon1 from '../assets/images/sermon-1@1.5x.jpg'

const Blog = () => {
  return (
    <div>
      <Nav/>
      <main>

    
      <section className="banner full-width">

        <div className="container">

          <div className="banner__content">

            <div className="banner__heading">
              <h1>Blog</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugit</p>
            </div>

            <div className="breadcrumb">
              <div className="breadcrumb__home--link"><a href="index.html">Home</a></div>
              <span></span>
              <div className="breadcrumb__current--page-link">Blog</div>
            </div>

          </div>

        </div>

      </section>

      <div className="all-posts default-section-spacing">

        <div className="container">

          <div className="section-heading text-center no-margin">
            <span>Blog</span>
            <h2>Our blog posts</h2>
          </div>

          <div className="search search-header default-section-spacing">

            <div className="row">

              <div className="flex-md-6 flex-lg-4">

                <div className="search__result">
                  <div className="text leading uppercase bold">Results</div>
                  <p>Showing 6 out of 24 posts</p>
                </div>

              </div>

              <div className="flex-md-6 flex-lg-4">

                <div className="search__filter">
                  <div className="text leading uppercase bold">Filter</div>
                  <form action="#" className="form search__filter--form">
                    <div className="form__group">
                      <select id="filter-posts" className="form__input form__select">
                        <option value="most-recent" selected>Most recent</option>
                        <option value="this-week">Published this week</option>
                        <option value="most-comments">Most comments</option>
                        <option value="most-popular">Most popular</option>
                      </select>
                    </div>
                  </form>
                </div>

              </div>

              <div className="flex-md-12 flex-lg-4">

                <div className="search__search">
                  <div className="text leading uppercase bold">Search</div>
                </div>

                <form action="#" className="form search__form">

                  <div className="display-flex">

                    <div className="form__group">

                      <input type="text" className="form__input" placeholder="Search for posts..."/>

                    </div>

                    <div>
                      <button type="submit" className="button">Search</button>
                    </div>

                  </div>

                </form>

              </div>

            </div>

          </div>

          <div className="all-posts__posts">

            <div className="row">

              <div className="flex-md-6 flex-lg-4 mar-b-sm">

                <div className="card blog">

                  <div className="card__header">
                    <img src={post1} alt="A man praying standing" className="card__image blog__image"/>
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
                      <h3>Living for Christ requires boldness</h3>
                    </div>

                    <div className="blog__content">
                      <div className="excerpt">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis excepturi sunt doloribus
                          consequuntur eveniet nostrum dicta, voluptate enim rem voluptatem.</p>
                      </div>
                      <div className="blog__link"><a href="blog-single.html" className="button">Read more</a></div>
                    </div>

                  </div>

                </div>

              </div>

              <div className="flex-md-6 flex-lg-4 mar-b-sm">

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
                      <h3>Living in the last days as Christians</h3>
                    </div>

                    <div className="blog__content">
                      <div className="excerpt">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis excepturi sunt doloribus
                          consequuntur eveniet nostrum dicta, voluptate enim rem voluptatem.</p>
                      </div>
                      <div className="blog__link"><a href="blog-single.html" className="button">Read more</a></div>
                    </div>

                  </div>

                </div>

              </div>

              <div className="flex-md-6 flex-lg-4 mar-b-sm">

                <div className="card blog">

                  <div className="card__header">
                    <img src={sermon1} alt="A man reading the Holy Bible"
                      className="card__image blog__image"/>
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
                      <h3>Understanding the Bible requires dedication</h3>
                    </div>

                    <div className="blog__content">
                      <div className="excerpt">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis excepturi sunt doloribus
                          consequuntur eveniet nostrum dicta, voluptate enim rem voluptatem.</p>
                      </div>
                      <div className="blog__link"><a href="blog-single.html" className="button">Read more</a></div>
                    </div>

                  </div>

                </div>

              </div>

              <div className="flex-md-6 flex-lg-4">

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
                      <div className="blog__link"><a href="blog-single.html" className="button">Read more</a></div>
                    </div>

                  </div>
                </div>

              </div>

              <div className="flex-md-6 flex-lg-4">

                <div className="card blog">

                  <div className="card__header">
                    <img src={sermon1} alt="A man reading the Holy Bible"
                      className="card__image blog__image"/>
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
                      <h3>The Bible is more relevant now than any other time</h3>
                    </div>

                    <div className="blog__content">
                      <div className="excerpt">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis excepturi sunt doloribus
                          consequuntur eveniet nostrum dicta, voluptate enim rem voluptatem.</p>
                      </div>
                      <div className="blog__link"><a href="blog-single.html" className="button">Read more</a></div>
                    </div>

                  </div>

                </div>
              </div>
              <div className="flex-md-6 flex-lg-4">

                <div className="card blog">

                  <div className="card__header">
                    <img src={post1} alt="A man praying standing" className="card__image blog__image"/>
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
                      <h3>He is the God of the valleys and hills</h3>
                    </div>

                    <div className="blog__content">
                      <div className="excerpt">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis excepturi sunt doloribus
                          consequuntur eveniet nostrum dicta, voluptate enim rem voluptatem.</p>
                      </div>
                      <div className="blog__link"><a href="blog-single.html" className="button">Read more</a></div>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="pagination">

            <span className="pagination__arrow"><a href=""><i className="ri-arrow-left-s-line"></i></a></span>
            <span className="pagination__number"><a href="">1</a></span>
            <span className="pagination__number active"><a href="">2</a></span>
            <span className="pagination__number"><a href="">3</a></span>
            <span className="pagination__arrow"><a href=""><i className="ri-arrow-right-s-line"></i></a></span>

          </div>

        </div>

      </div>

      <TimeLocation/>

    </main>
      <Footer/>
    </div>
  )
}

export default Blog
