import _ from 'lodash';
import {
  CHANGE_LOCATION,
  GET_VIDEOS_REQUEST,
  GET_VIDEOS_REQUEST_ERROR,
  GET_VIDEOS_REQUEST_SUCCESS,
} from '../constants';

export const INITIAL_STATE = {
  videoList: [],
  loading: false,
  error: null,
  coordinate: { latitude: 41.0201903, longitude: 28.8866112 },
  pageToken: '',
};

export default (state, action) => {
  switch (action.type) {
    case GET_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_VIDEOS_REQUEST_SUCCESS:
      return {
        ...state,
        videoList: [..._.union(state.videoList, action.payload.items)],
        pageToken: action.payload.nextPageToken,
        loading: false,
      };
    case GET_VIDEOS_REQUEST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CHANGE_LOCATION:
      return {
        ...state,
        coordinate: action.payload,
        videoList: [],
        pageToken: '',
      };
    default:
      return state;
  }
};
