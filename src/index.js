import { Player } from "./components/player/player";
import { Card } from "./components/card/card";
import { Deck } from "./components/deck/deck";
import { Game } from "./components/game/game";

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

console.log(players);
console.log(players[1].checkHasCard({ rank: 'Король', suit: 'Черви' }));
console.log(players[1].getCard());

const card = players[2].hand[0];
const card2 = new Card('Дама', 'Пики');
console.log(card2.equals(card));


