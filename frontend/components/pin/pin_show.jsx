import React from 'react';

class PinShow extends React.Component {
   constructor(props) {
      super(props);

      this.showModal = this.showModal.bind(this);

   }

   componentDidMount() {
      if (!this.props.pin) 
         this.props.fetchPin(this.props.pinId);
   }

   handleSave() {

   }

   _isSameUser() {
      return (this.props.currentUser === this.props.creator);
   }

   showModal(modal) {
      return e => {
         this.props.showModal(modal);
      }
   }

   displayToolbar() {
      if (this._isSameUser()) {
         return (
            <div className='toolbar'>
               <div className='toolbar-left'>
                  <button aria-label='Edit board' className='tool-buttons edit-button' type='button' onClick={this.showModal({ name: 'edit-pin', selectedData: this.props.pinId })} >
                     <div>
                        <svg className='svg' height='24' width='24' viewBox='0 0 24 24' aria-hidden='true' aria-label='' role='img'>
                           <path d='M13.386 6.018l4.596 4.596L7.097 21.499 1 22.999l1.501-6.096L13.386 6.018zm8.662-4.066a3.248 3.248 0 0 1 0 4.596L19.75 8.848 15.154 4.25l2.298-2.299a3.248 3.248 0 0 1 4.596 0z'></path>
                        </svg>
                     </div>
                  </button>
               </div>
               <div className='toolbar-right'>
                  Save to Board
               </div>
            </div>
         )
      }
   }

 

   render() {
      if (!this.props.pin) return null;



      return (
         <div className='pin-show-wrapper'>
            <div className='pin-show-container'>
               <div className='pin-show-box'>
                  <div className='pin-show-content-top'>
                     <div className='pin-image'>
                        <img src={this.props.pin.pictureUrl} alt={this.props.pin.title} />
                     </div>
                  </div>
                  <div className='pin-show-content-bottom'>
                     {this.displayToolbar()}    
                     <div>
                        <p>
                           {
                              this._isSameUser() ? `Uploaded by ${this.props.creator}` : `Saved by ${this.props.creator}`
                           }                           
                        </p>
                        <p>
                           {this.props.pin.title}
                        </p>
                     </div> 
                     <div>
                        <p>You saved to {this.props.board.name}</p>
                     </div>                
                  </div>

               </div>
            </div>
         </div>
      )
   }
}

export default PinShow;
