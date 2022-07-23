const router = require('express').Router();
let Restaurant = require('../models/restaurant.model');

router.route('/').get((req, res) => {
  Restaurant.find()
    .then((restaurants) => res.json(restaurants))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const location = req.body.location;

  const newRestaurant = new Restaurant({ name, location });

  newRestaurant
    .save()
    .then(() => res.json('Restaurant added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
