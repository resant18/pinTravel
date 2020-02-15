import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../actions/modal_actions';
import BoardCreateContainer from '../../components/board/board_create_container';
import BoardEditContainer from '../../components/board/board_edit_container';
import BoardDeleteConfirmation from '../../components/board/board_delete_confirmation';
import PinEditContainer from '../../components/pin/pin_edit_container';
import BoardPinsCreateContainer from '../../components/board/board_pins_create_container';

const Modal = ({ modal, hideModal, selectedData }) => { 
    if (!modal || modal === 'login' || modal === 'signup') {
        return null;
    }
    let component;

    switch (modal) {        
        case 'create-board':
            component = <BoardCreateContainer />
            break;
        case 'edit-board':
            component = <BoardEditContainer selectedData={selectedData} />
            break;
        case 'delete-board-confirm':
            component = <BoardDeleteConfirmation selectedData={selectedData} />
            break;        
        case 'edit-pin':
            component = <PinEditContainer selectedData={selectedData} />
            break;
        case 'save-to-board':
            component = <BoardPinsCreateContainer />
            break
        default:
            return null;
    }
  
    return (
        <div className="modal-main" onClick={hideModal}>
            <section className="modal-content" onClick={e => e.stopPropagation()}>
                {component}
            </section>
        </div>
    );
}

const mapStateToProps = (state) => {  
    return {
        modal: state.ui.modal && state.ui.modal.name,
        selectedData: state.ui.modal && state.ui.modal.selectedData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        hideModal: () => dispatch(hideModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
