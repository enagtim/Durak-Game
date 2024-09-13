export class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    addCardHand(card) {
        return this.hand.push(card);
    }
    // Метод для удаления карты из руки
    deleteCard(card) {
        // Логика удаления карты
    }

    // Метод для проверки наличия карты
    hasCard(card) {
        // Логика проверки наличия карты
    }

    // Метод для получения количества карт
    getCardCount() {
        // Метод получения количества карт
    }

    // Метод для отображения карт
    showHand() {
        // Метод отображения карт
    }
}
