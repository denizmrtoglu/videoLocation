import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import videosReducer, { INITIAL_STATE } from './videos/videosReducer';
import videosSaga from './videos/videosSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  videosReducer,
  INITIAL_STATE,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(videosSaga);
export default store;
