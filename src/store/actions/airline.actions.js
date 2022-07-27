/* eslint-disable import/prefer-default-export */
import { UPDATE_AIRLINE, getAction } from './type.actions';

export const UpdateAirlineAction = (data) => getAction(UPDATE_AIRLINE, data);
