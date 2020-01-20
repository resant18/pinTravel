import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateBoard, deleteBoard } from '../../actions/board_actions';
import { showModal, hideModal } from '../../actions/modal_actions';
import { selectUserCreator } from '../../reducers/selector';

class BoardDeleteConfirmation extends React.Component {
   constructor(props) {
      super(props);

      this.handleDelete = this.handleDelete.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
   }

   handleDelete(e) {
      e.preventDefault();

      this.props.deleteBoard(this.props.boardId)
         .then(this.props.hideModal())
         .then(this.props.history.push(`/${this.props.user.username}`))
   }

   handleCancel(e) {      
      e.preventDefault();

      this.props.hideModal();
      this.props.showModal({ name: 'edit-board', selectedData: this.props.boardId })
   }

   render() {      
      return (
         <div>
            <div className='header'>
               <h1>Are you sure?</h1>
               <hr className='borderline' />
               <div className='body'>
                  <p>Once you delete a board and all of its Pins, you can't undo it.</p>
                  <button
                     className='delete-btn'
                     onClick={this.handleDelete}
                  >
                     Delete forever
                  </button>
                  <button
                     className='cancel-btn'
                     onClick={this.handleCancel}
                  >
                     Cancel
                  </button>

               </div>
            </div>
         </div>
      )
   }
}

const mapStateToProps = (state, ownProps) => {
   const boardId = state.ui.modal.selectedData;
   const board = state.entities.boards[boardId];
   const user = selectUserCreator(state.entities, board);

   return {
      boardId,
      board,
      user
      // formType: 'Update Board'
   }
};

const mapDispatchToProps = dispatch => ({
   showModal: modal => dispatch(showModal(modal)),
   hideModal: () => dispatch(hideModal()),
   updateBoard: board => dispatch(updateBoard(board)),
   deleteBoard: boardId => dispatch(deleteBoard(boardId))
});

export default withRouter(connect(
   mapStateToProps,
   mapDispatchToProps
)(BoardDeleteConfirmation));


