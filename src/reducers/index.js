import { combineReducers } from 'redux';

import { champions } from './championsReducer';
import { selectedChampion } from './championsReducer';

export default combineReducers({
    champions,
    selectedChampion
});