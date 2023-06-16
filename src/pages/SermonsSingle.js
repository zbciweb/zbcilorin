import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import single from '../assets/images/single.jpg'
import sermon1 from '../assets/images/sermon-1@1.5x.jpg'
import sermon2 from '../assets/images/sermon-2@1.5x.jpg'
import sermon3 from '../assets/images/sermon-3@1.5x.jpg'
import user2 from '../assets/images/user-2.jpg'
import user3 from '../assets/images/user-3.jpg'
import user1 from '../assets/images/user-1.jpg'
import { Link, useNavigate } from 'react-router-dom'
import TimeLocation from '../components/TimeLocation'

const SermonsSingle = () => {
    const navigate = useNavigate()
  return (
    <div>
      <Nav/>
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
              <div onClick={()=>{navigate('/sermons')}}><Link >Sermons</Link></div>
              <span></span>
              <div className="breadcrumb__current--page-link">Understanding God's Grace and Justice</div>
            </div>
          </div>

        </div>

      </section>

    
      <div className="single sermons-single default-section-spacing">

        <div className="container">

          <div className="row">

            <div className="flex-lg-8">

              <div className="single__content">

                <div className="card single__featured--image no-padding">
                  <img src={single} alt="A man praying" className="card__image"/>
                </div>

                <div className="single__metas sermons-single__metas">

                  <div className="row align-items-center">

                    <div className="flex-md-7 flex-lg-8">

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
                          <h2>Understanding God's Grace and Justice</h2>
                        </div>
                      </div>
                    </div>

                    <div className="flex-md-5 flex-lg-4">

                      <div className="sermon__download">
                        <span>Download</span>
                        <Link href=""><i className="ri-video-line"></i></Link>
                        <Link href=""><i className="ri-headphone-line"></i></Link>
                        <Link href=""><i className="ri-file-pdf-line"></i></Link>
                      </div>

                    </div>

                  </div>

                </div>

                <div className="single__content--full">

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequuntur nulla voluptate quas
                    excepturi aliquam mollitia aut veniam voluptates suscipit error voluptatibus deserunt, blanditiis
                    necessitatibus dolorem aspernatur rerum unde similique ab praesentium? Sint minus repellendus vitae
                    dignissimos autem nostrum quisquam nemo officia, facere, explicabo perferendis fugiat excepturi.
                    Consequatur repellendus temporibus molestiae esse blanditiis id, voluptate explicabo inventore quo
                    at libero illo? Omnis libero delectus voluptatem ullam modi provident, quae non obcaecati unde quam!
                    Ducimus accusantium cum sed eaque ad ut possimus nemo tempore animi est, architecto quod nesciunt
                    magni. Commodi corporis animi facilis, adipisci error ullam voluptates beatae tenetur totam?</p>
                  <p>Odio laborum unde voluptatum facilis quam consequuntur ut adipisci id, accusantium vel perspiciatis
                    sed suscipit excepturi nobis distinctio quos consectetur a. Recusandae, quaerat assumenda fuga et
                    facilis consectetur, consequuntur nihil provident officiis at nemo rerum similique incidunt corrupti
                    cum voluptates ex sequi magnam impedit reprehenderit tempora soluta! Nisi asperiores praesentium
                    nostrum rerum laudantium debitis eligendi ad distinctio, tenetur dolorem ipsum fugit inventore
                    perferendis, architecto earum. Necessitatibus voluptates modi optio ipsum odio, similique, at fugiat
                    nemo voluptas id voluptatum possimus voluptatem qui esse beatae quaerat assumenda illo. Eligendi id
                    sed dolorum, nobis voluptate ex in mollitia distinctio aut hic expedita veritatis.</p>

                  <blockquote className="blockquote background-lighter-gray text-center">
                    <h3 className="quote">"Trust in the LORD with all your heart, and do not lean on your own understanding.
                      In all your
                      ways acknowledge him,
                      and he will make straight your paths."</h3>

                    <span className="citation">- Proverbs 3:5-6 (ESV)</span>
                  </blockquote>

                  <h3>God's Grace is not a license to sin</h3>

                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel alias aperiam ut libero impedit
                    distinctio perferendis expedita amet ratione similique commodi optio dolorem sequi, non dolores esse
                    mollitia numquam saepe magni fugiat blanditiis iste aliquid. Sint voluptatibus sequi, quos ad error
                    totam deleniti odio ipsam molestias alias non laborum molestiae.</p>
                  <p>Sed repellendus vel accusantium debitis, cum dolor delectus sit odit numquam laudantium nihil nam
                    in at? Fuga, veritatis suscipit itaque dolorem laboriosam impedit delectus fugit reprehenderit animi
                    consectetur et eum quaerat consequuntur. Consectetur obcaecati suscipit debitis magnam quaerat,
                    ullam totam sequi reprehenderit illo ipsum voluptates est officiis iste, libero reiciendis!</p>

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

                  <h3 className="sidebar__title">Recent sermons</h3>

                  <div className="card custom-height sermon">

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
                      </div>

                      <div className="sermon__link">
                        <a href="sermons-single.html" className="button">Read more</a>
                      </div>

                    </div>

                  </div>
                  <div className="card custom-height sermon">

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

                      </div>

                      <div className="sermon__link">
                        <Link to={'/sermons-single'} className="button">Read more</Link>
                      </div>

                    </div>
                  </div>

                  <div className="card custom-height sermon">

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
                      </div>

                      <div className="sermon__link">
                        <Link to={'/sermons-single'}  className="button">Read more</Link>
                      </div>

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
      <div className="comments background-lighter-gray default-section-spacing">

        <div className="container">

          <div className="section-heading">
            <span>Comments</span>
            <h2>Thoughts on this sermon</h2>
          </div>

          <div className="comments__content">

            <div className="comments__box">

              <div className="comments__avatar">
                <img src={user2} alt=""/>
              </div>

              <div className="comments__details">

                <span>John Doe</span><span>02/28/2020</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit ipsam iusto magnam porro
                  quaerat vero aliquid sunt fugiat nisi!</p>

              </div>

              <div className="comments__reply--link"><Link href="#" className="uppercase bold">Reply</Link></div>

             
              <div className="comments__box comments__box--reply">

                <div className="comments__avatar">
                  <img src={user3} alt=""/>
                </div>

                <div className="comments__details">

                  <span>Jane Doe</span><span>02/28/2020</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit ipsam iusto magnam
                    porro
                    quaerat vero aliquid sunt fugiat nisi!</p>

                </div>
                <div className="comments__reply--link"><Link href="#" className="uppercase bold">Reply</Link></div>

              </div>

            </div>

          </div>
          <div className="comments__content">

            <div className="comments__box">

              <div className="comments__avatar">
                <img src={user1} alt=""/>
              </div>

              <div className="comments__details">

                <span>John Doe</span><span>02/28/2020</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit ipsam iusto magnam porro
                  quaerat vero aliquid sunt fugiat nisi!</p>

              </div>

              <div className="comments__reply--link"><Link href="#" className="uppercase bold">Reply</Link></div>

            </div>
          </div>

          <div className="separator"></div>

          <form action="#" className="form comments__form">

            <div className="row">

              <div className="flex-md-6">

                <div className="form__group">
                  <input type="text" className="form__input" placeholder="Enter your full name"/>
                </div>

              </div>

              <div className="flex-md-6 mar-b-sm">

                <div className="form__group">
                  <input type="email" className="form__input" placeholder="Enter your email address"/>
                </div>

              </div>

              <div className="flex-md-12">

                <div className="form__group mar-b-sm">
                  <textarea name="reply-comment" className="form__input form__textarea"
                    placeholder="Enter your comments"></textarea>
                </div>

                <button type="submit" className="button">Leave comment</button>

              </div>

            </div>

          </form>

        </div>

      </div>
     <TimeLocation/>
    </main>
      <Footer/>
    </div>
  )
}

export default SermonsSingle
