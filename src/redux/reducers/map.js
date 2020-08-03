import {
  CREATE_DISTRICT,
  UPDATE_DISTRICT,
  REMOVE_DISTRICT,
  FETCH_DISTRICT,
  FETCH_ALL_DISTRICTS,
  CHANGE_ZOOM_LEVEL,
  FETCH_ALL_LOCATIONS,
  FETCH_LOCATION,
  CREATE_LOCATIONIMAGES,
} from '../constants/actionTypes';

const initialMapState = {
  districts: [],
  locations: [],
  zoom: 12,
};


const mapReducer = (state = initialMapState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_ALL_DISTRICTS:
      return {
        ...state,
        districts: [...action.payload],
      };
    case FETCH_ALL_LOCATIONS:
      return {
        ...state,
        locations: [...action.payload],
      };
    case FETCH_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case FETCH_DISTRICT:
      return {
        ...state,
        location: action.payload,
      };
    case CREATE_DISTRICT:
      return {
        ...state,
      };

    case CHANGE_ZOOM_LEVEL:
      return {
        ...state,
        zoom: action.payload,
      };
    case CREATE_LOCATIONIMAGES:
      return {
        ...state,
      };
      
    default:
      return {
        ...state,
        districts: ['BUGGY'],
      };
  }
};

export default mapReducer;
