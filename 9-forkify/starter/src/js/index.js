import axios from 'axios';

import Search from './models/Search';

import { food2ForkKey } from '../keys';

const search = new Search('pizza');
console.log(search);
search.getResults();
