export const selectBoard = ({ boards }, boardId) => {
    return boards[boardId];
};

export const selectUserBoards = ({ boards }, user, permitted) => {
    if (!user) return [];

    return Object.values(boards).filter(board => 
        permitted ? (board.user_id === user.id) : (board.secret === false && board.user_id === user.id)
    )
};

export const selectUserPins = ({ pins }, user) => {        
    if (Object.keys(user).length === 0) return [];    

    return Object.values(pins).filter(pin => 
        user.board_pin_ids.includes(pin.id)
    )    
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

export const selectUserPinFeeds = ({ pins }, user) => {
    // debugger
    return (Object.values(pins).filter(pin => { 
        // debugger
        !user['pin_ids'].includes(pin.pin_id) 
    }))
}

