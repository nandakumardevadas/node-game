const BaseClass = require('./Base');
const STATUS = require('./status');


class Game extends BaseClass {

    constructor(name, noOfPlayers = 1, status = STATUS.GAME_NOT_STARTED, players = [], cards = []) {
        super();
        this.id = this.generateId(2);
        this.name = name;
        this.noOfPlayers = noOfPlayers;
        this.players = players;
        this.status = status;
        this.results = [];
        this.remainingCards = cards;
    }

    static get playersCount() {
        Game._counter = (Game._counter || 0) + 1;
        return Game._counter;
    }

}

module.exports = Game;