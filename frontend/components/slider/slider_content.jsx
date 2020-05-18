import React from 'react';



const SliderContent = (props) => {   
   const sliderContentStyle = {
      transform: `translateX(-${props.translate}px)`,
      transition: `transform ease-out ${props.transition}s`,
      height: `100%`,
      width: `${props.width}px`,
      display: `flex`
   }
   console.log(sliderContentStyle);

   return (
      <div style={sliderContentStyle}>
         {props.children}
      </div>
   )
}

export default SliderContent;