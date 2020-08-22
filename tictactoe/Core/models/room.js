const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    _id: new mongoose.Types.ObjectId().toHexString(),
    username: String,
    win: Number,
    loss: Number
})
const boardSchema = new mongoose.Schema({
    matrix: [Number],
    status: Boolean
})

const roomSchema = new mongoose.Schema({
    _id: new mongoose.Types.ObjectId().toHexString(),
    player: [playerSchema],
    board: boardSchema,
    draws: Number,
    matches: Number
    // TODO: Delete the room in 30 mins after creation
})
const Room = mongoose.Model(roomSchema);
module.exports = Room;