import getData from '../utils/Api';

export const FETCH_HOME_GIF_STARTED = 'FETCH_HOME_GIF_STARTED';
export const FETCH_HOME_GIF_COMPLETED = 'FETCH_HOME_GIF_COMPLETED';
export const FETCH_HOME_GIF_FAILED = 'FETCH_HOME_GIF_FAILED';

export const homeActions = {
  fetchData(dispatch, queryString) {
    dispatch({
      type: FETCH_HOME_GIF_STARTED,
      payload: []
    });

    return getData(queryString)
      .then(data => dispatch({
        type: FETCH_HOME_GIF_COMPLETED,
        payload: data
      }))
      .catch((error) => {
        console.error(error);
        dispatch({
          type: FETCH_HOME_GIF_FAILED,
          hasError: true,
          payload: error
        });
      });
  }
};
