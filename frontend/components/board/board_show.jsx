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

               <section className='board-pins-header'>
                  <div className='board-detail'>
                     <h4>{board.name}</h4>
                     <div className='total-pins'>
                        <span>{pinTotal}</span>&nbsp;{pinWord}
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