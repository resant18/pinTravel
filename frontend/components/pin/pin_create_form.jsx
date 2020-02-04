import React from 'react';
import BoardList from '../board/board_list';

class PinCreateForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         pin: {
            pin_id: null, title: '', detail: '',
            lat: 0.0, lng: 0.0, link_url: ''
         },
         showBoardDropDown: false,
         imageFile: null,
         imageUrl: null,
         imageDesc: null,         
      };

      this.handleImageUpload = this.handleImageUpload.bind(this);
      this.deleteImage = this.deleteImage.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);      
   }



   componentDidMount() {
      this.props.fetchBoards();
   }

   goBack(e) {
      e.preventDefault();
      this.props.history.goBack();
   }
   

   displayBoardList() {

   }

   hideBoardDropDown(e) {
      this.setState({ showBoardDropDown: false });
   }

   showBoardDropDown(e) {
      this.setState({ showBoardDropDown: true });
   }

   handleSelectBoard(board) {
      this.setState({ boardId: board.id, selectedBoard: board.name });
      this.hideBoardDropDown();
   }      

   update(field) {
      return (e) => {
         this.setState({ pin: { ...this.state.pin, [field]: e.target.value } });
      };
   }

   handleSubmit(e) {
      e.preventDefault();
   }

   _checkValidImageFile(file) {      
      return (
         file.type === 'image/bmp' || file.type === 'image/gif' || file.type === 'image/jpeg' ||
         file.type === 'image/png' || file.type === 'image/tiff' || file.type === 'image/webp'
      );
   }

   //handleUploadFile
   handleImageUpload(e) {      
      const file = e.currentTarget.files[0];      
      
      if (file && this._checkValidImageFile(file)) {
         const fileReader = new FileReader();

         if (file.size < 2000000) {
            fileReader.onloadend = () => {
               const img = new Image();
               img.src = fileReader.result;

               this.setState({
                  imageFile: file,
                  imageUrl: fileReader.result,                  
                  imageDesc: null
               });

            };
            fileReader.readAsDataURL(file);
            
         } else {
            this.setState({ imageDesc: 'Please use a image file less than 2MB' });
         }
      }      
   }

   deleteImage() {
      this.setState({ imageUrl: null});
   }

   _displayTrash() {
      if (this.state.imageUrl) {
         return (
            <div className='trash-wrapper'>
               <button className='trash-btn' onClick={this.deleteImage}>
                  <div className='trash-icon'>
                     <svg height="20" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img">
                        <path d="M4.878 22.116A2 2 0 0 0 6.875 24h10.229a2 2 0 0 0 1.995-1.881L20 7H4l.88 15.116zM22 3.5A1.5 1.5 0 0 1 20.5 5h-17a1.5 1.5 0 0 1 0-3h6V1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1h6A1.5 1.5 0 0 1 22 3.5z"></path>
                     </svg>
                  </div>
               </button>
            </div>
         )
      }
   }

   displayImagePreview() {             
      if (this.state.imageUrl) {
         return (
            <div className="image-preview-container" >
               <img src={this.state.imageUrl} />
               {this._displayTrash()}
            </div>
         )
      }
   }
   
   displayImageDesc() {
      if (this.state.imageDesc) {
         return (
            <div className="error-text" >{this.state.imageDesc}</div>
         )
      } else {
         return (
            <div className='desc'>Recommendation: use .jpg files smaller than 2 MB</div>
         )
      }
   }   

   render() {      
      return (
         <div className='pin-form-container'>
            <div aria-label='Create' className='pin-form-box'>
               <div className='pin-form-content'>
                  <div className='pin-form-top'>
                     <div className='pin-form-top-content'>
                        <div className='empty'></div>
                        <div className='board-list'>Board List</div>
                     </div>
                  </div>
                  <div className='pin-form-bottom'>
                     <div className='pin-form-bottom-content'>
                        <div className='pin-form-left'>
                           {/* <div id='image-preview-container'>
                              <img id='image-preview' alt='Image Preview'></img>                         
                           </div> */}
                           {this.displayImagePreview()}
                           <div className='upload-box'>
                              <div className='border'>
                                 <button className='upload-btn'>
                                    <svg height="32" width="32" viewBox="0 0 24 24" aria-label="Add an image or video" role="img"><path d="M24 12c0-6.627-5.372-12-12-12C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12zm-10.767 3.75a1.25 1.25 0 0 1-2.5 0v-3.948l-1.031 1.031a1.25 1.25 0 0 1-1.768-1.768L12 7l4.066 4.065a1.25 1.25 0 0 1-1.768 1.768l-1.065-1.065v3.982z"></path></svg>
                                 </button>
                                 <p>Click to upload</p>
                                 <input type='file' accept='image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp'
                                    onChange={this.handleImageUpload}>
                                 </input>
                                 <div className="upload-desc-container">
                                    {this.displayImageDesc()}
                                 </div>
                              </div>
                           </div>
                           {/* <div
                              className='save-from-site'
                              onClick={this.renderImageInputFromUrl}>
                              <p>Save from site</p>
                           </div> */}
                        </div>
                        <div className='pin-form-right'>
                           <div className='pin-title'>
                              <textarea
                                 placeholder='Add your title'
                                 onChange={this.update('title')}>
                              </textarea>
                           </div>

                           <div className='pin-detail'>
                              <textarea
                                 placeholder='Tell everyone what your Pin is about'
                                 onChange={this.update('detail')}>
                              </textarea>
                           </div>

                           <div className='pin-destination-link'>
                              <textarea
                                 placeholder='Add a destination link'
                                 onChange={this.update('link_url')}>
                              </textarea>
                           </div>                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default PinCreateForm;

