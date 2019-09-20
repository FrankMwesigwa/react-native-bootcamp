import { constants } from './actionTypes';

export const addCity = cityname => {
  return {
    type: constants.ADD_CITY,
    cityname
  };
};

export const deleteCity = () => {
  return {
    type: constants.DELETE_CITY
  };
};

export const selectCity = key => {
  return {
    type: constants.SELECTED_CITY,
    key
  };
};

export const deselectCity = () => {
  return {
    type: constants.DESELECT_CITY
  };
};
