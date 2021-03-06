import React from 'react';
import PinIndexBoardContainer from '../pin/pin_index_board_container';
import { Link } from 'react-router-dom';

class BoardShow extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         dropDownOpen: false
      }

      this.browseBack = this.browseBack.bind(this);      
      this.showDropDown = this.showDropDown.bind(this);
      this.hideDropDown = this.hideDropDown.bind(this);            
      this.showModal = this.showModal.bind(this);
   }

   componentDidMount() {
      this.props.fetchBoard(this.props.boardId);
   }

   componentWillUnmount() {
      document.removeEventListener('mousedown', this.hideDropDown);
   }

   browseBack() {            
      this.props.history.goBack();
   }

   showDropDown(e) {
      e.preventDefault();

      this.setState({ dropDownOpen: true }, () => {
         document.addEventListener('mousedown', this.hideDropDown);
      });
   }

   hideDropDown(e) {
      if (!this.node) return null;
      
      if (!this.node.contains(e.target)) {
         this.setState({ dropDownOpen: false }, () => {
            document.removeEventListener('mousedown', this.hideDropDown);
         }); 
      }
   }   

   renderDropDown() {
      if (this.state.dropDownOpen) {
         return (
            <div id='board-show-add-pin' ref={(node) => (this.node = node)} className='drop-down'>
               <div className='frame'>
                  <div className='list' role='list'>
                     <a href='#/pin-builder' className='create-pin item add-pin'>
                        Create Pin
                     </a>
                  </div>
               </div>
            </div>
         );
      }
   }
   
   showModal(modal) {    
      return e => {
         this.props.showModal(modal);
         this.hideDropDown(e);
      }
   }   

   displayToolbar() {  
      if (!this.props.currentUser) return;

      if (this.props.currentUser.username === this.props.user.username) {
         return (
            <div className='toolbar'>
               <div className='toobar-wrapper'>
                  <button aria-label='Back' className='tool-button back-button' type='button' onClick={this.browseBack}>
                     <div>
                        <svg className='svg-back' height='20' width='20' viewBox='0 0 24 24' aria-label='Back' role='img'>
                           <path d='M17.28 24c-.57 0-1.14-.22-1.58-.66L4.5 12 15.7.66a2.21 2.21 0 0 1 3.15 0c.87.88.87 2.3 0 3.18L10.79 12l8.06 8.16c.87.88.87 2.3 0 3.18-.44.44-1 .66-1.57.66'></path>
                        </svg>
                     </div>
                  </button>
                  <button aria-label='Add Pin' className='tool-button add-button' type='button' onClick={this.showDropDown} >
                     <div>
                        <svg className='svg-add' height='24' width='24' viewBox='0 0 24 24' aria-hidden='true' aria-label='' role='img'>
                           <path d='M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4'></path>
                        </svg>
                     </div>
                  </button>
                  { this.renderDropDown() }
                  <button aria-label='Edit board' className='tool-button' type='button' onClick={this.showModal({ name: 'edit-board', selectedData: this.props.boardId })} >
                     <div>
                        <svg className='svg' height='24' width='24' viewBox='0 0 24 24' aria-hidden='true' aria-label='' role='img'>
                           <path d='M13.386 6.018l4.596 4.596L7.097 21.499 1 22.999l1.501-6.096L13.386 6.018zm8.662-4.066a3.248 3.248 0 0 1 0 4.596L19.75 8.848 15.154 4.25l2.298-2.299a3.248 3.248 0 0 1 4.596 0z'></path>
                        </svg>
                     </div>
                  </button>
               </div>
            </div>
         )
      } else {
         return (
            <div className='toolbar'>
               <div className='toobar-wrapper'>
                  <button aria-label='Back' className='tool-button back-button' type='button' onClick={this.browseBack}>
                     <div>
                        <svg className='svg-back' height='20' width='20' viewBox='0 0 24 24' aria-label='Back' role='img'>
                           <path d='M17.28 24c-.57 0-1.14-.22-1.58-.66L4.5 12 15.7.66a2.21 2.21 0 0 1 3.15 0c.87.88.87 2.3 0 3.18L10.79 12l8.06 8.16c.87.88.87 2.3 0 3.18-.44.44-1 .66-1.57.66'></path>
                        </svg>
                     </div>
                  </button>
               </div>
            </div>
         )
      }
   }  
   
   renderSecretIcon() {      
      if (this.props.board.secret) {
         return (
            <div className='secret'>
               <svg height="16" width="16" viewBox="0 0 24 24" aria-label="Secret board" role="img"><path d="M8 10V7c0-2.206 1.794-4 4-4s4 1.794 4 4v3H8zm11 .017V7c0-3.86-3.141-7-7-7S5 3.14 5 7v3.017a8.698 8.698 0 0 0-1.75 5.233 8.75 8.75 0 1 0 17.5 0A8.698 8.698 0 0 0 19 10.017z"></path></svg>
            </div>
         )
      }
   }

   render() {
      const { board, board_pins, user } = this.props;
      const pinTotal = board_pins.length;
      const pinWord = pinTotal > 1 ? 'Pins' : 'Pin';

      if (board) {
         return (
            <div>
               <section className='info-bar'>
                  {this.displayToolbar()}
                  <div className='board-pins-header'>
                     <div className='board-detail'>
                        <h4>{board.name}</h4>
                        <div className='board-secret-pin'>
                           {this.renderSecretIcon()}
                           <div className='total-pins'>
                              <span>{pinTotal}</span>&nbsp;{pinWord}
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <section className='board-pins-detail'>
                  <div className='pins'>
                     <PinIndexBoardContainer user={user} board={board} /> 
                  </div>
               </section>
            </div>
         )
      } else {
         return (
            <div></div>
         )
      }
   }
}

export default BoardShow;