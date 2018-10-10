const express        = require('express');
const bodyParser     = require('body-parser');
const app = express();

if (!global.players){
    global.players = [];
}

if (!global.gameBoards){
    global.gameBoards = [];
}
const LoginServices = require('./app/services/Login')  
const GameServices = require('./app/services/GameBoard')  
LoginServices.login('nanda');
LoginServices.login('nandakumar')
console.log(global.players);
console.log(GameServices.createBoardAndJoinGame('nanda', 'VSOP'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
require('./app/routes')(app, {});
const port = 8001;
app.listen(port, () => {
  console.log('We are live on ' + port);
});