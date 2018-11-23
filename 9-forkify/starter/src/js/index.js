import axios from 'axios';

import { food2ForkKey } from '../keys';
import { elements } from './views/base';
import Search from './models/Search';
import * as searchView from './views/searchView';

// Global state
const state = {};

const controlSearch = async () => {
  const query = searchView.getInput();
  if (query) {
    state.search = new Search(query);

    searchView.clearInput();
    searchView.clearResults();

    await state.search.getResults();

    searchView.renderResults(state.search.result);
  }
};

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});
