import React from 'react';

class BoardList extends React.Component {
   constructor(props) {
      super(props);

      this.state = { visible: false };

      this.hideVisibility = this.hideVisibility.bind(this);
      this.showVisibility = this.showVisibility.bind(this);
      this.handleSelectLink = this.handleSelectLink.bind(this);
      this.handleSelectBoard = this.handleSelectBoard.bind(this);
   }

   hideVisibility(e) {
      this.setState({ visible: false });
   }

   showVisibility(e) {
      this.setState({ visible: true });
   }

   handleSelectBoard(e) {
      this.props.onSelectBoard(this.props.board);
   }

   handleSelectLink() {
      if (this.state.visible) {
         return (
            <button
               className='select-btn'
               onClick={this.handleSelectBoard}>
               {this.props.text}
            </button>
         )
      }
   }

   render() {
      const { board } = this.props;

      return (
         <div
            className='board-option'
            onMouseEnter={this.showVisibility}
            onMouseLeave={this.hideVisibility}
            value={board.id}>
            <p>{board.name}</p>
            {this.handleSelectLink()}
         </div>
      )
   }
}

export default BoardList;
