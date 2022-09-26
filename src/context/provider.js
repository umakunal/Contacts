import React, {createContext, useReducer,useContext} from 'react';
import authInitialState from './initialStates/authInitialState';
import contactsInitialState from './initialStates/contactsInitialState';
import auth from './reducers/auth';

import contacts from './reducers/contacts';

const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(
    contacts,
    contactsInitialState.getContacts,
  );
  return (
    <GlobalContext.Provider
      value={{authState, contactsState, authDispatch, contactsDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const GlobalState = () => {
  return useContext(GlobalContext);
};
