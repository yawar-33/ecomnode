const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3456;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


require('./routes')(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});