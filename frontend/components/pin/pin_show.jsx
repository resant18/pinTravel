import React from 'react';
import { Link } from 'react-router-dom';

class PinShow extends React.Component {
   constructor(props) {
      super(props);      

      this.state = {
         pinUrlVisibility: true
      };

      this.showModal = this.showModal.bind(this);
      this.showUrlLink = this.showUrlLink.bind(this);
      this.hideUrlLink = this.hideUrlLink.bind(this);      
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

   showUrlLink() {      
      if (this.props.pin.link_url) {
         this.setState({ pinUrlVisibility: true });         
      }
   }

   hideUrlLink() {
      this.setState({ pinUrlVisibility: true });
   }

   _formattedUrlLink() {
      const hostname = new URL(this.props.pin.link_url).hostname;
      return hostname.toString();
   }

   displayUrlLinkOverImage() {
      if (this.state.pinUrlVisibility) {
         return (
            <div className='pin-url'>
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="24" height="24" viewBox="0 0 24 24" >
                  <path d="M 3 3 L 3 21 L 21 21 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 3 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
               </svg>
               <a href={ this.props.pin.url_link } target='_blank' >{this._formattedUrlLink()}</a>
            </div>
         )
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

   displayTitle() {
      if (this.props.pin.link_url) {
         return (
            <a href={this.props.pin.link_url} target='_blank'>{ this.props.pin.title }</a>
         )
      } else {
         return this.props.pin.title;
      }
   }

   displayUrlLink() {
      if (this.props.pin.link_url) {
         return (
            <a href={this.props.pin.link_url} target='_blank'>{ this._formattedUrlLink() }</a>
         )
      } else {
         return this._formattedUrlLink();
      }
   }

   displayImage() {
      if (this.props.pin.link_url) {
         return (
            <div className='pin-image'>
               <a href={this.props.pin.link_url} target='_blank' alt={this.props.pin.title}>
                  <img src={this.props.pin.pictureUrl} alt={this.props.pin.title} />
               </a>
            </div>
         )
      } else {
         <div className='pin-image'>            
            <img src={this.props.pin.pictureUrl} alt={this.props.pin.title} />            
         </div>
      }
   }

   render() {
      if (!this.props.pin) return null;    

      const { pin, board, creator } = this.props;
      let user = this._isSameUser() ? 'You' : `${this.props.creator}`;
         
      return (
         <div className='pin-show-wrapper'>
            <div className='pin-show-container'>
               <div className='pin-show-box'>
                  <div className='pin-show-content-top'                      
                     onMouseEnter={this.showUrlLink}
                     onMouseLeave={this.hideUrlLink}>
                     { this.displayUrlLinkOverImage() }
                     { this.displayImage()}
                  </div>
                  <div className='pin-show-content-bottom'>
                     {this.displayToolbar()}   
                     <div className='pin-url-link'>
                        {this.displayUrlLink() }
                     </div>                      
                     <div className='pin-title'>                                             
                        { this.displayTitle() }
                     </div> 
                     <div className='pin-detail'>
                        { pin.detail }
                     </div>
                     <div className='pin-creator-info'>
                        <Link to={`/${pin.creator}`}>{user}</Link><span> saved to </span><Link to={`/boards/${board.id}`}>{board.name}</Link>                        
                     </div>                
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default PinShow;
