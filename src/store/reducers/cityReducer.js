import { constants } from '../actions/actionTypes';

const initialState = {
  cities: [],
  selectedCity: null
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_CITY:
      return {
        ...state,
        cities: state.cities.concat({
          key: Math.random(),
          city: action.cityname,
          image: {
            url: 'https://localhost/'
          }
        })
      };
    default:
      return state;
  }
};

export default cityReducer;
