const express = require('express');
const roomRouter = express.Router();
const bodyParser = require('body-parser');
const Rooms = require('../models/room');

roomRouter.route('/')
    .post(function (req, res, next) {
        // TODO: create a new room and return the room object
        Rooms.create(req.body)
            .then((room) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(room);
            }, (err) => next(err))
            .catch((err) => next(err));
});


// allrooms
roomRouter.route('/allrooms')
    .get((req, res, next) => {
        // Return the list of rooms in db.
        Rooms.find({})
            .then((rooms) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(rooms);
            }, (err) => next(err))
            .catch((err) => next(err))
    })
    .delete((req, res, next) => {
        // Delete all of the rooms in db.
        Rooms.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

roomRouter.route('/:roomId')
    .get((req, res, next) => {
        Rooms.findById(req.params.roomId)
            .then((room) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                console.log("Room details : " + room);
                res.json(room);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

module.exports = roomRouter;
