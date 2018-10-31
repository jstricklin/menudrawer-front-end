import { ADD_COUNT } from '../actions'

const initialState = {
    count: 0
}

const addToCount = (state, count) => {
    newNum = count+1;
    return
}

const addCount = ( state = initialState, action ) => {
    switch(action.type) {
        case ADD_COUNT:
            return addToCount(state, action.payload);
        default:
            return state;
    };
}


export default addCount;
