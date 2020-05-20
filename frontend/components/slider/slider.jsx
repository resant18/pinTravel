import React, { useState } from 'react';
import SliderContent from './slider_content';
import Slide from './slide';

const Slider = (props) => { 
   const width = props.width;  
   const margin = 32;
   const distance = props.width - margin;
   
   const [state, setState] = useState({
      translate: 0,
      transition: 0.45,
      activeSlide: 0      
   });

   const { translate, transition, activeSlide } = state;

   const setTranslate = (nextSlide) => {   
      if (nextSlide === props.slides.length - 1) {         
         return (nextSlide - 1) * width + distance - margin;
      }
      else if (nextSlide === 0) {      
         return 0;
      }
      else if (nextSlide === 1) {
         return distance;
      }
      else {
         return (nextSlide - 1) * width + distance;
      }
   }
    
   const prevSlide = () => {
      if (activeSlide === 0) {
         return setState({
            ...state,
            translate: setTranslate(props.slides.length - 1),
            activeSlide: props.slides.length - 1,
         });
      }

      setState({
         ...state,
         translate: setTranslate(activeSlide - 1),
         activeSlide: activeSlide - 1,         
      })
   }

   const nextSlide = () => {
      if (activeSlide === props.slides.length - 1) {
         return setState({
            ...state,
            translate: 0,
            activeSlide: 0,            
         })
      }

      setState({
         ...state,
         translate: setTranslate(activeSlide + 1),
         activeSlide: activeSlide + 1,         
      });
   }   

   return (
      <div className='slider-wrapper'>
         <div className='slider'>
            <SliderContent translate={translate} transition={transition} width={props.slides.length * width}>
               {props.slides.map((slide, idx) => (
                  <Slide key={slide + idx} slideId={idx} content={slide} activeSlide={activeSlide} />
               ))}
            </SliderContent>
         </div>

         {props.slides.length > 1 && (
            <div className='slide-button tool-button prev' onClick={prevSlide}>
               <svg height='18' width='18' viewBox='0 0 24 24' aria-hidden='true'>
                  <path d='M17.28 24c-.57 0-1.14-.22-1.58-.66L4.5 12 15.7.66a2.21 2.21 0 013.15 0c.87.88.87 2.3 0 3.18L10.79 12l8.06 8.16c.87.88.87 2.3 0 3.18-.44.44-1 .66-1.57.66' />
               </svg>
            </div>
         )}
         {props.slides.length > 1 && (
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
