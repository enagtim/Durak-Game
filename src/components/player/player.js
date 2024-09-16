export class Player {
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
