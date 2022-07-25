const router = require('express').Router();
let Restaurant = require('../models/restaurant.model');

router.route('/').get((req, res) => {
  Restaurant.find()
    .then((restaurants) => res.json(restaurants))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const restaurantName = req.body.restaurantName;
  const location = req.body.location;
  const rating = req.body.rating;
  const priceRange = req.body.priceRange;
  const description = req.body.description;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const url = req.body.url;

  const newRestaurant = new Restaurant({
    restaurantName,
    location,
    rating,
    priceRange,
    description,
    latitude,
    longitude,
    url,
  });

  console.log(req.body);

  newRestaurant
    .save()
    .then(() => res.json('Restaurant added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
