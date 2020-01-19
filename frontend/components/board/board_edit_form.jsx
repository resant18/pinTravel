class BoardEditForm extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      this.props.fetchBoard(this.props.board.id);
   }

   render() {
      const { board, formType, action } = this.props;

      if (!board) return null;
      return (
         <BoardForm Board={board} formType={formType} action={action} />
      );
   }
}


