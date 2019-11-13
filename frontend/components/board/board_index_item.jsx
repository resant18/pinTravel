import React from 'react';

class BoardIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
        const imgStyle = {
            // backgroundImage: `url(${bg})`
            backgroundColor: 'black'
        }

        const { board, pins } = this.props;
        const totalPins = Object.keys(pins).length;

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
                    <p>{totalPins} {totalPins > 1 ? "Pins" : "Pin"}</p>
                </div>
            </div>
        )
    }
    
}

export default BoardIndexItem;
