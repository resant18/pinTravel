import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false
        }
                
        this.toggleEdit = this.toggleEdit.bind(this);  
        this.showModal = this.showModal.bind(this);              
    }   

    _getPictureUrl(pin) {
        return pin ? `url('${pin.pictureUrl}')` : 'none';
    }

    displayBoardCoverPins(pins) {          
        return (
            <div className='board-cover' >
                <div className='p-item border-line' style={{ width: '50%', height: '100%' }}>
                    <div className='bg-cover' style={{ width: '100%', height: '100%', background: `${this._getPictureUrl(pins[0])}` }} />
                </div>
                <div className='border-line' style={{ width: '25%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div className='p-item border-line bg-cover' style={{ width: '100%', height: '75%', background: `${this._getPictureUrl(pins[1])}` }} />
                    <div className='p-item border-line bg-cover' style={{ width: '100%', height: '25%', background: `${this._getPictureUrl(pins[2])}` }} />
                </div>
                <div style={{ width: '25%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div className='p-item border-line bg-cover' style={{ width: '100%', height: '50%', background: `${this._getPictureUrl(pins[3])}` }} />
                    <div className='p-item border-line bg-cover' style={{ width: '100%', height: '50%', background: `${this._getPictureUrl(pins[4])}` }} />
                </div>
            </div>
        )
    }    
    

    toggleEdit(e) {
        e.preventDefault();        
        this.setState({ editable: !(this.state.editable) });
    }

    displayEdit() {        
        if (this.state.editable && this.props.permitted) {
            return (
                <button
                    aria-label='Edit Board'
                    onClick={this.showModal}
                    className='tool-buttons edit-button'
                    type='button'
                >
                    <div className='svg-40'>
                        <svg className='svg' height='20' width='20' viewBox='0 0 24 24' aria-hidden='true' aria-label='' role='img'>
                            <path d='M13.386 6.018l4.596 4.596L7.097 21.499 1 22.999l1.501-6.096L13.386 6.018zm8.662-4.066a3.248 3.248 0 0 1 0 4.596L19.75 8.848 15.154 4.25l2.298-2.299a3.248 3.248 0 0 1 4.596 0z'></path>
                        </svg>
                    </div>
                </button>
            )
        }
    }

    showModal(e) {        
        this.props.showModal({ name: 'edit-board', selectedData: this.props.board.id });
    }

    render() {
        const { board, pins } = this.props;       
        const pinsData = Object.values(pins);         
        const pinCount = pinsData.length;        
        
        if ( !board ) return null;                

        return (
            <div className='board-item-content'
                onMouseEnter={this.toggleEdit}
                onMouseLeave={this.toggleEdit}>
            
                <Link to={`/${this.props.username}/boards/${board.id}`} >
                    <div>
                        {                        
                            this.displayBoardCoverPins(pinsData)
                        }
                    
                        <div className='board-info'>
                            <h2>{board.name}</h2>                            
                            <p>{pinCount} {pinCount > 1 ? 'Pins' : 'Pin'}</p>
                        </div>
                    </div>
                </Link>
                {this.displayEdit()}
            </div>
        )
    }
    
}

export default BoardIndexItem;
