const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    bio: {
        type: String,
        require: true
    },
    profilePictureLink: {
        type: String,
        require: true
    },
    dateCreated: { type: Date, default: Date.now }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;