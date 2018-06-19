import axios from 'axios';
const API_KEY = '';
const ROOT_URL = `https://api.unsplash.com/search/photos/?page=1&per_page=20&query=`;

export const LOAD_IMAGE = 'LOAD_IMAGE';

export const loadImage = city => async dispatch => {
  const url = ROOT_URL + city + '&client_id=' + API_KEY;
  const request = await axios.get(url);

  dispatch({
    type: LOAD_IMAGE,
    payload: request.data.results
  });
};
