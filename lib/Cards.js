class CardDeck {

    constructor() {
        this.deck = [];
        this.reset();
        this.shuffle();
    }

    reset() {
        this.deck = [];
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        for (let suit in suits) {
          for (let value in values) {
              this.deck.push(`${values[value]} of ${suits[suit]}`);
          }
        }
    }

    shuffle() {
        const { deck } = this;
        let m = deck.length, i;

        while (m) {
            i = Math.floor(Math.random() * m--);
            [deck[m], deck[i]] = [deck[i], deck[m]];
        }

        return this;
    }

    deal(cardsCount = 1) {
        var cardsArray = [];
        for(let i = 1; i <= cardsCount; i++) {
            let randomCard = Math.floor(Math.random() * this.deck.length);
            let cardValue = this.deck[randomCard];
            this.deck.splice(randomCard, 1);
            cardsArray.push(cardValue);
        }
        return cardsArray;
    }
}

module.exports = CardDeck;
