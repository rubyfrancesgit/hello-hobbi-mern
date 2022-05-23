const mongoose = require("mongoose");

const hobbiSessionSchema = new mongoose.Schema({
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
    hostHouse: {
        type: Boolean,
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
    sessionImageLink: {
        type: String,
        required: true
    },
    hostId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

// const HobbiSession = mongoose.model("hobbiSession", hobbiSessionSchema);
// module.exports = HobbiSession;
// module.exports = mongoose.model("HobbiSession", hobbiSessionSchema);
const HobbiSession = mongoose.model("Hobbi", hobbiSessionSchema);
module.exports = HobbiSession;