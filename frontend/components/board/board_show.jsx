import React from 'react';
import BoardPinIndexContainer from './board_pin_index_container';

class BoardShow extends React.Component {
   constructor(props) {
      super(props);

      this.browseBack = this.browseBack.bind(this);
   }

   componentDidMount() {
      this.props.fetchBoard(this.props.boardId);
   }

   browseBack() {
      this.props.history.goBack();
   }

   displayToolbar() {      
      if (this.props.currentUser.username === this.props.user.username) {
         return (
            <div className='toolbar'>
               <div className='toobar-wrapper'>
                  <button aria-label="Back" className="back-button" type="button" onClick={this.browseBack}>
                     <div>
                        <svg className="svg-back" height="20" width="20" viewBox="0 0 24 24" aria-label="Back" role="img">
                           <path d="M17.28 24c-.57 0-1.14-.22-1.58-.66L4.5 12 15.7.66a2.21 2.21 0 0 1 3.15 0c.87.88.87 2.3 0 3.18L10.79 12l8.06 8.16c.87.88.87 2.3 0 3.18-.44.44-1 .66-1.57.66"></path>
                        </svg>
                     </div>
                  </button>
                  <button aria-label="Add Pin" className="add-button" type="button">
                     <div>
                        <svg className="svg-add" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img">
                           <path d="M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4"></path>
                        </svg>
                     </div>
                  </button>
                  <button aria-label="Edit board" className="edit-button" type="button">
                     <div>
                        <svg className="svg-edit" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img">
                           <path d="M13.386 6.018l4.596 4.596L7.097 21.499 1 22.999l1.501-6.096L13.386 6.018zm8.662-4.066a3.248 3.248 0 0 1 0 4.596L19.75 8.848 15.154 4.25l2.298-2.299a3.248 3.248 0 0 1 4.596 0z"></path>
                        </svg>
                     </div>
                  </button>
               </div>
            </div>
         )
      }
   }

   displaydropDown() {

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
                        <div className='total-pins'>
                           <span>{pinTotal}</span>&nbsp;{pinWord}
                        </div>
                     </div>
                  </div>
               </section>
               <section className='board-pins-detail'>
                  <div className='pins'>
                     <BoardPinIndexContainer user={user} board={board} /> 
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