const GameModel = require('../model/Game');
const BoardModel = require('../model/Board');
const _ = require('lodash');
const STATUS = require('../model/status');
const CardDeck = require('../../lib/Cards');


class GameBoard {

    findPlayerById(id) {
        return _.find(global.players, ['username', id]) || {}; 
    }

    findBoardById(id) {
        return _.find(global.gameBoards, ['name', id]) || {}; 
    }

    createBoardAndJoinGame(playerId, boardName = "GameBoard") {
        let gameBoard = {};
        let playerObj = this.findPlayerById(playerId);
        let gamesArray = [];
        if(!_.isEmpty(playerObj)) {
            gameBoard = new BoardModel(boardName, gamesArray);
            gameBoard.addPlayer(playerObj);
            global.gameBoards.push(gameBoard); 
        }
        return gameBoard;
    }

    joinToBoardGame(playerId, gameBoardId) {
        let playerObj = this.findPlayerById(playerId);
        let gameBoardObj = this.findBoardById(gameBoardId);
        if(!_.isEmpty(playerObj) && !_.isEmpty(gameBoardObj)) {
            gameBoardObj.addPlayer(playerObj);
            gameBoardObj.setNoOfPlayers();
        }
        return gameBoardObj;
    }

    startNewGame(gameBoardId) {
        let gameBoardObj = this.findBoardById(gameBoardId);
        if(!_.isEmpty(gameBoardObj)) {
            // To change hardcode min no of players
            if(gameBoardObj.getActivePlayersCount() > 1) {
                let activePlayers = gameBoardObj.getActivePlayers();
                let cardsObj = new CardDeck();
                gameBoardObj.setStatus(STATUS.BOARD_STARTED);
                let gameLength = gameBoardObj.getGameCount();
                let newGame = new GameModel(`Game - ${gameLength+1}`);
                newGame.setStatus(STATUS.GAME_STARTED);
                gameBoardObj.addGame(newGame);
                this.spreadCards(activePlayers, cardsObj);
                gameBoardObj.setCardObj(cardsObj);
            }
        }
        return gameBoardObj;
    }

    spreadCards(activePlayers, cardsObj) {
        return activePlayers.forEach((el) => {
            el.cardsInHand = cardsObj.deal(5)
        });
    }

    drawOneCard(playerId, gameBoardId) {
        if(this.checkPlayerAndBoardExists(playerId, gameBoardId)) {
            let cardsDeckObj = gameBoardObj.getCardObj();
            cardsDeckObj.deal(1);
        }
    }

    checkPlayerAndBoardExists(playerId, gameBoardId) {
        let gameBoardObj = this.findBoardById(gameBoardId);
        if(this.checkBoardExists(gameBoardId)) {
            let playersList = gameBoardObj.getActivePlayers();
            return _.find(playersList, ['username', id]) || {}; 
        }
        return false;
    }

    checkPlayerExists(playerId) {
        let playerObj = this.findPlayerById(playerId);
        if(!_.isEmpty(playerObj)) {
            return true;
        }
        return false;
    }

    checkBoardExists(gameBoardId) {
        let gameBoardObj = this.findBoardById(gameBoardId);
        if(!_.isEmpty(gameBoardObj)) {
            return true;
        }
        return false;
    }
}

module.exports = new GameBoard();
