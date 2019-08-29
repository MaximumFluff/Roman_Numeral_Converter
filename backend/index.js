const app = require('express')();
const bodyParser = require('body-parser');
const checkString = require('./checkString');
const converter = require('./converter');
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  const numeralString = req.query.roman;
  const isStringValid = checkString(numeralString);
  if (!isStringValid) {
    return res.json("Error: Given string is not a valid roman numeral number");
  }
  else {
    const result = converter(numeralString);
    return res.json(result);
  }
})

app.listen(PORT, () => {
  console.log(`Microservice is listening on port ${PORT}`);
})
