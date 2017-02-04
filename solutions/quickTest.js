function Game() {
    const obj = Object.create(Game.prototype);
    const cards = [11, 2, 3,4,5,6,7,89, 10,10,10];
    obj.deck = [...cards, ...cards,...cards,...cards];
    return obj;
}

Game.prototype.deal = function() {
    const deckIndex = Math.floor(Math.random() * this.deck.length);
    return deckIndex;
}

const game = Game();
