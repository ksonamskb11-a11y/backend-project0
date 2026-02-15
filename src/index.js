import express from 'express';

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World...!!!  Welcome to BackEnd...!!!');
})

app.listen(port, () => {
  console.log(`App is listening / running on port: ${port}`);
})
