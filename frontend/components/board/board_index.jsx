import React from 'react';
import { Link, withRouter } from 'react-router-dom';
//import BoardCreateContainer from '../board/board_create_container';

class BoardIndex extends React.Component {
    constructor(props) {
        super(props);        
    }

    componentDidMount() {
        debugger
        this.props.fetchUserBoards(this.props.currentUserId);
        //this.props.requestUser(this.props.loggedInUser);
    }

    render() {
        // debugger
        // let createboard;
        // if (this.props.loggedInUser != this.props.currentSession) {
        //     createboard = (<div></div>);
        // } else {
        //     createboard = (
        //         <div className="board-index-create-broad"
        //             onClick={() => this.props.openModal({ modal: 'CreateBoard' })}>
        //             <img src={window.create_board} className="create-board-img" />
        //         </div>
        //     );
        // }

        let boards = this.props.boards.filter(board => board.user_id == this.props.currentUserId);
        // const boardPins = values(this.props.boards.)
        // debugger

        return (            
            <div className="user-profile-content">
                <div className="board-index">
                    {"Board Index Item"}
                </div>
            </div>
        )
    }
}

export default BoardIndex;
