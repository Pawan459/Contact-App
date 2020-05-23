import * as actionType from '../actions/ActionType';

export default (state = [], action) => {
    switch(action.type){
        case actionType.CREATE_NEW_CONTACT:
            return [
                ...state,
                Object.assign({}, action.contact)
            ];
        case actionType.REMOVE_CONTACT:
            return state.filter((data, id) => id !== action.id);
        default:
            return state;
    }
};