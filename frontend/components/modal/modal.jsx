import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../actions/modal_actions';
import BoardCreateContainer from '../../components/board/board_create_container';
import BoardEditContainer from '../../components/board/board_edit_container';

const Modal = ({ modal, hideModal, selectedData }) => { 
    debugger      
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
        case 'create-pin':
            component = <BoardCreateContainer />
            break;
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
    debugger  
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
