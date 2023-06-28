import React, { useState } from "react";
import TimeLocation from "../components/TimeLocation";
import { Link } from "react-router-dom";
import { __ministries } from "../utils/ministries";
import { removeHyphen } from "../utils/fn";

const Ministies = () => { 
  return (
    <>
      <main>
        <section className="banner full-width">
          <div className="container">
            <div className="banner__content">
              <div className="banner__heading">
                <h1>Ministries</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam fugit
                </p>
              </div>

              <div className="breadcrumb">
                <div className="breadcrumb__home--link">
                  <a href="index.html">Home</a>
                </div>
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
              <h2>Church Ministries</h2>
            </div>

            <div className="search search-header default-section-spacing">
              <div className="row">
                <div className="flex-md-3 flex-lg-4">
                  <div className="search__result">
                    <div className="text leading uppercase bold">Results</div>
                    <p>
                      Showing {page} out of {pages}
                    </p>
                  </div>
                </div>

                <div className="flex-md-9 flex-lg-8">
                  <div className="search__search">
                    <div className="text leading uppercase bold">Search</div>
                  </div>

                  <div className="display-flex">
                    <div className="form__group">
                      <input
                        type="text"
                        className="form__input"
                        placeholder="Search for ministries..."
                        value={value}
                        onChange={handleSearch}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="all-ministries__ministries">
              <div className="row">
                {value === "" ? (
                  getPaginatedData(page, perPage).map((d, i) => (
                    <div className="flex-md-6 flex-lg-4 mar-b-sm" key={i}>
                      <div className="card ministry">
                        <div className="card__header">
                          <img
                            src={d.image}
                            alt={d.name}
                            className="card__image ministry__image"
                          />
                        </div>
                        <div className="card__footer">
                          <div className="ministry__title">
                            <h3>{removeHyphen(d.name)}</h3>
                          </div>

                          <div className="ministry__content">
                            <div className="excerpt">
                              <p>{d.excerpt}</p>
                            </div>
                          </div>
                          <div className="ministry__link mar-t-sm">
                            <Link
                              to={`/ministries/${d.name}`}
                              className="button"
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : search.length === 0 ? (
                  <p>No results found</p>
                ) : (
                  search.map((d, i) => (
                    <div className="flex-md-6 flex-lg-4 mar-b-sm" key={i}>
                      <div className="card ministry">
                        <div className="card__header">
                          <img
                            src={d.image}
                            alt={d.name}
                            className="card__image ministry__image"
                          />
                        </div>
                        <div className="card__footer">
                          <div className="ministry__title">
                            <h3>{removeHyphen(d.name)}</h3>
                          </div>

                          <div className="ministry__content">
                            <div className="excerpt">
                              <p>{d.excerpt}</p>
                            </div>
                          </div>
                          <div className="ministry__link mar-t-sm">
                            <Link
                              to={`/ministries/${d.name}`}
                              className="button"
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            { 
              <div className="pagination">
                {page >= 2 ? (
                  <span className={`pagination__arrow`}>
                    <Link onClick={() => setPage((prev) => prev - 1)}>
                      <i className="ri-arrow-left-s-line"></i>
                    </Link>
                  </span>
                ) : (
                  ""
                )}

                {getPaginationGroup(pages, pageLimit).map((d, i) => (
                  <span
                    className={`pagination__number ${
                      page === d ? "active" : ""
                    }`}
                    key={i}
                  >
                    <Link onClick={changePage} href="">
                      {d}
                    </Link>
                  </span>
                ))}
                {page === pages ? (
                  ""
                ) : (
                  <span className={`pagination__arrow`}>
                    <Link onClick={() => setPage((prev) => prev + 1)}>
                      <i className="ri-arrow-right-s-line"></i>
                    </Link>
                  </span>
                )}
              </div>
           }
          </div>
        </div>
        <TimeLocation />
      </main>
    </>
  );
};

export default Ministies;