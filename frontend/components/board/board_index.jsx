import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component {
    constructor(props) {
        super(props);            
    }

    componentDidMount() {
        //debugger
        //this.props.fetchUserBoards(this.props.user[0].id);
        //this.props.requestUser(this.props.loggedInUser);
    }

    render() {        
        const { boards } = this.props;

        return (   
            <section className="b-item-wrapper">
                {
                    boards.map(board => <BoardIndexItem board={board} />)
                }
            </section>         
        )
    }
}

export default BoardIndex;
