import React, { useState } from "react";
import { Link } from "react-router-dom";
import { __ministries } from "../utils/ministries";
import { removeHyphen } from "../utils/fn";

function Pagination() {
  const [page, setPage] = useState(1);

  

  const perPage = 3;
  const total = __ministries.length;
  const pages = Math.ceil(total / perPage);
  const pageLimit = pages;

  function changePage(e) {
    const pageNumber = Number(e.target.textContent);
    setPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = page * perPage - perPage;
    const endIndex = startIndex + perPage;
    return __ministries.slice(startIndex, endIndex);
  };
  const getPaginationGroup = () => {
    let start = Math.floor((pages - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((__, idx) => start + idx + 1);
  };

  return (
    <div>
      {getPaginatedData().map((e, i) => {
        console.log("HEllo", e);

        return (
          <>
            <div className="all-ministries__ministries">
              <div className="row">
              <div className="flex-md-6 flex-lg-4 mar-b-sm" key={i}>
                <div className="card ministry">
                  <div className="card__header">
                    <img
                      src={e.image}
                      alt={e.name}
                      className="card__image ministry__image"
                    />
                  </div>
                  <div className="card__footer">
                    <div className="ministry__title">
                      <h3>{removeHyphen(e.name)}</h3>
                    </div>

                    <div className="ministry__content">
                      <div className="excerpt">
                        <p>{e.excerpt}</p>
                      </div>
                    </div>
                    <div className="ministry__link mar-t-sm">
                      <Link to={`/ministries/${e.name}`} className="button">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
               
                {/*   {value === "" ? (
              ""
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
                )} */}
              </div>
            </div>

           
            {/*  <div className="flex-md-6 flex-lg-4 mar-b-sm" key={i}>
                <div className="card ministry">
                  <div className="card__header">
                    <img
                      src={e.image}
                      alt={e.name}
                      className="card__image ministry__image"
                    />
                  </div>
                  <div className="card__footer">
                    <div className="ministry__title">
                      <h3>{removeHyphen(e.name)}</h3>
                    </div>

                    <div className="ministry__content">
                      <div className="excerpt">
                        <p>{e.excerpt}</p>
                      </div>
                    </div>
                    <div className="ministry__link mar-t-sm">
                      <Link to={`/ministries/${e.name}`} className="button">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div> */}
          </>
        );
      })}

      {/* <div className="search__result">
        <div className="text leading uppercase bold">Results</div>
        <p>
          Showing {page} out of {pages} ministries
        </p>
      </div> */}

     
    </div>
  );
}

export default Pagination;
