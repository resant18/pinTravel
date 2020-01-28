import React from 'react';
import PinIndexItem from './pin_index_item';
import { Waypoint } from 'react-waypoint';

class PinIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevPage: 0,
      page: 1, 
      // isLoading: false
    };
    
    this.loadMorePins = this.loadMorePins.bind(this);
    // this.updatePageNumber = this.updatePageNumber.bind(this);
  }

  loadMorePins() {
    const { fetchType, fetchPins, boardId, username } = this.props;
  
    // this.setState({ isLoading: true});
    switch (fetchType) {
      case 'feed':
        console.log('fetch pins');        
        fetchPins(this.state.page);
        break;
      case 'user':
        fetchPins(username, this.state.page);
        break;
      case 'board':
        fetchPins(boardId, this.state.page);
        break;
      default:
    }

    this.setState({
      // prevPage: this.state.page,
      page: this.state.page + 1,
      // isLoading: false
    });
  }

  // updatePageNumber() {
  //   const add = this.state.prevPage + 1;
  //   this.setState({ prevPage: add });
  // }

  componentDidMount() {        
    this.props.clearPins();
    // if (!this.props.selectedBoardPins)
    this.loadMorePins();
  }

  renderPins() {
    const pins = this.props.pins.map((pin, i) => {
      return (
        <PinIndexItem
          pin={pin}
          key={i}
          showModal={this.props.showModal}
          currentUser={this.props.currentUser}
        />
      );
    });
    return pins;
  }

  renderWaypoint() {      
    // if (!this.state.isLoading) {
      console.log('calling waypoint:' + this.state.page);
      return (
        <Waypoint onEnter={this.loadMorePins} />
      );
    // }
  }  
  
  render() {   
    return (
      <div className='pin-index-container'>        
        <div className='pin-index'>
          {this.renderPins()}
          {this.renderWaypoint()}
        </div>
      </div>
    );
  }
}

export default PinIndex;
