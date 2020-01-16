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
                        <button aria-label="Board Actions" className="board-action" type="button">
                           <div>
                              <div className="INd zI7 iyn Hsu">
                                 <svg className="svg-add" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img">
                                    <path d="M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4"></path>
                                 </svg>
                              </div>
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