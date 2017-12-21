import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import gameReducer from './gameData/reducer';

export default combineReducers({
  routing: routerReducer,
  gameData: gameReducer,
});
