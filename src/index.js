import { Game } from "./components/game/game";
import { Player } from "./components/player/player";
import { Deck } from "./components/deck/deck";

const players = [new Player('Tom'), new Player('Alex'), new Player('Leonardo')];
const deck = new Deck();
const trumpSuit = 'Bubi';

const game = new Game(players, deck, trumpSuit);
game.startGame();

console.log(game);