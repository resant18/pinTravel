import React from 'react';
// import { TextInput } from '../global/form';

class PinEditForm extends React.Component {
   constructor(props) {
      super(props);    
      const { pin } = this.props;

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
   //          <div className='preview-picture' >
   //             {/* <img src={this.state.photoUrl} /> */}
   //          </div>
   //       )
   //    }
   // }

   render() {
      const { pin } = this.state;
      if (pin) {
         return (
            <div aria-label='Edit' className='pin-edit-form-box'>
               <div className='pin-form'>
                  <div className='header'>
                     <h1>Edit this Pin</h1>
                  </div>
                  <div className='form-body'>
                     <div className='aside'>
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
                              name='Pin Title'
                              value={this.state.pin.title}
                              onChange={this.update('title')}
                           /> */}
                        </div>
                        <div className='pin-detail'>
                           <p>Detail</p>
                           <textarea
                              className='input'
                              placeholder='Write a note about this Pin...'
                              value={this.state.pin.detail}
                              onChange={this.update('detail')}
                           />
                        </div>
                     </div>
                     <div className='pin-image'>    
                        <p>{pin.id}.jpg</p>                    
                        <img src={window.pins[pin.id]} />
                     </div>
                  </div>
                  <div className='form-footer'>
                     <div className='button-group buttons-left'>
                        <button
                           className='delete-btn'
                           onClick={this.handleDelete} >
                           Delete
                        </button>
                     </div>
                     <div className='button-group buttons-right'>
                        <button
                           className='cancel-btn'
                           onClick={() => this.props.hideModal()} >
                           Cancel
                        </button>
                        <button
                           className='save-btn-focus'
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
