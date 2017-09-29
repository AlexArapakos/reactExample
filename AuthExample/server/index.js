// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./router');

const app = express();


// DB Setup
mongoose.connect('mongodb://localhost:auth/auth');


// App Setup
app.use(morgan('combined'));				// for logs
app.use(cors());							// for letting web-pages from other domains or ports to access server's data
app.use(bodyParser.json({ type: '*/*' }));	// any request parsed as json
router(app);


// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);

