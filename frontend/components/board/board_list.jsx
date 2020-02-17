import React from 'react';
import { connect } from 'react-redux';
import { selectUserBoards, selectUserPins } from '../../reducers/selector';
import { fetchBoards } from '../../actions/board_actions';
import { fetchUserPins } from '../../actions/pin_actions';
import DropDown from '../element/drop_down';

class BoardList extends React.Component {
   constructor(props) {
      super(props);

      this.handleSelectItem = this.handleSelectItem.bind(this);
   }

   componentDidMount() {
      if (!this.props.boards) {
         // debugger
         this.props.fetchBoards();
      }
      if (!this.props.pins) {
         // debugger
         this.props.fetchUserPins(this.props.username, 0);
      }
   }

   handleSelectItem(selectedItem) {
      this.props.onSelectItem(selectedItem);
   }   
   
   render() {      
      if (this.props.boards.length === 0) return null;
      
      return (
         <div className="dropdown-board-list">
            <div>
               <DropDown
                  title={
                     this.props.headerTitle
                        ? this.props.headerTitle
                        : this.props.boards[0].name
                  }
                  list={this.props.boards}
                  images={this.props.pins}
                  onSelectItem={this.handleSelectItem}
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