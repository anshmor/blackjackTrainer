import './App.css';
import Hand from './Hand.js';

function App() {
  var suits = ["spade", "diamond", "club", "heart"];
  var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  function getDeck() {
    let deck = [];
    let howManyDecks = 1;

    for(let i = 0; i < suits.length * howManyDecks; i++)
    {
      for(let x = 0; x < values.length; x++)
      {
        let card = {Value: values[x], Suit: suits[i]};
        deck.push(card);
      }
    }

    return deck;
  }

  function shuffle(deck) {
    // for 1000 turns
    // switch the values of two random cards
    for (let i = 0; i < 1000; i++)
    {
      let location1 = Math.floor((Math.random() * deck.length));
      let location2 = Math.floor((Math.random() * deck.length));
      let tmp = deck[location1];

      deck[location1] = deck[location2];
      deck[location2] = tmp;
    }
  }

  let deck = getDeck();
  shuffle(deck);


  return (
    <Hand deck={deck}></Hand>
  );
}

export default App;
