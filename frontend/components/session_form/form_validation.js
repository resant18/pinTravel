export const isBlank = (input) => {
    if (input === '') return true;
    return false;
};

export const isValidInput = (input, type) => {
    switch (type) {
      case 'email':
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input));        
      case 'password':
        return (input.length >= 6)
    }  
};
