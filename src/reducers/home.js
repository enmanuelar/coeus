import {
  FETCH_HOME_GIF_STARTED,
  FETCH_HOME_GIF_COMPLETED,
  FETCH_HOME_GIF_FAILED,
  SEARCH_INPUT_CHANGED
} from '../actions/home';

const initialState = {
  queryString: '',
  data: [],
  isLoadingData: false
};

const home = (action, currentState = initialState) => {
  debugger;
if (action) {
  switch (action.type){
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
        queryString: action.payload
      };
    default:
      return currentState;
  }
}

};

export default home;
