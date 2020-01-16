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

      if (board) {
         return (
            <div>

               <section className='board-detail'>
                  <h4>{board.name}</h4>
                  <div className='total-pins'>
                     <span>{board_pins.length}</span>
                  </div>
               </section>
               <section className='board-pins-detail'>
                  <BoardPinIndexContainer user={user} board={board} /> 
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