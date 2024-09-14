import { Card } from "../card/card";
export class Deck {
    constructor() {
        this.suits = ['Черви', 'Буби', 'Пики', 'Крести'];
        this.ranks = ['6', '7', '8', '9', '10', 'Валет', 'Дама', 'Король', 'Туз'];
        this.deck = [];
    };
    createDeck() {
        for (const suit of this.suits) {
            for (const rank of this.ranks) {
                this.deck.push(new Card(rank, suit));
            }
        }
        return this.deck;
    };
    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
        return this.deck;
    };
    dealingСards(numPlayers, numCards) {
        if (this.deck.length < numPlayers * numCards) {
            throw new Error('В колоде недостаточно карт для игры в Дурака!!')
        };
        const players = [];
        for (let i = 0; i < numPlayers; i++) {
            for (let j = 0; i < numCards; j++) {
                const card = this.deck.pop();
                players.push(card)
            }
        }
        return players;
    }
}