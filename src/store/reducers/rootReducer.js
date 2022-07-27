import { combineReducers } from 'redux';

import airlineReducer from './airline.reducer';

export default combineReducers({ airline: airlineReducer });
