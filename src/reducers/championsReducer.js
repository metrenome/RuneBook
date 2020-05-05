import { SELECT_CHAMPION } from '../constants';
import championsData from '../assets/champions.json';

export const champions = () => {
    return championsData;
}

export const selectedChampion = (selectedChampion = null, action) => {
    switch (action.type) {
        case SELECT_CHAMPION:
            return action.payload;
        default:
            return selectedChampion;
    }
}