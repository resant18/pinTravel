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
    
    return Object.values(boards).filter(board => board.user_id === user.id);
    // return user.boardIds.map(boardId => boards[boardId]);
};

export const selectUserPins = ({ pins }, pinIds) => {
    return Object.values(pins).filter(
        pin => pinIds.includes(pin.id)
    );    
}; 

// export const selectReviewsForBench = ({ benches, reviews }, bench) => {
//   return bench.reviewIds.map(reviewId => reviews[reviewId]);
// };

// export const asArray = ({ benches }) =>
//   Object.keys(benches).map(key => benches[key]);
