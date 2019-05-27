const express = require('express');
const PORT = 4000;
const app = express();

// TODO: read up on this https://expressjs.com/en/guide/routing.html
app.get('/personas', function (req, res) {
  res.send('wa wa wa');
})

app.listen(PORT, function() {
  console.log(`server is listening on port http://localhost:${PORT}`);
});
