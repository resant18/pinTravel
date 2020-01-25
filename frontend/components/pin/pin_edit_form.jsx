import React from 'react';
// import { TextInput } from '../global/form';

class PinEditForm extends React.Component {
   constructor(props) {
      super(props);      
      this.state = {
         pin: {
            id: pin.id,
            board_id: pin.board_id,
            title: pin.title || '',
            detail: pin.detail || '',            
         }
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.update = this.update.bind(this);
   }

   update(field) {
      return (e) => {
         this.setState({ pin: { ...this.state.pin, [field]: e.target.value } });
      };
   }

   handleDelete(e) {
      this.props.showModal({ name: 'delete-pin', selectedData: this.props.pin.id });
   }

   handleSubmit(e) {
      e.preventDefault();
      this.props.updatePin(this.state.pin)
         .then(this.props.hideModal());
   }

   // displayPhoto() {
   //    if (this.state.photoUrl) {
   //       return (
   //          <div className="preview-picture" >
   //             {/* <img src={this.state.photoUrl} /> */}
   //          </div>
   //       )
   //    }
   // }

   render() {
      const { pin } = this.state;
      if (pin) {
         return (
            <div className='pin-edit-buffer'>
               <div className='pin-form-box'>
                  <div className='pin-header'>
                     <h3>Edit this Pin</h3>
                  </div>
                  <div className='pin-form-body'>
                     <div className='pin-aside'>
                        <div className='pin-title'>
                           <p>Title</p>
                           <input
                              id='pin-title-input'
                              className='input pin-title'
                              value={this.state.pin.title}                              
                              onChange={this.update('title')}                              
                           />
                           {/* <TextInput
                              className='input'
                              name="Pin Title"
                              value={this.state.pin.title}
                              onChange={this.update('title')}
                           /> */}
                        </div>
                        <div className='pin-detail'>
                           <p>Detail</p>
                           <textarea
                              className='input'
                              placeholder="What's your pin about?"
                              value={this.state.pin.detail}
                              onChange={this.update('detail')}
                           />
                        </div>
                     </div>
                     <div className='pin-image'>
                        {/* <img src={this.props.pin.pictureUrl} /> */}
                     </div>
                  </div>
                  <div className='button-footer'>
                     <div className='buttons-left'>
                        <button
                           className='rectangle-btn'
                           onClick={this.handleDelete} >
                           Delete
                </button>
                     </div>
                     <div className='buttons-right'>
                        <button
                           className='rectangle-btn'
                           onClick={() => this.props.hideModal()} >
                           Cancel
                </button>
                        <button
                           className={'rectangle-btn save-btn'}
                           onClick={this.handleSubmit} >
                           Save
                </button>
                     </div>
                  </div>
               </div>
            </div>
         )
      } else {
         return <div></div>
      }
   }
}

export default PinEditForm;
