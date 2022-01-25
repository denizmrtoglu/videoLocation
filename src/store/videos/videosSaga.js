import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getVideoList } from '../../service';
import { GET_VIDEOS_REQUEST } from '../constants';
import { getVideosRequestSuccess } from './videosAction';

function* fetchData() {
  const state = yield select();
  try {
    const data = yield call(getVideoList, {
      coordinate: state.coordinate,
      pageToken: state.pageToken,
    });
    yield put(getVideosRequestSuccess(data));
  } catch (err) {
    console.log('err', err);
  }
}
export default function* videosSaga() {
  yield takeEvery(GET_VIDEOS_REQUEST, fetchData);
}
