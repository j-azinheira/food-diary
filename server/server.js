const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 100000,
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname + '/public')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
}

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const restaurantsRouter = require('./routes/restaurants');

app.use('/restaurants', restaurantsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
