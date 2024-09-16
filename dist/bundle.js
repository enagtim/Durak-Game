(function () {
    'use strict';

    class Player {
        constructor(name) {
            this.name = name;
            this.hand = [];
        };
        // Добавить карту в руку игроку
        addCardHand(card) {
            return this.hand.push(card);
        };
        // Удалить карту из руки игрока
        deleteCard(card) {
            const index = this.hand
                .findIndex(handCard => handCard.rank === card.rank && handCard.suit === card.suit);
            if (index !== -1) {
                this.hand.splice(index, 1);
            } else {
                throw new Error('Card not found!');
            }
        };
        // Проверить карту в руке игрока
        checkHasCard(card) {
            const findCard = this.hand
                .find(handCard => handCard.rank === card.rank && handCard.suit === card.suit);
            if (findCard !== undefined) {
                return true;
            } else {
                throw new Error('You do not have like card!');
            }
        };
        // Сыграть карту(удалить из руки и передать в игру)
        playCard(card) {
            if (this.checkHasCard(card)) {
                this.deleteCard(card);
                game.addCardToTable();
            } else {
                throw new Error('Card not found in hand!');
            }
        }
        // Получить количество карт в руке
        getCard() {
            return `Player ${this.name} have cards: ${this.hand.length}`;
        };
        // Проверка остались ли карты в руке
        hasCards() {
            return this.hand.length > 0;
        }
    }

    class Card {
        constructor(rank, suit) {
            this.rank = rank;
            this.suit = suit;
        }
        // Получить ранк
        getRank() {
            return this.rank;
        }
        // Получить значение ранка
        getValueRank() {
            switch (this.rank) {
                case '6':
                    return 6;
                case '7':
                    return 7;
                case '8':
                    return 8;
                case '9':
                    return 9;
                case '10':
                    return 10;
                case 'Jack':
                    return 11;
                case 'Queen':
                    return 12;
                case 'King':
                    return 13;
                case 'Ace':
                    return 14;
                default:
                    throw new Error('The card does not correspond to any rank!!!');
            }
        }
        // Проверка равенства карт
        equals(otherCard) {
            if (this.rank === otherCard.rank && this.suit === otherCard.suit) {
                return true;
            } else {
                return false;
            }
        }
        // Проверка козыря
        isTrump(trumpSuit) {
            return this.suit === trumpSuit;
        }
    }

    class Deck {
        constructor() {
            this.suits = ['Hearts', 'Bubi', 'Spades', 'Crossie'];
            this.ranks = ['6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
            this.deck = [];
        };
        // Создание колоды
        createDeck() {
            for (const suit of this.suits) {
                for (const rank of this.ranks) {
                    this.deck.push(new Card(rank, suit));
                }
            }
            return this.deck;
        };
        // Перемешивание колоды
        shuffleDeck() {
            for (let i = this.deck.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
            }
            return this.deck;
        };
        // Раздача карт
        dealingСards(players, cards) {
            if (this.deck.length < players * cards) {
                throw new Error('There are not enough cards in the deck to play Durak-game!!')
            }        for (let i = 0; i < players.length; i++) {
                for (let j = 0; j < cards; j++) {
                    const card = this.deck.shift();
                    players[i].addCardHand(card);
                }
            }
        };
        // Взять одну карту из колоды
        drowCard() {
            if (this.deck.length > 0) {
                const card = this.deck.shift();
                return card;
            } else {
                throw Error('Deck is not have cards!');
            }
        }
    }

    const deck = new Deck();
    console.log(deck.createDeck());
    deck.shuffleDeck();
    deck.shuffleDeck();
    deck.shuffleDeck();
    deck.shuffleDeck();
    deck.shuffleDeck();

    const players = [new Player('Harry'), new Player('Alex'), new Player('Tom')];
    players[0].addCardHand({ rank: 'Валет', suit: 'Пики' });
    players[0].addCardHand({ rank: '7', suit: 'Крести' });
    players[1].addCardHand({ rank: 'Король', suit: 'Черви' });
    players[1].addCardHand({ rank: 'Туз', suit: 'Буби' });
    players[2].addCardHand({ rank: 'Дама', suit: 'Пики' });
    players[2].addCardHand({ rank: '6', suit: 'Черви' });

    console.log(players);
    console.log(players[1].checkHasCard({ rank: 'Король', suit: 'Черви' }));
    console.log(players[1].getCard());

    const card = players[2].hand[0];
    const card2 = new Card('Дама', 'Пики');
    console.log(card2.equals(card));

})();
