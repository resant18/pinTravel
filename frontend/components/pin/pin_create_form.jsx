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

   handleSaveImageUpload(e) {
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

   

   update(field) {
      return (e) => {
         this.setState({ pin: { ...this.state.pin, [field]: e.target.value } });
      };
   }

   handleSubmit(e) {
      e.preventDefault();


   }

   renderFileError() {
      if (this.state.imageError) {
         return (
            <div className="error" >{this.state.photoError}</div>
         )
      } else {
         this.renderFileConstraint();
      }
   }

   renderFileConstraint() {
      return (
         <div className='constraint'>Recommendation: use .jpg files smaller than 2 MB</div>
      )
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

                        </div>
                        <div className='pin-form-right'>

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

