import {ACTIONTYPES} from '../actionTypes/actionTypes';

const contacts = (state, {type, payload}) => {
  switch (type) {
    case ACTIONTYPES.GET_CONTACTS:
      return state;

    default:
      return state;
  }
};

export default contacts;
