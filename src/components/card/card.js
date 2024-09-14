export class Card {
    constructor(rank, suit) {
        this.rank = rank
        this.suit = suit
    }
    getRank() {
        return this.rank;
    }
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
            case 'Валет':
                return 11;
            case 'Дама':
                return 12;
            case 'Король':
                return 13;
            case 'Туз':
                return 14;
            default:
                throw new Error('Карта не соответсвует ни одному рангу!!!');
        }
    }
    equals(otherCard) {
        if (this.rank === otherCard.rank && this.suit === otherCard.suit) {
            return true;
        } else {
            return false;
        }
    }
    /// Доделать методы проверки равенства карт
}