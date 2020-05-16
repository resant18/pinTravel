import React from 'react';
import Slider from '../slider/slider';

const BoardEditCover = ({ onShow, boardpins }) => {
   const handleCancel = (e) => {
      e.preventDefault();      
      onShow(false);      
   };

   const handleSave = (e) => {
      e.preventDefault();

      onShow(false);
   };   

   // const renderPinGallery = () => {      
   //    const boardPins = boardpins.map( (pin, idx) => 
   //    ))

   //    return (
   //       <div className='slider-wrapper'>
   //          <div className='bg'>
   //             <img src={} />
   //          </div>
   //          <a class='prev' onclick='navigateSlide(-1)'>
   //             &#10094;
   //          </a>
   //          <a class='next' onclick='navigateSlide(1)'>
   //             &#10095;
   //          </a>
   //          <div className='mask'>
   //             <span style='top: 0px; left: 0px; right: 0px; height: 32px;'></span>
   //             <span style='top: 32px; left: 553px; right: 0px; height: 236px;'></span>
   //             <span style='top: 268px; left: 0px; right: 0px; bottom: 0px;'></span>
   //             <span style='top: 32px; left: 0px; height: 236px; width: 317px;'></span>
   //          </div>
   //          <div className='frame'></div>
   //       </div>
   //    );
   // }

   return (
      <div aria-label='Change Board Cover' className='board-edit-cover'>
         <div className='header'>
            <h1>Change board cover </h1>
         </div>
         <div className='body'>
            {
               (boardpins.length > 0) && <Slider slides={boardpins.map( pin => pin.pictureUrl)} />
            }
         </div>
         <div className='button-footer'>
            <div className='button-group'>
               <div className='button-group-right'>
                  <button className='form-button cancel-btn' onClick={handleCancel}>
                     Cancel
                  </button>
                  <button className='form-button save-btn focus' onClick={handleSave}>
                     Save changes
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BoardEditCover;
