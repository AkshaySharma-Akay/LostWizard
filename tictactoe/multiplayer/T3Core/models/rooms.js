var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var roomSchema = new Schema({
    title: {
        type: mongoose.ObjectId,
        unique: true,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    },
    expire_at: { // expires after 2 hours 7200 sec = 120 mins = 2 hours
        type: Date,
        default: Date.now,
        expires: 7200
    }
}, {
    timestamps: true
});

let Rooms = mongoose.model('room', roomSchema);
module.exports = Rooms;