import { ADD_USER, REMOVE_USER } from '../constants'

export const Add = (data) => {
    //console.log('Action', data);
    return {
        type: ADD_USER,
        data: data
    }
}

export const Remove = (data) => {
    //console.log('Action', data);
    return {
        type: REMOVE_USER,
        data: data
    }
}
