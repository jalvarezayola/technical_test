/* eslint-disable import/no-anonymous-default-export */
import { UPDATE_AIRLINE } from '../actions/type.actions';

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_AIRLINE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
