import { Player } from "./components/player/player";
import { Card } from "./components/card/card";
import { Deck } from "./components/deck/deck";

const deck = new Deck();
console.log(deck.createDeck());
deck.shuffleDeck();
deck.shuffleDeck();
deck.shuffleDeck();
deck.shuffleDeck();
deck.shuffleDeck();

const players = [new Player('Harry'), new Player('Alex'), new Player('Tom')];
players[0].addCardHand({ rank: 'Валет', suit: 'Пики' })
players[0].addCardHand({ rank: '7', suit: 'Крести' })
players[1].addCardHand({ rank: 'Король', suit: 'Черви' })
players[1].addCardHand({ rank: 'Туз', suit: 'Буби' })
players[2].addCardHand({ rank: 'Дама', suit: 'Пики' })
players[2].addCardHand({ rank: '6', suit: 'Черви' })
players[0].deleteCard({ rank: 'Валет', suit: 'Пики' });
console.log(players);
console.log(players[1].checkHasCard({ rank: 'Король', suit: 'Черви' }));
console.log(players[1].getCard());
// console.log(players[2].hand.equals({ rank: 'Дама', suit: 'Пики' }));
console.log(players[1].hand);

