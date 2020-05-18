import React from 'react';

const Slide = ({ content }) => {
   const divStyle = {
      width: '236px',
      height: '100%',
      backgroundImage: `url(${content}`,
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center'
   }

   return (
      <div style={divStyle}></div>
   )
      
}

export default Slide;