import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DELESECT_PLACE } from '../actions/actionTypes';
import PlaceImage from '../../assets/download.jpeg';

const initialState = {
  places: [],
  selectedPlace: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat(
          {key: Math.random, 
          value: action.placeName,
          image: PlaceImage
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return state.selectedPlace.key !== place.key;
        }),
        selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return action.key === place.key;
        })
      };
    case DELESECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    default:
      return state;
  }
}

export default reducer;