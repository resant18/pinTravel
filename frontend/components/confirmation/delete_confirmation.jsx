import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteBoard } from '../../actions/board_actions';
import { deletePin } from '../../actions/pin_actions';
import { showModal, hideModal } from '../../actions/modal_actions';

const setOptions = (dataType) => {
   if (dataType === 'boardId') {
      return {
         modalName: 'edit-board',
         confirmText: `Once you delete a board and all of its Pins, you can't undo it.`,
         buttonText: 'Delete forever'
      }
   } else if (dataType === 'boardPinsId') {
      return {
         modalName: 'edit-pin',
         confirmText: `Once you delete a Pin, you can't undo it.`,
         buttonText: "Delete Pin"
      };
   }
}

class DeleteConfirmation extends React.Component {
   constructor(props) {
      super(props);

      this.options = setOptions(this.props.dataType);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
      
   }

   handleDelete(e) {
      e.preventDefault();
      
      if (this.props.dataType === 'boardId') {         
         this.props.deleteBoard(this.props.data)
            .then(this.props.hideModal())
            .then(this.props.history.push(`/${this.props.user.username}`))
      }
      else if (this.props.dataType === 'boardPinsId') {
         this.props.deletePin(this.props.data)
            .then(this.props.hideModal());
      }
   }

   handleCancel(e) {      
      e.preventDefault();

      this.props.hideModal();
      this.props.showModal({
         name: this.options.modalName,
         selectedData: this.props.data
      });
   }   

   render() {      
      return (
         <div aria-label="Delete Confirm" className="board-delete-confirm-form">
            <div className="header">
               <h1>Are you sure?</h1>
            </div>
            <div className="body">
               <p>{this.options.confirmText}</p>
            </div>
            <div className="button-footer">
               <div className="button-group">
                  <div className="button-group-right">
                     <button className="delete-btn" onClick={this.handleDelete}>
                        {this.options.buttonText}
                     </button>
                     <button
                        className="cancel-btn focus"
                        onClick={this.handleCancel}
                     >
                        Cancel
                     </button>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state, ownProps) => {   
   const data = state.ui.modal.selectedData.data;    
   const dataType = state.ui.modal.selectedData.dataType;
   
   return {      
      dataType,
      data
   }
};

const mapDispatchToProps = dispatch => ({
   showModal: modal => dispatch(showModal(modal)),
   hideModal: () => dispatch(hideModal()),   
   deleteBoard: boardId => dispatch(deleteBoard(boardId)),
   deletePin: boardPinId => dispatch(deletePin(boardPinId))
});

export default withRouter(connect(
   mapStateToProps,
   mapDispatchToProps
)(DeleteConfirmation));


