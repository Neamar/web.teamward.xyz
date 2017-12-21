import { handleActions } from 'redux-actions';
import { fetchGameStarted, fetchGameSuccess } from './actions';

const defaultState = {
  loading: false,
};

export default handleActions({
  [fetchGameStarted]: (state, { payload }) => ({
    ...state,
    loading: true,
    summoner: payload,
  }),
  [fetchGameSuccess]: (state, { payload }) => ({
    ...state,
    loading: false,
    game: payload,
  }),
}, defaultState);
