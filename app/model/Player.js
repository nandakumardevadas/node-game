const BaseClass = require('./Base');
const STATUS = require('./status');

class Player extends BaseClass {
    constructor(name, cards = [], status = STATUS.PLAYER_NOT_READY ) {
        super();
        this.username = name;
        this.displayName = this.capitalizeFirstLetter(name);
        this.id = this.generateId(2);
        this.cardsInHand = cards;
        this.score = 0;
        this.status = status;
        this.isHost = true;
        this.isOnline = true;
    }
}

module.exports = Player;
