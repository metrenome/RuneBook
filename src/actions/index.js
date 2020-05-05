import { SELECT_CHAMPION } from '../constants';

export const selectChampion = (champion) => {
  return {
    type: SELECT_CHAMPION,
    payload: champion
  };
};