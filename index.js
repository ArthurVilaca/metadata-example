const express = require('express')
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
app.use(bodyParser.json({ limit: '3mb' }));

const routes = require('./app/routes');
app.use('/', routes);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))