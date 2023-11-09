import React from "react";

const TimeLocation = () => {
  return (
    <div>
    <section className="time-location background-lighter-gray" id="worshiptime">
      <div className="container">
        <div className="row">
          <div className="flex-lg-6">
            <div className="time-location__content default-section-spacing">
              <div className="section-heading">
                  <span>Time and location</span>
                  <h2>Come and worship with us</h2>
                </div>
                <div className="row mar-b-sm">
                  <div className="flex-lg-6">
                    <div className="time-location__time">
                      <div className="day bold">Sunday:</div>
                      <div className="info">
                        <div className="time">
                        <span>8:00 am (Pre-Service Intercessors' Prayer Meeting)</span>
              <span>8:00 am - 9:30 am (First (Youth) Worship Service)</span>
              <span>9:30 am - 10:30 am (Sunday school)</span>
              <span>10:30 am - 12:00 pm (Second Worship Service)</span>
              <span>5:00 pm (Home Fellowship: Last Two Sundays of Every Month)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-lg-6">
                    <div className="time-location__time">
                      <div className="day bold">Wednesday</div>
                      <div className="info">
                        <div className="time">
                          <span>5:00pm Miracle Prayer Service</span>
                          <span>5:00pm Home Fellowship Leaders' Briefing</span>
                          <span>
                            5:00pm Fasting & Prayer Meeting: FIrst Wed. of every
                            month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>    

                <div className="info">
                  <div className="location bold">Location:</div>
                  <div className="location-info">
                    <span>Zion Baptist Church, Adewole Estate, Ilorin</span>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className="time-location__map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1973.1003827093016!2d4.5098515344130075!3d8.479850074696115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1036533eea699211%3A0x542d834f3a4aa83a!2sZion%20Baptist%20Church%2C%20Adewole%20Ilorin!5e0!3m2!1sen!2sng!4v1687228783808!5m2!1sen!2sng"
            style={{ border: "0" }}
            allowFullScreen=""
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default TimeLocation;
