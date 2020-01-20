import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false
        }
        
        this.displayDefaultBoardCover = this.displayDefaultBoardCover.bind(this);        
        this.displayBoardCoverPins = this.displayBoardCoverPins.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);  
        this.showModal = this.showModal.bind(this);              
    }

    displayDefaultBoardCover() {                        
        return (            
            <div className="board-cover" >
                <div className="p-item border-line" style={{width: '50%', height: '100%'}}>
                    <div style={{ width: '100%', height: '100%' }} />
                                    
                </div>
                <div className="border-line" style={{ width: '25%', height: '100%', display: 'flex', flexDirection: 'column' }}>                    
                    <div className="p-item border-line" style={{ width: '100%', height: '75%' }} />                        
                    <div className="p-item border-line" style={{ width: '100%', height: '25%' }} />                            
                </div>                    
                <div style={{ width: '25%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div className="p-item border-line" style={{ width: '100%', height: '50%' }} />                        
                    <div className="p-item border-line" style={{ width: '100%', height: '50%' }} />                        
                </div>
            </div>            
        )
    }

    _generateRandomNumber(limit, count) {
        let arr = [];
        while (arr.length < 6) {
            let r = Math.floor(Math.random() * limit) + 1;
            if (arr.indexOf(r) === -1) 
                if (arr.length >= count)
                    arr.push(-1);
                else
                    arr.push(r);
    
        }
        return arr;
    }

    _pinsIndex(pins) {
        let pinsIdx = [];
        let i = 0;

        while (i < 5) {
          if (i < pins.length) pinsIdx.push(pins[i].pin_id);
          else pinsIdx.push(-1);
          i++;
        }

        return pinsIdx;
    }

    displayBoardCoverPins(pins) {  
        // let pins = this._generateRandomNumber(25, pinCount);
        
        let pinsIdx = this._pinsIndex(pins);        

        return (
            <div className="board-cover" >
                <div className="p-item border-line" style={{ width: '50%', height: '100%' }}>
                    <div className="bg-cover" style={{ width: '100%', height: '100%', background: `url(${window.pins[pinsIdx[0]]})` }} />
                </div>
                <div className="border-line" style={{ width: '25%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div className="p-item border-line bg-cover" style={{ width: '100%', height: '75%', background: `url(${window.pins[pinsIdx[1]]})` }} />
                    <div className="p-item border-line bg-cover" style={{ width: '100%', height: '25%', background: `url(${window.pins[pinsIdx[2]]})` }} />
                </div>
                <div style={{ width: '25%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div className="p-item border-line bg-cover" style={{ width: '100%', height: '50%', background: `url(${window.pins[pinsIdx[3]]})` }} />
                    <div className="p-item border-line bg-cover" style={{ width: '100%', height: '50%', background: `url(${window.pins[pinsIdx[4]]})` }} />
                </div>
            </div>
        )
    }

    // TODO: Use Pinterest's logic to render the board cover pin images dynamically
    displayBoardCoverPins2(pins) {                
        let itemsHeight = [0, 0, 0];
        
        let pinsLayout = "<div></div>";
        
        for (let i = 0; i++; i < 6) {            
            console.log(pins.length);

            if (i < pins.length) {                
                
                let img, width, height, ratio;
                img = document.createElement('div');
                img.id = "m-item" + i.toString();
                img.src = window.pin2;
                ratio = img.naturalWidth / 98.66;
                height = img.naturalHeight * ratio;
                img.height = height;
                imgStyle = {
                    background: `url(${window.pin3}`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }
                pinsLayout = 
                    `<div style="${imgStyle}">
                    </div>`;
            } else {
                pinsLayout = 
                    `<h2>something<h2>`;
            }
            
        }

        console.log(pinsLayout);
        
        
        return (
            pinsLayout
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
                        <svg className="svg" height="20" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img">
                            <path d="M13.386 6.018l4.596 4.596L7.097 21.499 1 22.999l1.501-6.096L13.386 6.018zm8.662-4.066a3.248 3.248 0 0 1 0 4.596L19.75 8.848 15.154 4.25l2.298-2.299a3.248 3.248 0 0 1 4.596 0z"></path>
                        </svg>
                    </div>
                </button>
            )
        }
    }

    showModal(e) {
        debugger
        this.props.showModal('edit-board', this.props.board.id);
    }

    render() {
        const { board, pins } = this.props;       
        const pinsData = Object.values(pins);         
        const pinCount = pinsData.length;        
        
        if ( !board ) return null;
        
        // let pinIdx = this._generateRandomNumber(25);
        const boardCover = (pinCount === 0 ? this.displayDefaultBoardCover() : this.displayBoardCoverPins(pinsData));

        return (
            <div className="b-item"
                onMouseEnter={this.toggleEdit}
                onMouseLeave={this.toggleEdit}>
            
                <Link to={`/${this.props.username}/boards/${board.id}`} >
                    <div>
                        {                        
                            boardCover
                        }
                        
                        <div className="board-info">
                            <h2>{board.name}</h2>                            
                            <p>{pinCount} {pinCount > 1 ? "Pins" : "Pin"}</p>
                        </div>
                    </div>
                </Link>
                {this.displayEdit()}
            </div>
        )
    }
    
}

export default BoardIndexItem;
