import * as actionType from './ActionType';

export const createContact = (contact) => {
    return {
        type: actionType.CREATE_NEW_CONTACT,
        contact: contact
    }
};

export const deleteContact = (id) => {
    return {
        type: actionType.REMOVE_CONTACT,
        id: id
    }
};