const BaseClass = require('./Base');
const STATUS = require('./status');

class Board extends BaseClass {

    constructor(name, games = [], status = STATUS.BOARD_NOT_STARTED, minMatch = 1, maxMatch = 5, showOffPoint = 5) {
        super();
        this.id = this.generateId(2);
        this.name = name;
        this.maxMatch = maxMatch;
        this.minMatch = minMatch;
        this.status = status;
        this.showOffPoint = showOffPoint;
        this.games = games;
        this.status = status;
    }

}

module.exports = Board;