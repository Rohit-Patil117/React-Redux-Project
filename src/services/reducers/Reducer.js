import { ADD_USER, REMOVE_USER } from '../constants'


const initialState = {
    users: []
}

export default function addUsers(state = [], Action) {
    switch (Action.type) {
        case ADD_USER:
            // console.log('Reducer', Action);
            return [
                ...state,
                { users: Action.data }
            ]

        case REMOVE_USER:
            //console.log('reducer', Action);
            //console.log(state);
            return state.filter(item => item.users.userid !== Action.data.userid);

        default:
            return state

    }
}