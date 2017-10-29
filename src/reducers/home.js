import {
  FETCH_HOME_GIF_STARTED,
  FETCH_HOME_GIF_COMPLETED,
  FETCH_HOME_GIF_FAILED,
  SEARCH_INPUT_CHANGED
} from '../actions/home';

const initialState = {
  searchInput: 'hello',
  data: [],
  isLoadingData: false,
};

const home = (currentState = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_GIF_STARTED:
      return {
        ...currentState,
        isLoadingData: true,
      };
    case FETCH_HOME_GIF_COMPLETED:
      return {
        isLoadingData: false,
        data: action.payload,
      };
    case FETCH_HOME_GIF_FAILED:
      return {
        isLoadingData: false,
        data: [],
      };
    case SEARCH_INPUT_CHANGED:
      return {
        ...currentState,
        searchInput: action.payload,
      };
    default:
      return currentState;
  }
};

export default home;
