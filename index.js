const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const bip = require('bip');

let rootHandler = async function(req, res) {
  res.contentType = 'application/json';
  const card_number = req.query.card_number;

  if (!card_number) {
    const response = { "error": "Missed query param `card_number`.\nUsage `/card_number=123`" };
    res.send(response);
    return;
  }

  try {
    const status = await bip(card_number)
    const response = {
      "error": null,
      "status": status
    };
    res.send(response);
  } catch (err) {
    res.send({ "error": err.message });
    return;
  }
}

let pingHandler = function(req, res) {
  res.contentType = 'text/html';
  res.send("pong");
};

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', rootHandler)
  .get('/ping', pingHandler)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))