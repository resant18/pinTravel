import React from 'react';

const BoardIndexItem = ({board}) => {   
    let arrContHeight = [0, 0, 0];
    

    const bg = 'http://localhost:3000/assets/pins/1-e54d52a0560338a4dc13217859b079fd38697d3f4094781125ffbdb589f070de.jpg'; 
    const imgStyle = {
        backgroundImage: `url(${bg})`
        // backgroundColor: 'black'
    }

    return (
        <div className="b-item">
            <div className="m-wrapper">  
                <div className="masonry">
                    <div className="m-item-frame">
                        <div className="m-item" className="m-content" style={imgStyle} />
                        
                    </div>
                    <div className="m-item-frame">
                        <div className="m-item" className="m-content" style={imgStyle} >
                        </div>
                    </div>
                    <div className="m-item-frame">
                        <div className="m-item" className="m-content" style={imgStyle} >
                        </div>
                    </div>
                    <div className="m-item-frame">
                        <div className="m-item" className="m-content" style={imgStyle} >
                        </div>
                    </div>
                    <div className="m-item-frame">
                        <div className="m-item" className="m-content" style={imgStyle} >
                        </div>
                    </div>
                    <div className="m-item-frame">
                        <div className="m-item" className="m-content" style={imgStyle} >
                        </div>
                    </div>
                    
                </div>          
            </div>
            <div>
                <h2>{board.name}</h2>
                <p>0 Pins</p>
            </div>
        </div>
    )
}

export default BoardIndexItem;
