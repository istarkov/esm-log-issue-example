import express from 'express';

const app = express();

app.use('/', async (req, res) => {
  console.log('console log in module wrapped with esm');
  res.send('hello');
});

export const routes = app;
