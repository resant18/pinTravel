import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }

        this.displayBoardCover = this.displayBoardCover.bind(this);
        this.displayDefaultBoardCover = this.displayDefaultBoardCover.bind(this);        
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

    displayBoardCoverPins() {
        const halfStyle = {
            width: '50%',
            flex: '1 1 auto'
        }
        return (
            <div className="board-cover" >
                <div className="p-item border-line" style={{ width: '50%', height: '100%' }}>
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
    

    displayBoardCover() {
        // const BoardIndexItem = ({board, pins}) => {           
        //     let itemsHeight = [0, 0, 0];

        //     for (let i = 0; i++; i < 6) {
        //         let img, width, height, ratio;
        //         img = document.createElement('img');
        //         img.id = "m-item" + i.toString();
        //         img.src = "https://i.pinimg.com/564x/b9/43/49/b94349a0521d30f9baafe8ae19f05cc3.jpg"
        //         ratio = img.naturalWidth / 98.66;
        //         height = img.naturalHeight * ratio;
        //         img.height = height;
        //     }


        // const bg = 'http://localhost:3000/assets/pins/1-e54d52a0560338a4dc13217859b079fd38697d3f4094781125ffbdb589f070de.jpg'; 
        // const imgStyle = {
        //     // backgroundImage: `url(${bg})`
        //     backgroundColor: 'black',
        //     width: '20px',
        //     height: '20px'
        // }
        // const { pins } = this.props;
        
        // const pinDetail = Object.values(pins).map(pin =>
        //     (                                
        //         <div className="m-item-frame" key={pin.id}>                    
        //             <img className="m-item" className="m-content" style={imgStyle} />
        //         </div>
        //     )
        // );


        return this.displayDefaultBoardCover();
    }

    toggleEdit() {
        this.setState({ visible: !(this.visible) })
    }

    displayEdit() {
        if (this.state.visible && this.props.permitted) {
            return (
                <button
                    onClick={this.showModal}
                    className='b-index-link'>
                    <svg class="gUZ B9u U9O kVc" height="20" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M13.386 6.018l4.596 4.596L7.097 21.499 1 22.999l1.501-6.096L13.386 6.018zm8.662-4.066a3.248 3.248 0 0 1 0 4.596L19.75 8.848 15.154 4.25l2.298-2.299a3.248 3.248 0 0 1 4.596 0z"></path></svg>
                </button>
            )
        }
    }

    showModal(e) {
        this.props.showModal('edit-board', this.props.board.id);
    }

    render() {
        const { board, pins } = this.props;        
        const pinCount = Object.values(pins).length;
        
        return (
            <div className="b-item"
                onMouseEnter={this.toggleEdit}
                onMouseLeave={this.toggleEdit}>
            
                <Link to={`/boards/${board.id}`} >
                    {
                        this.displayBoardCover()
                    }
                    
                    <div className="board-info">
                        <h2>{board.name}</h2>
                        <p>{pinCount} {pinCount > 1 ? "Pins" : "Pin"}</p>
                    </div>
                </Link>
            </div>
        )
    }
    
}

export default BoardIndexItem;
