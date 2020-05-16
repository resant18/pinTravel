import React, { useState } from 'react';
import Slide from './slide';

const Slider = (props) => { 
   const width = 990;  
   const [state, setState] = useState({
      translate: 0,
      transition: 0.45,
      activeSlide: 0,
   });

   const { translate, transition, activeSlide } = state;

   const divStyle = {
      translate: `translateX${translate}px`,
      transform: `transform ease-out ${transition}s`,
      height: '100%',
      width: `${width * props.slides.length}px`,
      display:'flex'
   }

   const prevSlide = () => {
      if (activeSlide === 0) {
         return setState({
            ...state,
            translate: (props.slides.length - 1) * width,
            activeSlide: props.slides.length - 1
         })
      }

      setState({
         ...state,
         translate: (activeSlide - 1) * width,
         activeSlide: activeSlide - 1
      })
   }

   const nextSlide = () => {
      if (activeSlide === props.slides.length - 1) {
         return setState({
            ...state,
            translate: 0,
            activeSlide: 0
         })
      }

      setState({
         ...state,
         translate: (activeSlide + 1) * width,
         activeSlide: activeSlide + 1,
      });
   }

   return (
      <div className='slider-wrapper'>
         <div className='slider-content' style={divStyle}>
            {props.slides.map((slide, idx) => (
               <Slide key={slide + idx} content={slide} />
            ))}
         </div>
         <div className='arrow-left' onClick={prevSlide} > Prev </div>
         <div className='arrow-right' onClick={nextSlide} > Next </div>
      </div>
   );
}

export default Slider;