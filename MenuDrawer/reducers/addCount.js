import { ADD_COUNT } from '../actions'

const addCount = ( state = [], action ) => {
    switch(action.type) {
        case ADD_COUNT:
            return action.count;
        default:
            return state;
    };
}


export default addCount;
