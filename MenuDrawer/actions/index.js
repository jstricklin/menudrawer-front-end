import { ADD_COUNT } from './constants'

export const countClick = (count) => {
    type: ADD_COUNT,
    count
}

