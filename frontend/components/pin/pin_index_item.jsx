import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const generateRandomColor = function() {
  let code = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += code[Math.floor(Math.random() * 16)];
  }
  return color;
}

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      visible: false 
    };
    this.hideVisibility = this.hideVisibility.bind(this);
    this.showVisibility = this.showVisibility.bind(this);
    this.renderOverlayLinks = this.renderOverlayLinks.bind(this);
    this.showEditForm = this.showEditForm.bind(this);     
    this.showSaveToBoard = this.showSaveToBoard.bind(this);   
  }

  showEditForm() {
    this.props.showModal({ name: 'edit-pin', selectedData: this.props.pin.id });
  }  

  hideVisibility(e) {
    this.setState({ visible: false });
  }

  showVisibility(e) {
    this.setState({ visible: true });
  }

  _getDomain(link) {
    const link_domain = link
       .replace('http://', '')
       .replace('https://', '')
       .replace('www.', '')
       .split(/[/?#]/)[0];

    return link_domain;
  }

  showSaveToBoard(e) {    
    this.props.showModal({ name: 'save-to-board', selectedData: this.props.pin });
  }

  renderOverlayLinks() {    
    const { currentUser } = this.props;

    if (!currentUser) return null;    
    
    if (this.state.visible) {
      const { pin } = this.props;      
      let link;
      let edit;
      
      if (pin.link_url && pin.link_url !== '') {        
        link = (
          <div className='pin-url-link'>
            <a href={pin.link_url} target='_blank'>            
              <span> &#x2197; </span> {this._getDomain(pin.link_url)} 
            </a>
          </div>
        );
      }
      
      if (currentUser.username === pin.user.username) {
        edit = (
          <button onClick={this.showEditForm}>
            <svg className='svg-edit' height='12' width='12' viewBox='0 0 24 24' aria-hidden='true' aria-label='' role='img'>
              <path d='M13.386 6.018l4.596 4.596L7.097 21.499 1 22.999l1.501-6.096L13.386 6.018zm8.662-4.066a3.248 3.248 0 0 1 0 4.596L19.75 8.848 15.154 4.25l2.298-2.299a3.248 3.248 0 0 1 4.596 0z'></path>
            </svg>
          </button>
        );
      } else {
        edit = <div></div>;
      }

      return (        
        <div className='pin-links visible'>
          <div className='pin-edit-link'>
            {edit}
          </div>
          <div className='pin-save-link'>
            <button className='pin-save-btn' 
              onClick={this.showSaveToBoard}>              
              Save
            </button>
          </div>          
          { link } 
        </div>          
      );
    }
  }

  render() {
    const { pin } = this.props;
    
    const pinBackgroundColor = {
      backgroundColor: generateRandomColor()
    }

    return (   
      
        <div className='pin-index-item'
          onMouseEnter={this.showVisibility}
          onMouseLeave={this.hideVisibility}
        >        
        <div className='pin-content-img' style={pinBackgroundColor} >
          <Link to={`/pin/${pin.id}`}>
            <img className='pin-img' src={pin.pictureUrl} />
          </Link>
          {this.renderOverlayLinks()}
        </div>        
          <div className='pin-content-title'>
            <p>{pin.title}</p>
          </div>          
        </div>      
    );
  }
}

export default PinIndexItem;
