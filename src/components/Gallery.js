import React from "react"; 
import { galleryImages } from "../utils/galleryImages";
import { removeHyphen, selectRandomMembers } from "../utils/fn";

const Gallery = ({ page }) => {
  
  const matchingEntry = galleryImages.find((entry) => entry.page === page);

  const randomGalleryImage= selectRandomMembers(matchingEntry.images, 8)
 
  
  return ( 
  
   <section className="our-gallery gallery gallery--equal-grid default-section-spacing text-center">
      <div className="section-heading">
        <span>Our gallery</span>
        <h2>Explore the {removeHyphen(page)}</h2>
      </div>
      <div className="row">
        {randomGalleryImage.map((d, i) => (
          <div key={i} className="flex-md-6 flex-lg-3 no-padding no-margin">
            <a
              href={d.image}
              className="gallery-link"
              data-lightbox={`gallery - ${d.imageName}`}
              data-title={d.imageName}
            >
              <div className="card gallery__card">
                <div className="card__header">
                  <img
                    src={d.image}
                    alt={d.imageName}
                    className="card__image"
                  />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>   
  );
};

export default Gallery;