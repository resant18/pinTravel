import React from 'react';
import PinIndexItem from './pin_index_item';
import { Waypoint } from 'react-waypoint';

class PinIndex extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         prevPage: 0,
         page: 1
         // isLoading: false
      };

      this.loadMorePins = this.loadMorePins.bind(this);
      this.updatePageNumber = this.updatePageNumber.bind(this);
   }

   updatePageNumber() {
      const page = this.state.prevPage + 1;
      this.setState({ prevPage: page });
   }

   loadMorePins() {
      const { fetchType, fetchPins, boardId, username } = this.props;

      // this.setState({ isLoading: true });
      switch (fetchType) {
         case 'feed':
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
         page: this.state.page + 1
         //  isLoading: false
      });
   }

   componentDidMount() {
      // this.props.clearPins();      
      this.loadMorePins();
   }

   renderPins() {
      const pins = this.props.pins.map((pin, i) => {
         return (
            <PinIndexItem pin={pin} key={i} showModal={this.props.showModal} currentUser={this.props.currentUser} />
         );
      });
      return pins;
   }

   renderWaypoint() {
      // if (!this.state.isLoading) {      
      return <Waypoint onEnter={this.loadMorePins} onUpdatePage={this.updatePageNumber} />;
      // }
   }

   _isBaseUrl(currentUrl) {
      let baseUrl = new RegExp(/^.*\//).exec(currentUrl)[0];

       return currentUrl === baseUrl;
   }

   render() {
      let pinIndexStyle;
      
      if (this._isBaseUrl(this.props.location.pathname) && !this.props.loggedIn) {
         pinIndexStyle = {
            position: 'fixed'
         }
      }

      return (
         <div className='pin-index-container' style={pinIndexStyle}>
            <div className='pin-index'>
               {this.renderPins()}
               {this.renderWaypoint()}               
            </div>
         </div>
      );
   }
}

export default PinIndex;
