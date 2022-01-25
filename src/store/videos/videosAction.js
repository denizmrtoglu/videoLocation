import {
  GET_VIDEOS_REQUEST,
  GET_VIDEOS_REQUEST_SUCCESS,
  GET_VIDEOS_REQUEST_ERROR,
  CHANGE_LOCATION,
} from '../constants';

export const getVideosRequest = () => ({
  type: GET_VIDEOS_REQUEST,
});
export const getVideosRequestSuccess = (data) => ({
  type: GET_VIDEOS_REQUEST_SUCCESS,
  payload: data,
});
export const getVideosRequestError = (data) => ({
  type: GET_VIDEOS_REQUEST_ERROR,
  payload: data,
});
export const changeLocation = (data) => ({
  type: CHANGE_LOCATION,
  payload: data,
});
