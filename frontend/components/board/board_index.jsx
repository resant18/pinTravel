import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component {
    constructor(props) {
        super(props);            
    }

    componentDidMount() {
        //
        //this.props.fetchUserBoards(this.props.user[0].id);
        //this.props.requestUser(this.props.loggedInUser);
    }

    render() {        
        const { user, boards, pins, permitted, showModal } = this.props;

        if (!boards) return null;
        const userBoards = boards.map((board, i) => {                                                
            const user_board_pins = pins.filter(pin => pin.board_id === board.id);

            return (   
                <div className='board-index-item' key={board.id}> 
                    <BoardIndexItem  board={board} pins={user_board_pins} username={user.username} permitted={permitted} showModal={showModal.bind(this)}/> 
                </div>
            )
        });

        return (
            <div className='board-index-container'>
                <div className='board-index'>
                    {userBoards}
                </div>     
            </div>
        )
    }
}

export default BoardIndex;
