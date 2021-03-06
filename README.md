# Bip! API 

<center>![bip logo](./img/logo.png)</center>

API for check balance on your BIP card

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
$ git clone https://github.com/x0000ff/bip-api.git # or clone your own fork
$ cd bip-api
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/?card_number=21922110).

## Usage

Navigate to [`http://localhost:5000/?card_number=21922110`](http://localhost:5000/?card_number=21922110)

### Responses

#### Success

```json
{
  "error": null,
  "status": {
    "number": "21922111",
    "message": "Tarjeta Valida",
    "valid": true,
    "balance": 170,
    "date": "2018-12-04T22:43:00.000Z"
  }
}
```

#### Failure

```json
{
  "error": "Esta tarjeta no se puede cargar"
}
```

## Credits

❤️ [bip](https://www.npmjs.com/package/bip) by [lgatica](https://github.com/lgaticaq)