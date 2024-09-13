import { Card } from "../card/card";
export class Deck {
    constructor() {
        this.siuts = ['Черви', 'Буби', 'Пики', 'Крести'];
        this.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'В', 'Д', 'K', 'Т'];
        this.deck = [];
    };
    createDeck() {
        for (siut of this.siuts) {
            for (rank of this.ranks) {
                this.deck.push(new Card(rank, siut));
            }
        }
    };
    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
        return this.deck;
    };
    dealingСards() {
        // Раздача карт
        // проверку на наличие карт в колоде.
    }
}