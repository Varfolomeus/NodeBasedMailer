/*
EMAIL_HOST=smtp.ukr.net
EMAIL_HOST_PASSWORD=!`worldapart1
EMAIL_HOST_USER=gelohc@ukr.net
EMAIL_PORT=587
*/
import express from 'express';
import bodyParser from 'body-parser';
import Mail from './Mail.js';

const app = express();

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send(`<b>Requested from, ${req.hostname}: </b><h1>Hello World!</h1>`);
});
app.post('/mail', async (req, res) => {
  const { email, message } = req.body; 
//   console.log('email, message',email, message);
  return res.json({ result: await Mail.send(email, message) });
});
app.listen(process.env.PORT || 3001, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
