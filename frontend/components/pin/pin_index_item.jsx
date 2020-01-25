import React from "react";
import { Link, withRouter } from "react-router-dom";

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      visible: false 
    };
    this.turnOffVisibility = this.turnOffVisibility.bind(this);
    this.turnOnVisibility = this.turnOnVisibility.bind(this);
    this.renderLinks = this.renderLinks.bind(this);
    this.showModal = this.showModal.bind(this);    
    this.showPinPage = this.showPinPage.bind(this);
  }

  showPinPage(e) {
    // if (e.target.className.includes("p-link")) {
      this.props.history.push(`/pins/${this.props.pin.id}`);
    // }
  }

  showModal(modal) {
    this.props.openModal(modal, this.props.pin.id);
  }  

  turnOffVisibility(e) {
    this.setState({ visible: false });
  }

  turnOnVisibility(e) {
    this.setState({ visible: true });
  }

  // TO-DO regex the link name later
  renderLinks() {    
    const { currentUser } = this.props;

    if (!currentUser) return null;    
    
    // if (this.state.visible) {
      const { pin } = this.props;
      // const imageHeight = pin.row_height * 10;
      let link;
      let edit;

      if (pin.link_url !== "") {
        // const hostname = new URL(pin.link_url).hostname;
        link = (
          <a href={pin.link_url} target="_blank">
            {/* <i className="fas fa-external-link-alt"></i> */}
            www.something.com
            {/* <p>{hostname}</p> */}
          </a>
        );
      }
      
      if (currentUser.username === pin.user.username) {
        edit = (
          <button className="tool-buttons edit-button" onClick={this.showEditModal}>
            <svg className="svg-edit" height="12" width="12" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img">
              <path d="M13.386 6.018l4.596 4.596L7.097 21.499 1 22.999l1.501-6.096L13.386 6.018zm8.662-4.066a3.248 3.248 0 0 1 0 4.596L19.75 8.848 15.154 4.25l2.298-2.299a3.248 3.248 0 0 1 4.596 0z"></path>
            </svg>
          </button>
        );
      } else {
        edit = <div></div>;
      }

      return (
        <div
          className="p-links visible"
          onClick={this.toPinShow}
          // style={{ height: imageHeight }}
        >
          <div className="top-links">
            {edit}
            <button className="save-btn" onClick={this.showCreateModal}>              
              <p>Save</p>
            </button>
          </div>
          <div className="bottom-links">{link}</div>
        </div>
      );
    // }
  }

  render() {
    const { pin } = this.props;
    
    // const frameHeight = pin.row_height * 10 + 45;
    // const imageHeight = pin.row_height * 10;
    // const gridSpan = `span ${pin.row_height + 6}`;

    return (      
      <div className="pin"
        // style={{ height: frameHeight, gridRowEnd: gridSpan }}
        onClick={this.showPinPage}
        onMouseEnter={this.turnOnVisibility}
        onMouseLeave={this.turnOffVisibility}
      >
        <div className="pin-item">
          <img
            className="pin-item-img"
            src={window.pins[pin.pin_id]}            
          />
        </div>
        <div className="pin-item-title">
          <p>{pin.title}</p>
        </div>
        {this.renderLinks()}
      </div>
    
    );
  }
}

export default withRouter(PinIndexItem);
