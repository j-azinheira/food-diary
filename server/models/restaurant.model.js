const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    restaurantName: {
      type: String,
      required: false,
      unique: true,
      trim: true,
      minlength: 3,
    },
    location: {
      type: String,
      required: false,
      unique: false,
      trim: true,
      minlength: 3,
    },
    rating: {
      type: Number,
      required: false,
      unique: false,
      trim: true,
      minlength: 3,
    },
    price: {
      type: Number,
      required: false,
      unique: false,
      trim: true,
      minlength: 3,
    },
    description: {
      type: String,
      required: false,
      unique: false,
      trim: true,
      minlength: 3,
    },
    latitude: {
      type: Number,
      required: false,
      unique: true,
      trim: true,
      minlength: 3,
    },
    longitude: {
      type: Number,
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
    lastVisit: {
      type: Date,
      required: false,
      unique: true,
      trim: true,
      minlength: 3,
    },
    image: {
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
