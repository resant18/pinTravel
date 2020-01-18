// export const selectUsername = (state, props) => {
//     return props.match.params.username ||
//         state.entities.users[state.session.id].username;
// };

// export const selectUser = (users, username) => {
//     return Object.values(users).filter(
//       user => user.username === username
//     );
// };

export const selectBoard = ({ boards }, boardId) => {
    return boards[boardId];
};

export const selectUserBoards = ({ boards }, user) => {
    if (!user) return [];
    return Object.values(boards).filter(board => 
        board.user_id === user.id);    
};

export const selectUserPins = ({ pins }, user) => {
    if (!user) return [];    

    return Object.values(pins).filter(pin =>
       user.board_pin_ids.includes(pin.id)
    );
    // Code to get unique pins    
    // return Object.values(pins).filter(
    //     pin => user.pin_ids.includes(pin.pin_id)        
    // );        
}; 

export const selectUserBoardPins = ({ pins }, boardId) => {
    if (!boardId) return [];

    return Object.values(pins).filter(pin => 
        pin.board_id === boardId    
    );
}

export const selectUserCreator = ({ users }, board) => {
    if (!board) return null;

    return Object.values(users).filter(user => user.id === board.user_id)[0];
}

// export const selectReviewsForBench = ({ benches, reviews }, bench) => {
//   return bench.reviewIds.map(reviewId => reviews[reviewId]);
// };

// export const asArray = ({ benches }) =>
//   Object.keys(benches).map(key => benches[key]);
