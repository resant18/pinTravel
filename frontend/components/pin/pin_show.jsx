import React from 'react';

class PinShow extends React.Component {
   constructor(props) {
      super(props);



   }

   componentDidMount() {
      if (!this.props.pin) 
         this.props.fetchPin(this.props.pinId);
   }

   handleSave() {

   }

   displayEditLink() {

   }

   displaySaveInfo() {
      
   }

   render() {
      return (
         <div>
            
         </div>
      )
   }
}

export default PinShow;
