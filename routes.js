// THIS IMPORT BREAKS log of 2,3
import { parse } from 'url';

export const routes = (req, res) => {
  // log 1
  console.log('HELLO');

  // log 2
  console.log({ a: 1 });

  // log 3
  console.log(JSON.stringify({ a: 1 }, null, ' '));

  // log 4
  console.log([1]);

  res.end('Im working');
};
