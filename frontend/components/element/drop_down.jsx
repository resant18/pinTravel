import React from 'react';
// import '../../../app/assets/stylesheets/dropdown.scss';

class DropDown extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         listOpen: false,
         headerTitle: this.props.title
      }

      this.close = this.close.bind(this);
   }

   componentDidUpdate() {
      const { listOpen } = this.state;

      setTimeout(() => {
         if (listOpen) {
            window.addEventListener('click', this.close);
         }
         else {
            window.removeEventListener('click', this.close);
         }
      }, 0);
   }

   componentWillUnmount() {
      window.removeEventListener('click', this.close);
   }

   close(timeOut) {
      this.setState({
         listOpen: false
      })
   }

   selectItem(title, id, stateKey) {
      this.setState({
         headerTitle: title,
         listOpen: false
      }, this.props.resetThenSet(id, stateKey));
   }

   toggleList() {
      this.setState( prevState => ({
         listOpen: !prevState.listOpen
      }))
   }

   render() {
      const { list } = this.props;
      const { listOpen, headerTitle } = this.state;

      return (
         <div className="dd-wrapper">
            <div className="dd-header" onClick={() => this.toggleList()}>
               <div className="dd-header-left">
                  <div className="dd-header-title">{headerTitle}</div>
                  {listOpen ? (
                     ""
                  ) : (
                     <svg
                        height="12"
                        width="12"
                        viewBox="0 0 24 24"
                        aria-label="Choose a board"
                        role="img"
                     >
                        <path d="M12 19.5L.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"></path>
                     </svg>
                  )}
               </div>
               <div className="dd-header-right">
                  {listOpen ? (
                     <svg
                        height="12"
                        width="12"
                        viewBox="0 0 24 24"
                        aria-label="Choose a board"
                        role="img"
                     >
                        <path d="M12 19.5L.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"></path>
                     </svg>
                  ) : (
                     <button className="dd-list-save">Save</button>
                  )}
               </div>
            </div>
            <div className="dd-list-wrapper">
               {listOpen && (
                  <ul className="dd-list" onClick={e => e.stopPropagation()}>
                     {list.map(item => (
                        <li
                           className="dd-list-item"
                           key={item.id}
                           onClick={() =>
                              this.selectItem(item.title, item.id, item.key)
                           }
                           
                        >
                           <div className="dd-list-item-img-wrapper">
                              <div className="dd-list-item-img">img</div>
                           </div>
                           <div className="dd-list-item-text-wrapper">
                              <div className="dd-list-item-text">
                                 {item.title}
                              </div>
                           </div>

                           {item.selected && "<div>Save</div>"}
                        </li>
                     ))}
                  </ul>
               )}
            </div>
         </div>
      );
   }
}

export default DropDown;