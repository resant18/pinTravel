import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      visible: false 
    };
    this.hideVisibility = this.hideVisibility.bind(this);
    this.showVisibility = this.showVisibility.bind(this);
    this.renderLinks = this.renderLinks.bind(this);
    this.showEditForm = this.showEditForm.bind(this);        
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

  _formatUrlLink(link) {
     return link.length > 12 ? link + '...' : link;
  }

  // TO-DO: update url link with real data
  renderLinks() {    
    const { currentUser } = this.props;

    if (!currentUser) return null;    
    
    if (this.state.visible) {
      const { pin } = this.props;      
      let link;
      let edit;

      if (pin.link_url !== '') {
        // const hostname = new URL(pin.link_url).hostname;
        link = (
          <a href={pin.link_url} target='_blank'>            
            something.com...
          </a>
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
                onClick={this.showCreateModal}>              
              Save
            </button>
          </div>
          <div className='pin-url-link'>            
            {this._formatUrlLink(link)}
          </div>
        </div>          
      );
    }
  }

  render() {
    const { pin } = this.props;
    
    return (   
      <Link to={`/pin/${pin.id}`}>
        <div className='pin-index-item'
          onMouseEnter={this.showVisibility}
          onMouseLeave={this.hideVisibility}
        >
          <div className='pin-content-img'>
            <img className='pin-img' src={pin.pictureUrl} />
            {this.renderLinks()}
          </div>
          <div className='pin-content-title'>
            <p>{pin.title}</p>
          </div>
          
        </div>
      </Link>   
    );
  }
}

export default PinIndexItem;
