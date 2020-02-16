import React from 'react';
import { connect } from 'react-redux';
import { selectUserBoards, selectUserPins } from '../../reducers/selector';
import { fetchBoards } from '../../actions/board_actions';
import { fetchUserPins } from '../../actions/pin_actions';
import DropDown from '../element/drop_down';

class BoardList extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      if (!this.props.boards) {
         debugger
         this.props.fetchBoards();
      }
      if (!this.props.pins) {
         debugger
         this.props.fetchUserPins(this.props.username, 0);
      }
   }
   
   render() {
      if (this.props.boards.length === 0 || this.props.pins.length === 0) return null;
      
      return (
         <div className='dropdown-board-list'>
            <div>
               <DropDown
                  title={this.props.boards[0] ? this.props.boards[0].name : 'Choose board'}
                  list={this.props.boards}
                  images={this.props.pins}
                  // resetThenSet={this.resetThenSet}
               />
            </div>
         </div>
      );
   }
}


const mapStateToProps = (state, ownProps) => {      
   const currentUser = state.entities.users[state.session.id] || {}; 
   const boards = selectUserBoards(state.entities, currentUser, true);
   const pins = selectUserPins(state.entities, currentUser);

   return {
      boards,
      pins
   }
};


const mapDispatchToProps = dispatch => ({
   fetchBoards: () => dispatch(fetchBoards()),
   fetchUserPins: (username, page) => dispatch(fetchUserPins(username, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardList);