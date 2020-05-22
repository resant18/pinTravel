import React from 'react';

const Slide = ({ content, slideId, activeSlide, handleSelectedSlide }) => {   
   const divStyle = {
      width: '236px',
      height: '100%',
      backgroundImage: `url(${content}`,
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center',
      backgroundColor: slideId !== activeSlide ? 'rgba(255, 255, 255)' : null,
      opacity: slideId !== activeSlide ? '0.5' : null,
   };   

   return (
      <div style={divStyle} onClick={handleSelectedSlide}></div>
   )
      
}

export default Slide;