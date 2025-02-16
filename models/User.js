const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
  },
  city: {
    type: String,
    required: true,
    match: [/^[A-Za-z\s]+$/, "City name should contain only letters and spaces"],
  },
  website: {
    type: String,
    required: true,
    match: [/^(https?:\/\/)[^\s/$.?#].[^\s]*$/, "Invalid website URL"],
  },
  zip: {
    type: String,
    required: true,
    match: [/^\d{5}-\d{4}$/, "Invalid zip code format (12345-1234)"],
  },
  phone: {
    type: String,
    required: true,
    match: [/^\d-\d{3}-\d{3}-\d{4}$/, "Invalid phone format (1-123-123-1234)"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
