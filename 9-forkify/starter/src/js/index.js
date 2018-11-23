import axios from 'axios';

import { food2ForkKey } from '../keys';

async function getResults(query) {
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const key = food2ForkKey;
  try {
    const res = await axios.get(
      `${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`
    );
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch (error) {
    alert(error);
  }
}
getResults('pizza');
