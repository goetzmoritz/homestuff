const mongoose = require('mongoose')

const thingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  postit: [{
    type: String,
    required: false
  }],
  image: [{
      name:{
    type: String,
    required: false
      },
      captureDate:{
          type: Date,
          required: true,
          default: Date.now
      }
  }],
  captureDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  changedDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('Things', thingSchema)