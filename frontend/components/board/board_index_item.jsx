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
        this.setState({ editable: !(this.state.editable) });
    }

    displayEdit() {        
        if (this.state.editable && this.props.permitted) {
            return (
                <button
                    aria-label='Edit Board'
                    onClick={this.showModal}
                    className='tool-button board-edit-button'
                    type='button'
                    style={{width: '40px', height: '40px'}}
                >                    
                    <svg className='svg' height='20' width='20' viewBox='0 0 24 24' aria-hidden='true' aria-label='' role='img'>
                        <path d='M13.386 6.018l4.596 4.596L7.097 21.499 1 22.999l1.501-6.096L13.386 6.018zm8.662-4.066a3.248 3.248 0 0 1 0 4.596L19.75 8.848 15.154 4.25l2.298-2.299a3.248 3.248 0 0 1 4.596 0z'></path>
                    </svg>                    
                </button>
            )
        }
    }

    showModal(e) {    
        e.preventDefault();    
        this.props.showModal({ name: 'edit-board', selectedData: this.props.board.id });
    }

    renderSecretIcon() {        
        if (this.props.board.secret) {
            return (
                <div className='secret'>
                    <svg height="16" width="16" viewBox="0 0 24 24" aria-label="Secret board" role="img"><path d="M8 10V7c0-2.206 1.794-4 4-4s4 1.794 4 4v3H8zm11 .017V7c0-3.86-3.141-7-7-7S5 3.14 5 7v3.017a8.698 8.698 0 0 0-1.75 5.233 8.75 8.75 0 1 0 17.5 0A8.698 8.698 0 0 0 19 10.017z"></path></svg>
                </div>
            )
        }
    }

    render() {        
        const { board, pins } = this.props;       
        const pinsData = Object.values(pins);         
        const pinCount = pinsData.length;        
        
        if ( !board ) return null;                

        console.log("render");

        return (
            <div key={board.id} className='board-item-content'
                onMouseEnter={this.toggleEdit}
                onMouseLeave={this.toggleEdit}>
            
                <Link to={`/${this.props.username}/boards/${board.id}`} >
                    <div className='board-item-box'>
                        {                        
                            this.displayBoardCoverPins(pinsData)
                        }
                    
                        <div className='board-info'>
                            <h2>{board.name}</h2> 
                            <div className='board-secret-pin'>
                                {this.renderSecretIcon()}                           
                                <p>{pinCount} {pinCount > 1 ? 'Pins' : 'Pin'}</p>
                            </div>
                        </div>
                    </div>
                </Link>
                {this.displayEdit()}
            </div>
        )
    }
    
}

export default BoardIndexItem;
