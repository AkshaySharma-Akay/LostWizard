const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var playerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:false,
    },
    win: {
        type: Number,
        default: 0,
        required: false
    },
    loss: {
        type: Number,
        default: 0,
        required: false
    }
})
var boardSchema = new mongoose.Schema({
    matrix: [Number],
    status: Boolean
})

const roomSchema = new Schema({
    player: {
        type: [playerSchema],
        required: true,
    },
    active: {
        type: Boolean,
        default: false
    },
    board: {
        type: boardSchema,
        required: false,
    },
    draws: {
        type: Number,
        required: false,
        default: 0
    },
    totalmatches: {
        type: Number,
        required: false,
        default: 0
    },
    // TODO: Delete the room in 30 mins after creation
    expire_at: {
        // expires after 30 mins = 1800 secs
        type: Date,
        default: Date.now,
        expires: 1800
    }
}, {
    timestamps: true
});
const Rooms = mongoose.model('Room', roomSchema);
module.exports = Rooms;