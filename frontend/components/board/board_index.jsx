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
        const { boards, pins } = this.props;

        if (!boards) return null;
        const userBoards = boards.map((board, i) => {
            const board_pins = pins.filter(pin => pin.board_id === board.id);

            return (   
                <div key={board.id}> 
                    <BoardIndexItem board={board} pins={board_pins}/> 
                </div>
            )
        });

        return (
            <section className="b-item-wrapper">
                {
                   userBoards
                }
            </section>     
        )
    }
}

export default BoardIndex;
