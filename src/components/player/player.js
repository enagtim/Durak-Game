export class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    addCardHand(card) {
        return this.hand.push(card);
    }
    deleteCard(card) {
        const index = this.hand.findIndex(handCard => handCard.rank === card.rank && handCard.suit === card.suit);
        if (index !== -1) {
            this.hand.splice(index, 1);
        } else {
            throw new Error('Карта не найдена!');
        }
    }
    checkHasCard(card) {
        const findCard = this.hand.findIndex(handCard => handCard.rank === card.rank && handCard.suit === card.suit);
        if (findCard !== 1) {
            return true;
        } else {
            throw new Error('Такой карты у вас нет!!');
        }
    }
    getCard() {
        return `У игрока ${this.name} количество карта : ${this.hand.length}`;
    }
}
