import React from 'react';
import BoardEditCover from './board_edit_cover';
 
class BoardEditForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = { ...props.board, serverError: props.errors, showEditCover: false };

      this.handleEditBoardCover = this.handleEditBoardCover.bind(this);      
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleCloseForm = this.handleCloseForm.bind(this);
   }

   update(field) {
      return (e) => {
         switch (field) {
            case "name":
               this.setState({ [field]: e.target.value });
               break;
            case "secret":
               this.setState({ [field]: e.target.checked });
               break;
            default:
               break;
         }
      };
   }

   handleEditBoardCover(showEditCover) {      
      this.setState({ showEditCover });    
   }   

   handleSubmit(e) {
      e.preventDefault();

      this.props.updateBoard(this.state).then(this.props.hideModal());
   }

   handleDelete(e) {
      e.preventDefault();

      this.props.hideModal();
      this.props.showModal({
         name: "delete-board-confirm",
         selectedData: { dataType: "boardId", data: this.props.boardId, user: this.props.user },
      });
   }

   renderErrors() {
      if (this.props.errors === undefined) return "";

      return (
         <ul>
            {this.props.errors.map((error, i) => (
               <li key={`error-${i}`}>{error}</li>
            ))}
         </ul>
      );
   }

   renderBoardNameValidationError() {
      if (this.state.name === "") {
         return <div className='error-text'>Don't forget to name your board!</div>;
      }
   }

   handleCloseForm(e) {
      e.preventDefault();
      e.stopPropagation();

      this.props.hideModal();
      
   }
   

   render() {
      const isCreateButtonDisabled = this.state.name === "" ? true : false;
      const editFormStyle = this.state.showEditCover ? { backgroundColor: "rgba(0,0,0,.4)" } : {};

      return (
         <div>
            {this.state.showEditCover && (
               <BoardEditCover onShow={this.handleEditBoardCover} boardpins={this.props.boardpins} />
            )}

            <div aria-label='Edit' style={editFormStyle} className='board-form-box'>
               <div className='header'>
                  <h1>Edit your board</h1>
                  <button style={editFormStyle} className='close-btn' onClick={this.handleCloseForm}>
                     <svg height='20' width='20' viewBox='0 0 24 24' aria-hidden='true' aria-label='' role='img'>
                        <path d='M15.18 12l7.16-7.16c.88-.88.88-2.3 0-3.18-.88-.88-2.3-.88-3.18 0L12 8.82 4.84 1.66c-.88-.88-2.3-.88-3.18 0-.88.88-.88 2.3 0 3.18L8.82 12l-7.16 7.16c-.88.88-.88 2.3 0 3.18.44.44 1.01.66 1.59.66.58 0 1.15-.22 1.59-.66L12 15.18l7.16 7.16c.44.44 1.01.66 1.59.66.58 0 1.15-.22 1.59-.66.88-.88.88-2.3 0-3.18L15.18 12z'></path>
                     </svg>
                  </button>
               </div>
               <div className='body'>
                  <form className='board-form'>
                     <div className='board-field board-name'>
                        <p>Name</p>
                        <input
                           id='board-name-input'
                           className='input board-name'
                           value={this.state.name}
                           placeholder="E.g. 'Places to go' or 'Recipes to make'"
                           onChange={this.update("name")}
                           required
                        />
                        {this.renderBoardNameValidationError()}
                        <div className='error-text'>{this.renderErrors()}</div>
                     </div>

                     {/* <div className='board-field'>
                        <p>Cover</p>
                        <button className='form-button' onClick={() => this.handleEditBoardCover(true)}>
                           Change
                        </button>
                        <div className='cover-picture-box'>
                           <svg                              
                              height='24'
                              width='24'
                              viewBox='0 0 24 24'
                              aria-label='Add cover photo'
                              role='img'
                           >
                              <path d='M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4'></path>
                           </svg>
                        </div>
                     </div> */}

                     <div className='board-field board-visibility'>
                        <p>Visibility</p>
                        <div className='secret'>
                           <input
                              className='secret-box'
                              type='checkbox'
                              checked={this.state.secret}
                              onChange={this.update("secret")}
                           />
                           <div>
                              <div className='secret-info'>Keep this board secret.</div>
                              <a href='https://www.pinterest.com/_/_/help/article/change-board-privacy?source=secret_create'>
                                 Learn more
                              </a>
                           </div>
                        </div>
                     </div>
                  </form>

                  <div className='button-footer'>
                     <div className='button-group button-group-edit'>
                        <div className='button-group-left'>
                           <button id='delete-btn' className='form-button delete-btn' onClick={this.handleDelete}>
                              Delete
                           </button>
                        </div>
                        <div className='button-group-right'>
                           <button
                              id='cancel-btn'
                              className='form-button cancel-btn'
                              tabIndex='1'
                              onClick={this.handleCloseForm}
                           >
                              Cancel
                           </button>
                           <button
                              id='save-btn'
                              className='form-button save-btn ${createButtonStyle}'
                              disabled={isCreateButtonDisabled}
                              onClick={this.handleSubmit}
                           >
                              Save
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default BoardEditForm;

