import React, { useState } from 'react';
import SliderContent from './slider_content';
import Slide from './slide';
// import prevIcon from './prev.svg';

const Slider = (props) => { 
   const width = 236;  
   const [state, setState] = useState({
      translate: 0,
      transition: 0.45,
      activeSlide: 0,
      direction: 'next'
   });

   const { translate, transition, activeSlide, direction } = state;

    

   const prevSlide = () => {
      console.log('prev slide');
      
      if (activeSlide === 0) {
         return setState({
            ...state,
            translate: (props.slides.length - 1) * width,
            activeSlide: props.slides.length - 1,
            direction: 'next'
         })
      }

      setState({
         ...state,
         translate: (activeSlide - 1) * width,
         activeSlide: activeSlide - 1,
         direction: 'both'
      })
   }

   const nextSlide = () => {
      if (activeSlide === props.slides.length - 1) {
         return setState({
            ...state,
            translate: 0,
            activeSlide: 0,
            direction: 'prev'
         })
      }

      setState({
         ...state,
         translate: (activeSlide + 1) * width,
         activeSlide: activeSlide + 1,
         direction: 'both'
      });
   }

   // const sliderContentStyle = {
   //    transform: `translateX(-${props.translate}px)`,
   //    transition: `transform ease-out ${props.transition}s`,
   //    height: `100%`,
   //    width: `708px`,
   //    display: `flex`,
   // };  

   return (
      <div className='slider-wrapper'>
         <div className='slider'>
            <SliderContent translate={translate} transition={transition} width='708'>
               {props.slides.map((slide, idx) => (
                  <Slide key={slide + idx} content={slide} />
               ))}
            </SliderContent>
         </div>
         {direction !== "next" && (
            <div className='slide-button tool-button prev' onClick={prevSlide}>
               <svg height='18' width='18' viewBox='0 0 24 24' aria-hidden='true'>
                  <path d='M17.28 24c-.57 0-1.14-.22-1.58-.66L4.5 12 15.7.66a2.21 2.21 0 013.15 0c.87.88.87 2.3 0 3.18L10.79 12l8.06 8.16c.87.88.87 2.3 0 3.18-.44.44-1 .66-1.57.66' />
               </svg>
            </div>
         )}

         {direction !== "prev" && (
            <div className='slide-button tool-button next' onClick={nextSlide}>
               <svg height='18' width='18' viewBox='0 0 24 24' aria-hidden='true' aria-label='' role='img'>
                  <path d='M6.72 24c.57 0 1.14-.22 1.57-.66L19.5 12 8.29.66c-.86-.88-2.27-.88-3.14 0-.87.88-.87 2.3 0 3.18L13.21 12l-8.06 8.16c-.87.88-.87 2.3 0 3.18.43.44 1 .66 1.57.66'></path>
               </svg>
            </div>
         )}
      </div>
   );   
}

export default Slider;
