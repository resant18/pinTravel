import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateBoard, deleteBoard } from '../../actions/board_actions';
import { showModal, hideModal } from '../../actions/modal_actions';
import { selectUserCreator } from '../../reducers/selector';

class DeleteConfirmation extends React.Component {
   constructor(props) {
      super(props);

      this.handleDelete = this.handleDelete.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
   }

   handleDelete(e) {
      e.preventDefault();
      
      this.props.deleteBoard(this.props.data)
         .then(this.props.hideModal())
         // .then(this.props.history.push(`/${this.props.user.username}`))
   }

   handleCancel(e) {      
      e.preventDefault();

      this.props.hideModal();
      this.props.showModal({ name: 'edit-board', selectedData: this.props.boardId })
   }

   render() {      
      return (
         <div aria-label='Delete Confirm' className='board-delete-confirm-form'>
            <div className='header'>
               <h1>Are you sure?</h1>                  
            </div>            
            <div className='body'>
               <p>Once you delete a board and all of its Pins, you can't undo it.</p>               
            </div>
            <div className='button-footer'>
               <div className='button-group'>
                  <div className='button-group-right'>
                     <button
                        className='delete-btn'
                        onClick={this.handleDelete}
                     >
                        Delete forever
                     </button>
                        <button
                           className='cancel-btn focus'
                           onClick={this.handleCancel}
                        >
                           Cancel
                     </button>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

const mapStateToProps = (state, ownProps) => {   
   const data = state.ui.modal.selectedData.data;    
   const dataType = state.ui.modal.selectedData.dataType;
   // const board = state.entities.boards[boardId];
   // const user = selectUserCreator(state.entities, board);
   return {
      // boardId,
      // board,
      // user
      dataType,
      data
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
)(DeleteConfirmation));


