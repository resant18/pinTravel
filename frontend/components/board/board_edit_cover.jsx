import React from 'react';

const BoardEditCover = (props) => {
   const [visibility, setVisibility] = React.useState();

   const handleCancel = (e) => {
      e.preventDefault();

      setVisibility(false);
   }

   const handleSave = (e) => {
      e.preventDefault();
      
      console.log('Save');
   }

   const renderComponent = () => {
      if (visibility) {
         return (
            <div aria-label='Change Board Cover' className='board-delete-confirm-form'>
               <div className='header'>
                  <h1>Change board cover </h1>
               </div>
               <div className='body'>Pin Gallery here</div>
               <div className='button-footer'>
                  <div className='button-group'>
                     <div className='button-group-right'>
                        <button className='form-button cancel-btn focus' onClick={handleCancel}>
                           Cancel
                        </button>
                        <button className='form-button save-btn' onClick={handleSave}>
                           Save changes
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         )
      }
      return null;
   }


   return (renderComponent);
   
}

export default BoardEditCover;
