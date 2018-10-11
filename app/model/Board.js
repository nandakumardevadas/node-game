const BaseClass = require('./Base');
const STATUS = require('./status');
const _ = require('lodash');

class Board extends BaseClass {

    constructor(name, games = [], players = [], status = STATUS.BOARD_NOT_STARTED, noOfPlayers = 1, minMatch = 1, maxMatch = 5, showOffPoint = 5) {
        super();
        var _cardObj = {};
        this.id = this.generateId(2);
        this.name = name;
        this.maxMatch = maxMatch;
        this.minMatch = minMatch;
        this.status = status;
        this.showOffPoint = showOffPoint;
        this.games = games;
        this.status = status;
        this.results = [];
        this.noOfPlayers = noOfPlayers;
        this.players = players;
    }

    addPlayer(player) {
        this.players.push(player);
    }

    addGame(game) {
        this.games.push(game);
    }

    getGameCount() {
        return this.games.length;
    }

    getNoOfPlayers() {
        return this.noOfPlayers
    }

    getCardObj() {
        return this._cardObj;
    }

    setCardObj(cards) {
        this._cardObj = cards;
    }

    setStatus(status) {
        this.status = status;
    }

    setNoOfPlayers(noOfPlayers) {
        this.noOfPlayers = this.noOfPlayers + 1;
    }

    getActivePlayers() {
        return _.filter(this.players, ['isOnline', true]) || []; 
    }

    getActivePlayersCount() {
        return this.getActivePlayers().length; 
    }

}

module.exports = Board;
