import express from 'express';
import { helloWorld } from './routes';

const app = express();

app.get('/', helloWorld);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});