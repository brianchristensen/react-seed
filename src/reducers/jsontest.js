import * as types from 'constants/actions';
import { List, Map } from 'immutable';
import { combineReducers } from 'redux';

let initState = Map({
    'isFetching': false,
    'userList': List()
});

let jsontest = (state = initState, action) => {
    switch(action.type) {
        case types.GET_USERS:
            return state.set('isFetching', true);

        case types.GET_USERS_SUCCESS:
            let currentList = state.get('userList')

            return state.merge({
                'isFetching': false,
                'userList': currentList.merge(List(action.users))
            });

        case types.GET_USERS_FAIL:
            return state.set('isFetching', false);

        default:
            return state;
    }
}

export default jsontest;