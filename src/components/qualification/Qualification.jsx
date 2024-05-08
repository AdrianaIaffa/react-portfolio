import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          {/* <div className="qualification__button button--flex">
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div> */}
        </div>
        <div className="qualification__sections">
          <div className="qualification__content">

            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">Full-Stack Engineer Path</h3>
                <span className="qualification__subtitle">
                  Codeacademy - Online
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Apr 2024 - present
                </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
             
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Software Development Foundations</h3>
                <span className="qualification__subtitle">
                Founders And Coders - London
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jan 2024 - May 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">

<div>
  <h3 className="qualification__title">Software Engineer Immersive Bootcamp</h3>
  <span className="qualification__subtitle">
    General Assembly - Online
  </span>
  <div className="qualification__calendar">
    <i className="uil uil-calendar-alt"></i> Sep 2023 - Dec 2024
  </div>
  </div>
  <div>
    <span className="qualification__rounder"></span>
    <span className="qualification__line"></span>
  </div>

</div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Front-End Tech Degree</h3>
                <span className="qualification__subtitle">
                  Treehouse - Online
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
