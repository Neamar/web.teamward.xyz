import { createAction } from 'redux-actions';

export const fetchGame = (payload) => async (dispatch, getState) => {
  console.log('coucou', getState());
  dispatch(fetchGameStarted(payload));
  const res = await (await fetch('https://gist.githubusercontent.com/Neamar/eb278b4d5f188546f56028c3a0310507/raw/game.json')).json();
  console.log(res);
  dispatch(fetchGameSuccess(res));
};

export const fetchGameStarted = createAction('gameData/fetchGameStarted');
export const fetchGameSuccess = createAction('gameData/fetchGameSuccess');
export const fetchGameFail = createAction('gameData/fetchGameFail');
