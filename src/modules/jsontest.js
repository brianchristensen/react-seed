import * as jsonplaceholderAPI from 'api/jsonplaceholder';
import { List, Map } from 'immutable';

/*
 * actions types
 */
export const GET_USERS = 'brian-react-starter/jsontest/GET_USERS';
export const GET_USERS_SUCCESS = 'brian-react-starter/jsontest/GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'brian-react-starter/jsontest/GET_USERS_FAIL';

/*
 * reducer
 */
let initState = Map({
    'isFetching': false,
    'userList': List()
});

let jsontest = (state = initState, action) => {
    switch(action.type) {
        case GET_USERS:
            return state.set('isFetching', true);

        case GET_USERS_SUCCESS:
            let currentList = state.get('userList')

            return state.merge({
                'isFetching': false,
                'userList': currentList.merge(List(action.users))
            });

        case GET_USERS_FAIL:
            return state.set('isFetching', false);

        default:
            return state;
    }
}

export default jsontest;


/*
 * action methods
 */
export function getUsers() {
    return async (dispatch, getState) => {
        dispatch({'type': GET_USERS});

        try {
            let users = await jsonplaceholderAPI.getUsers();
            dispatch({'type': GET_USERS_SUCCESS, 'users': users});
        } catch(e) {
            dispatch({'type': GET_USERS_FAIL});
        }        
    }
}