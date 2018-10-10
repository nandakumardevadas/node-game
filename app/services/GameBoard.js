const GameModel = require('../model/Game');
const BoardModel = require('../model/Board');
const _ = require('lodash');
const STATUS = require('../model/status');


class GameBoard {

    findPlayerById(id) {
        return _.find(global.players, ['username', id]) || {}; 
    }

    findBoardById(id) {
        return _.find(global.players, ['username', id]) || {}; 
    }

    createBoardAndJoinGame(playerId, boardName = "GameBoard") {
        let gameBoard = {};
        let playerObj = this.findPlayerById(playerId);
        let gamesArray = [];
        if(!_.isEmpty(playerObj)) {
            let newGame = new GameModel('Game - 1');
            newGame.players.push(playerObj);
            gamesArray.push(newGame);
            gameBoard = new BoardModel(boardName, gamesArray);
            global.gameBoards.push(gameBoard); 
        }
        return gameBoard;
    }

    joinToBoardGame(playerId, gameBoardId) {
        let gameBoard = {};
        let playerObj = this.findPlayerById(playerId);
        let gamesArray = [];
        if(!_.isEmpty(playerObj)) {
            let newGame = new GameModel('Game - 1');
            newGame.players.push(playerObj);
            gamesArray.push(newGame);
            gameBoard = new BoardModel(boardName, gamesArray);
            global.gameBoards.push(gameBoard); 
        }
        return gameBoard;
    }
}

module.exports = new GameBoard();