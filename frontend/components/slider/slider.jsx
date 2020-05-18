import React, { useState } from 'react';
import SliderContent from './slider_content';
import Slide from './slide';

const Slider = (props) => { 
   const width = 990;  
   const [state, setState] = useState({
      translate: 236,
      transition: 0.45,
      activeSlide: 0,
   });

   const { translate, transition, activeSlide } = state;

    

   const prevSlide = () => {
      console.log('prev slide');
      debugger
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

   const sliderContentStyle = {
      transform: `translateX(-${props.translate}px)`,
      transition: `transform ease-out ${props.transition}s`,
      height: `100%`,
      width: `708px`,
      display: `flex`,
   };  

   return (
      <div className='slider-wrapper'>
         {/* <div className='slider-content' style={sliderContentStyle} > */}
            <SliderContent translate={translate} transition={transition} width={width}>
            {props.slides.map((slide, idx) => (
               <Slide key={slide + idx} content={slide} />
            ))}
            </SliderContent>
         {/* </div> */}

         <div className='arrow-left' onClick={prevSlide}>
            {" "}
            Prev{" "}
         </div>
         <div className='arrow-right' onClick={nextSlide}>
            {" "}
            Next{" "}
         </div>
      </div>
   );   
}

export default Slider;

/**
 * 
 * Slider content:     
 * transform: translateX(0px);
    transition: transform ease-out 0.45s;
    height: 100%;
    width: 708px;
    display: flex;
 */