import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Adriana</h1>

        <ul className="footer__list">

          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>

          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>

        </ul>

        <div className="footer__social">
        {/* <a 
            href="https://www.instagram.com/adrianaiaffa/" 
            className="home__social-icon" 
            target="_blank"
            rel="noopener noreferrer"
        >
            <i class="uil uil-instagram"></i>
        </a> */}

        <a 
            href="https://www.linkedin.com/in/adrianaiaffa/" 
            className="footer__social-link" 
            target="_blank"
            rel="noopener noreferrer"
        >
            <i class="uil uil-linkedin-alt"></i>
        </a>

        <a 
            href="https://github.com/AdrianaIaffa" 
            className="footer__social-link" 
            target="_blank"
            rel="noopener noreferrer"
        >
            <i class="uil uil-github-alt"></i>
        </a>
        </div>
        <span className='footer__copy'>&#169; Adriana Iaffa. All rigths reserved</span>
      </div>
    </footer>
   
  )
}

export default Footer