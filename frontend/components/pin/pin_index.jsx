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
  }

  fetchPinsData() {
    const { fetchType, fetchPins, boardId, username } = this.props;

    switch (fetchType) {
      case "feed":
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
      page: this.state.page + 1
    });
  }

  fetchMorePins() {
    const value = this.state.prevPage + 1;
    this.setState({ prevPage: value });
  }

  componentDidMount() {
    
    this.props.clearPins()
      // .then(() => this.fetchMorePins);

    this.setState({ page: this.state.page + 1 });
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
      <div className="pin-index">
        {pins}
        <Waypoint onEnter={this.fetchPinsData.bind(this)} />
      </div>
    );
  }
}

export default PinIndex;
