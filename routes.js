// THIS IMPORT BREAKS log of 2,3, 3
// without it all is logged fine
import { parse } from 'url';

export const routes = (req, res) => {
  // log 1 - works always
  console.log('HELLO');

  // log 2 - works only if there is no imports in this file
  console.log({ a: 1 });

  // log 3 - works only if there is no imports in this file
  console.log(JSON.stringify({ a: 1 }, null, ' '));

  // log 4 - works only if there is no imports in this file
  console.log([1]);

  res.end('Im working');
};
