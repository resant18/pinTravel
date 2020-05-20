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

   return (
      <div aria-label='Change Board Cover' className='board-edit-cover'>
         <div className='header'>
            <h1>Change board cover </h1>
         </div>
         <div className='body'>
            {
               (boardpins.length > 0) && <Slider slides={boardpins.map( pin => pin.pictureUrl)} width="236" />
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
