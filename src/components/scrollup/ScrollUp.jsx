import React from 'react'
import './scrollup.css'

const ScrollUp = () => {

    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");
        //when scroll is higer than 560 vh, add the show-scroll class to a tag with the scoll-top class
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    });

  return (
    <a href="#home" className="scrollup">
        <i className="ul uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default ScrollUp