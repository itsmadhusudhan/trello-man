import { createStore, combineReducers } from 'redux';
import teamReducer from './reducers/teamReducer';
import boardReducer from './reducers/boardReducer';

export default () => {
  const store = createStore(combineReducers({teams:teamReducer, boards: boardReducer }));
  return store;
};
