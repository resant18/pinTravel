import React from 'react';

class PinCreateForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         pin: {
            pin_id: null, title: '', detail: '',
            lat: 0.0, lng: 0.0, link_url: ''
         },
         showBoardDropDown: false,
         ImageFile: null,
         ImageUrl: null,
         ImageError: null,
         ImageType: null,
      };

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

   renderImageInputFromUrl() {
      // render the input box
   }

   handleSaveImageFromUrl() {
      const img = new Image();
      img.onload = () => {         
         this.setState({                        
            photoType: 'external'
         });
      };
      img.src = this.state.photoUrl;
   }

   handleUploadImage(e) {
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();

      fileReader.onloadend = () => {
         const img = new Image();         
         img.src = fileReader.result;
         this.setState({
            imageFile: file,
            imageUrl: fileReader.result,
            imageType: 'upload'
         });
      };
      if (file && file.type === 'image/jpeg') {
         if (file.size < 2000000) {
            fileReader.readAsDataURL(file);
            this.setState({ imageError: null });
         } else {
            this.setState({ imageError: 'Please use a .jpg file less than 2MB' });
         }
      }
   }

   displayImagePreview() {
      if (this.state.ImageUrl) {
         return (
            <div className="image-preview" >
               <img src={this.state.ImageUrl} />
            </div>
         )
      }
   }

   update(field) {
      return (e) => {
         this.setState({ pin: { ...this.state.pin, [field]: e.target.value } });
      };
   }

   handleSubmit(e) {
      e.preventDefault();


   }

   renderUploadNote() {
      if (this.state.imageError) {
         return (
            <div className="error" >{this.state.photoError}</div>
         )
      } else {
         return (
            <div className='constraint'>Recommendation: use .jpg files smaller than 2 MB</div>
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
                     <div className='pin-form'>
                        <div className='pin-form-left'>
                           {this.displayImagePreview()}                           
                           <div className='upload-box'>
                              <div className='upload-box-border'>
                                 <button className='upload-btn'>
                                    <svg height="32" width="32" viewBox="0 0 24 24" aria-label="Add an image or video" role="img"><path d="M24 12c0-6.627-5.372-12-12-12C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12zm-10.767 3.75a1.25 1.25 0 0 1-2.5 0v-3.948l-1.031 1.031a1.25 1.25 0 0 1-1.768-1.768L12 7l4.066 4.065a1.25 1.25 0 0 1-1.768 1.768l-1.065-1.065v3.982z"></path></svg>
                                 </button>
                                 <p>Click to upload</p>
                                 <input type='file' accept='image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp'
                                    onChange={this.handleUploadImage.bind(this)}>
                                 </input>
                                 <div className="upload-note">
                                    {this.renderUploadNote()}
                                 </div>
                              </div>
                           </div>
                           <div
                              className='save-from-site'
                              onClick={this.renderImageInputFromUrl}>
                              <p>Save from site</p>
                           </div>
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

                           <div className='pin-url'>
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

