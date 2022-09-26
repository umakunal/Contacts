import {ACTIONTYPES} from '../actionTypes/actionTypes';

const auth = (state, {type, payload}) => {
  switch (type) {
    case ACTIONTYPES.LOGIN:
      return state;

    default:
      return state;
  }
};

export default auth;
