import React from 'react'
import "./about.css"
import AboutImg from "../../assets/about.jpeg"
import Info from './Info';


const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className='section__title'>About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="the owner of this page" className="about__img" />

            <div className="about__data">
                <Info />
                <p className="about__description">My holistic approach to design, rooted in a passion for art and visual storytelling, 
                empowers me to create experiences that captivate and inspire. 
                Whether curating a powerful photograph or designing a user-friendly interface, 
                I strive to blend creativity with technical proficiency, ensuring that each project 
                I undertake embodies innovation and artistry.</p>

                {/* <a download='' href={CV} className="button button--flex">Download CV</a> */}
            </div>

        </div>
    </section>

  )
}

export default About