export class Game {
    constructor(players, deck, trumpSuit) {
        this.players = players;
        this.deck = deck;
        this.trumpSuit = trumpSuit;
    };
    // Начало игры
    startGame() {
        this.deck.createDeck();
        this.deck.shuffleDeck();
        this.deck.dealingСards(this.players, 6);

        // Добавить правила игры
    };
    // Проверка типа козыря
    checkTrumpSuit() {
        return this.trumpSuit;
    };
    /*  
        Реализовать: 
        takeTurn(player, card) — организует ход игрока(атака/защита).
        determineWinner() — проверяет, есть ли победитель.
        attack(player, card) — игрок атакует выбранной картой.
        defend(player, card) — игрок защищается картой.
        endGame() — завершает игру, проверяет, кто победил или проиграл.
    */
}