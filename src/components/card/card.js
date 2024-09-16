export class Card {
    constructor(rank, suit) {
        this.rank = rank
        this.suit = suit
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
    // Является ли карта козырем
    isTrump(trumpSuit) {
        return this.suit === trumpSuit;
    }
}