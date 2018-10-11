const BaseClass = require('./Base');
const STATUS = require('./status');


class Game extends BaseClass {

    constructor(name, status = STATUS.GAME_NOT_STARTED) {
        super();
        this.id = this.generateId(2);
        this.name = name;
        this.status = status;
        this.scores = [];
    }

    static get playersCount() {
        Game._counter = (Game._counter || 0) + 1;
        return Game._counter;
    }
    
    setStatus(status) {
        this.status = status;
    }

}

module.exports = Game;
