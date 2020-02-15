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
   }

   showVisibility() {
      this.setState({ visibility: true });
   }

   hideVisibility() {
      this.setState({ visibility: false });
   }

   displayLink() {
      if (this.state.visibility) {
         return <button className="dd-list-save">Save</button>;
      }
   }

   render() {
      const { item, thumbnail } = this.props;

      return (
         <li
            className="dd-list-item"
            key={item.id}
            onMouseEnter={this.showVisibility}
            onMouseLeave={this.hideVisibility}
         >
            <div className="dd-list-item-img-wrapper">
               <div className="dd-list-item-img">
                  {
                     thumbnail && (
                        <img src={thumbnail.pictureUrl} alt={thumbnail.title} />
                     )
                  }
               </div>
            </div>
            <div className="dd-list-item-text-wrapper">
               <div className="dd-list-item-text">{item.name}</div>
               <div className="dd-list-item-link">{this.displayLink()}</div>
            </div>
         </li>
      );
   }
}

export default DropDownList;
