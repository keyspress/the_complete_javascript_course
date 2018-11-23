import axios from 'axios';

import { food2ForkKey } from '../../keys';

export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getResults() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = food2ForkKey;
    try {
      const res = await axios.get(
        `${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`
      );
      this.result = res.data.recipes;
      // console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
