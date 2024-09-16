import { Card } from "../card/card";
export class Deck {
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
        if (this.deck.length < players.length * cards) {
            throw new Error('There are not enough cards in the deck to play Durak-game!!')
        };
        for (let i = 0; i < players.length; i++) {
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