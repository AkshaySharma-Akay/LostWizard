const express = require('express');
const roomRouter = express.Router();
const bodyParser = require('body-parser');

roomRouter.route('/')
.get(function(req,res,next){
    res.redirect('/');
})
.post(function(req,res,next){
    // TODO: create a new room 
    // with current player as player1S
    // redirect to /room/id
})
.delete(function(req,res, next){
    // delete operation not supported 
    // in deployed version
})

roomRouter.route('/:roomId')
.get(function(req,res, next){
    res.set('Content-Type', 'text/html')
    res.send("the room id is : " + req.params.roomId);
    // other player joins here
    // redirect to /:roomid/game
})
.delete((res,req,next)=>{
    // TODO: delete the specific room
})

roomRouter.route('/:roomId/game')
.get((req,res,next)=>{
    // TODO; fetch the game data if game is on
})
.post((req,res, next)=>{
    // TODO: update the score but validate the same too
})

module.exports = roomRouter;
