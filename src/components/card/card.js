export class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
    get suit() {
        return this.suit;
    }
    get rank() {
        return this.rank;
    }
    toString() {
        return `${this.rank} ${this.suit}`;
    }
    getValueRank() {
        switch (this.rank) {
            case '2':
                return 3;
            case '4':
                return 4;
            case '5':
                return 5;
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
            case 'В':
                return 11;
            case 'Д':
                return 12;
            case 'К':
                return 13;
            case 'Т':
                return 14;
        }
    }
}