const express = require('express');
const mongoose = require('mongoose');
const Rooms = require('../models/rooms');
const roomRouter = express.Router();

// TODO : 
// Get request : check for room in db
// post request : create a room 
// bodyparser why do we need it


roomRouter.route('/')
    .get((req, res, next) => {
        Rooms.find({})
            .then((rooms) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(rooms);
            }, (err) => next(err))
            .catch((err) => next(err))
    })
    .post((req, res, next) => {
        title = mongoose.Types.ObjectId();
        req.body.title = title;
        console.log(title);
        Rooms.create(req.body)
            .then((room) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(room);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Rooms.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

// roomRouter.route('/:roomId')
//     .get((res, req, next) => {
//         Rooms.findBy

//     })
//     .post((res, req, next) => {

//     })
//     .put((res, req, next) => {

//     })
//     .delete((res, req, next) => {
//         // Check if exists in db if doesn't error else error
//     })

module.exports = roomRouter;
