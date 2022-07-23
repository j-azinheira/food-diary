const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    restaurantName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    location: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    rating: {
      type: Number,
      required: false,
      unique: true,
      trim: true,
      minlength: 3,
    },
    priceRange: {
      type: String,
      required: false,
      unique: true,
      trim: true,
      minlength: 3,
    },
    latitude: {
      type: String,
      required: false,
      unique: true,
      trim: true,
      minlength: 3,
    },
    longitude: {
      type: String,
      required: false,
      unique: true,
      trim: true,
      minlength: 3,
    },
    url: {
      type: String,
      required: false,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
