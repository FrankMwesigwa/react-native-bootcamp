/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import axios from 'axios';
import { GET_NEWS } from '../types';

import { FIREBASEURL } from '../../../configs';

export function getNews() {
  const request = axios({
    method: 'GET',
    url: `${FIREBASEURL}/news.json`
  })
    .then(response => {
      const articles = [];

      for (const key in response.data) {
        articles.push({
          ...response.data[key],
          id: key
        });
      }
      return articles;
    })
    .catch(e => {
      return false;
    });

  return {
    type: GET_NEWS,
    payload: request
  };
}
