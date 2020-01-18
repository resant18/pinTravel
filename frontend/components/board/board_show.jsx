import React from 'react';
import BoardPinIndexContainer from './board_pin_index_container';

class BoardShow extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      this.props.fetchBoard(this.props.boardId);
   }

   render() {
      const { board, board_pins, user } = this.props;
      const pinTotal = board_pins.length;
      const pinWord = pinTotal > 1 ? 'Pins' : 'Pin';

      if (board) {
         return (
            <div>
               <section className='info-bar'>
                  <div className='toolbar'>
                     <div className='toobar-wrapper'>
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