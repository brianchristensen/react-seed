import * as jsonplaceholderAPI from 'api/jsonplaceholder';
import * as types from 'constants/actions';

export function getUsers() {
    return async (dispatch, getState) => {
        dispatch({'type': types.GET_USERS});

        try {
            let users = await jsonplaceholderAPI.getUsers();
            dispatch({'type': types.GET_USERS_SUCCESS, 'users': users});
        } catch(e) {
            dispatch({'type': types.GET_USERS_FAIL});
        }        
    }
}