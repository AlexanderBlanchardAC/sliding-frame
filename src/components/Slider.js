import React, { useEffect, useState } from 'react';
import {  FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import pictureData from '../data/pictureData';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';


const Slider = () => {
    // eslint-disable-next-line
    const [ pictures, setPictures ] = useState(pictureData);
    const [ index, setIndex ] = useState(0);

    useEffect(() => {
        const finalIndex = pictures.length -1;
        if (index < 0) {
            setIndex(finalIndex);
        }
        if (index > finalIndex) {
            setIndex(0)
        }
    }, [index, pictures]);

    useEffect(() => {
        let picSlider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(picSlider);
        }
    }, [index]);
    

  return (
  <div className='main'>
    <div className="header">
        <h2>Kaia Rose</h2>
    </div>
    <div className='main-inner'>
        {pictureData.map((picture, pictureIndex) => {
            const { id, image, location, text, title, name } =picture;

            let position = 'nextSlide';
            if (pictureIndex === index) {
                position = 'currentSlide';
            }
            if (pictureIndex === index -1 || (index === 0 && pictureIndex === pictures.length - 1)) {
                position = 'finalSlide';
            }

            return (
                <article className={position} key={id}>
                    <img src={image} alt={name} className="picture-img" />
                    <h4 className='pic-title'>{title}</h4>
                    <p className='location'>{location}</p>
                  
                    <p className='text'><span className='quote-l'><RiDoubleQuotesL/></span>{text}<span className='quote-r'><RiDoubleQuotesR/></span></p>
                  
                </article>
            );
        })}
        <button className="prevPic" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
        </button>
        <button className='nextPic' onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
        </button>
    </div>

  </div>
  );
}

export default Slider;
