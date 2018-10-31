import { combineReducers } from 'redux';
import addCount from './addCount'

const rootReducer = combineReducers({
    addCount,
})

export default rootReducer;
