import React, { useState } from 'react';
import './work.css';

const WorksItem = ({ item }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
      setCurrentImageIndex(prevIndex => (prevIndex - 1 + item.image.length) % item.image.length);
  };

  const handleNextClick = () => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % item.image.length);
  };

  return (
    <div className="work__card" key={item.id}>
        <img src={item.image[currentImageIndex]} alt="landing page for project" className='work__img' />
        <button onClick={handlePrevClick}><i className="bx bx-left-arrow-alt work__button-icon"></i></button>
        <button onClick={handleNextClick}><i className="bx bx-right-arrow-alt work__button-icon"></i></button>
        <h3 className="work__title">{item.title}</h3>
        <p className="work__blurb">{item.blurb}</p>
        <a href={item.githubLink} className="work__button" target="_blank" rel="noreferrer">
            Github <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
    </div>
  );
}

export default WorksItem;
