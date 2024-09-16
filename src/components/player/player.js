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
            throw new Error('Card not found!');
        }
    }
    checkHasCard(card) {
        const findCard = this.hand.find(handCard => handCard.rank === card.rank && handCard.suit === card.suit);
        if (findCard !== undefined) {
            return true;
        } else {
            throw new Error('You do not have like card!');
        }
    }
    getCard() {
        return `Player ${this.name} have cards: ${this.hand.length}`;
    }
}
