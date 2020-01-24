import React from 'react';
import PinIndexItem from './pin_index_item';
import { Waypoint } from 'react-waypoint';

class PinIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevPage: 0,
      page: 1
    };

    this.fetchMorePins = this.fetchMorePins.bind(this);
    this.fetchPinsData = this.fetchPinsData.bind(this);
  }

  fetchPinsData() {
    const { fetchType, fetchPins, boardId, username } = this.props;
  
    switch (fetchType) {
      case "feed":
        debugger
        fetchPins(this.state.page);
        break;
      case "user":
        fetchPins(username, this.state.page);
        break;
      case "board":
        fetchPins(boardId, this.state.page);
        break;
      default:
    }

    this.setState({
      prevPage: this.state.page,
      page: this.state.page + 1
    });
  }

  fetchMorePins() {
    const value = this.state.prevPage + 1;
    this.setState({ prevPage: value });
  }

  componentDidMount() {        
    // this.props.clearPins();
    // if (!this.props.selectedBoardPins)
    //   this.fetchPinsData();
  }

  render() {
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

    return (
      <div className="pins">
        <div className="pin-index">
          {pins}
          <Waypoint onEnter={this.fetchPinsData} />
        </div>
      </div>
    );
  }
}

export default PinIndex;
