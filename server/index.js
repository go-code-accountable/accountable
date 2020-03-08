const superagent = require("superagent");
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const { ColoradoBillsBySessionQuery } = require('./graphqlQueries/billQueries');
const { peopleByLatLong } = require('./graphqlQueries/peopleQueries');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

const { get } = superagent;

app.get('/people', async (req, res) => {
  try {
    const { latitude, longitude } = req && req.query;
    const result = await get("https://openstates.org/graphql")
      .set({ 'X-API-KEY': '43d5c011-d522-45d7-ae02-f1a006ff5e1c' })
      .query({ query: peopleByLatLong(latitude, longitude) });

    const peopleResult = JSON.parse(result.text);
    const people = peopleResult.data.people.edges.map(edge => edge.node);
    res.send(people);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.get('/bills', async (req, res) => {
  try {
    const { session } = req && req.query;

    const result = await get("https://openstates.org/graphql")
      .set({'X-API-KEY': '43d5c011-d522-45d7-ae02-f1a006ff5e1c'})
      .query({ query: ColoradoBillsBySessionQuery(session) });

    const billResult = JSON.parse(result.text);
    const bills = billResult.data.bills.edges.map(edge => edge.node);

    res.send(bills);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001'))