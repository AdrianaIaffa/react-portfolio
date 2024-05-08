import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">

        <div className="about__box">
        <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Learning Progress</h3>
                <span className="about__subtitle">2+ years</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Focused Areas</h3>
                <span className="about__subtitle">React, JavaScript, API Development</span>
        </div>

        <div className="about__box">
        <i class='bx bx-support about__icon'></i>
            <h3 className="about__title">Passionate About</h3>
                <span className="about__subtitle">UI/UX Design</span>
        </div>

    </div>
  )
}

export default Info