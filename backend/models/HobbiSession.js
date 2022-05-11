const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    sessionName: {
        type: String,
        rerquired: true
    },
    city: {
        type: String,
        required: true
    },
    lessonPlan: {
        type: String,
        required: true
    },
    whatsIncluded: {
        type: String,
        required: true
    },
    learnerHouse: {
        type: Boolean,
        required: true
    },
    publicSetting: {
        type: Boolean,
        required: true
    },
    extraGuest: {
        type: Boolean,
        required: true
    },
    sessionPrice: {
        type: Number,
        required: true
    },
    extraGuestPrice: {
        type: Number
    },
    hostId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})