import axios from 'axios';

import Search from './models/Search';

import { food2ForkKey } from '../keys';

// Global state
const state = {};

const controlSearch = async () => {
  const query = 'pizza'; // todo
  if (query) {
    state.search = new Search(query);
    await state.search.getResults();

    console.log(state.search.result);
  }
};

document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});
