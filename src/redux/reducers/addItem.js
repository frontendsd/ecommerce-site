const initialState = [];

const addItem = (state = initialState, action) => {
    switch (action.type) {
        case "ADDITEM":
            return [
                ...state,
                action.payload
            ]
            break;
        
            case "DELITEM":
            return state = state.filter((x) => { x.id !== action.payload.id })   
                break;
        
    
        default: return state;
            break;
    }
}

export default addItem