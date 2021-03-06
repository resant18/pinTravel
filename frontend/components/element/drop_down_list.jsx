import React from 'react';

class DropDownList extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         visibility: false
      };

      this.showVisibility = this.showVisibility.bind(this);
      this.hideVisibility = this.hideVisibility.bind(this);
      this.displayLink = this.displayLink.bind(this);
      this.handleSelectedItem = this.handleSelectedItem.bind(this);
   }

   showVisibility() {
      this.setState({ visibility: true });
   }

   hideVisibility() {
      this.setState({ visibility: false });
   }

   displayLink() {
      if (this.state.visibility) {
         return (
            <button className='dd-list-save' onClick={this.handleSelectedItem}>
               Save
            </button>
         );
      }
   }

   handleSelectedItem(e) {      
      e.stopPropagation();      
      this.props.onSelectItem(this.props.item.id);
   }



   render() {
      const { item, thumbnail } = this.props;

      return (
         <li
            className='dd-list-item'
            key={item.id}
            onMouseEnter={this.showVisibility}
            onMouseLeave={this.hideVisibility}
            onClick={this.handleSelectedItem}
         >
            <div className='dd-list-item-img-wrapper'>
               {thumbnail.length > 0 ? (
                  <img className='dd-list-item-img' src={thumbnail[0].pictureUrl} alt={thumbnail.title} />
               ) : (
                  <div className='dd-list-item-blank' />
               )}
            </div>
            <div className='dd-list-item-text-wrapper'>
               <div className='dd-list-item-text'>{item.name}</div>
               <div className='dd-list-item-link'>{this.displayLink()}</div>
            </div>
         </li>
      );
   }
}

export default DropDownList;
