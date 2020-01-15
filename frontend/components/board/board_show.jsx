import React from 'react';

class BoardShow extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      this.props.fetchBoard(this.props.boardId);
   }

   render() {
      const { board } = this.props;

      if (board) {
         return (
            <div>

               <section className='board-detail'>
                  <h4>{board.name}</h4>
                  <div className='total-pins'>
         <span>{pins.length}</span>
                  </div>
               </section>
               <section>
                  collection of pins here
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