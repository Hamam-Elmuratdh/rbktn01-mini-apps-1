const express = require('express');

var app = express();
const port = 3000;

app.use(express.static('public'));







app.listen(port, () => console.log(`server is running on port  ${port}`));

