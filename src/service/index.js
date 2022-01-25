import axios from 'axios';

export async function getVideoList(params) {
  const response = await axios.get(
    'https://youtube.googleapis.com/youtube/v3/search?',
    {
      params: {
        key: 'AIzaSyAFZwfVFZePmfDJaxavZgJfPsRhihQ8mCE',
        part: 'snippet',
        maxResults: 10,
        locationRadius: '100km',
        location: `${params.coordinate.latitude}, ${params.coordinate.longitude}`,
        pageToken: params.pageToken,
        order: 'date',
        type: 'video',
      },
    },
  );
  return response.data;
}
