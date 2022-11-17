console.log('Lodash is loaded:', typeof _ !== 'undefined');
// Object of players in an arr assigned to var players
var players = [
  {
    player: 'Thor',
    hand: []
  },
  {
    player: 'Loki',
    hand: []
  },
  {
    player: 'Groot',
    hand: []
  },
  {
    player: 'Rocket',
    hand: []
  }
];

// arr assign to var deck
var deck = [];

// define a function card deck that contains var suit and rank
// loop through rank and suit to create 52 objects and push that onto deck
function cardDeck() {
  var rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  var suit = ['clubs', 'diamonds', 'hearts', 'spades'];
  for (var i = 0; i < rank.length; i++) {
    for (var j = 0; j < suit.length; j++) {
      var card = {};
      card.rank = rank[i];
      card.suit = suit[j];
      deck.push(card);
    }
  }
  return deck;
}

//
cardDeck();

function shuffle(deck) {
  for (var i = 0; i < deck.length; i++) {
    var random = Math.floor(Math.random() * i);
    var turn = deck[i];
    deck[i] = deck[random];
    deck[random] = turn;
  }
  return deck;
}

var shuffled = shuffle(deck);

function deal(deck) {
  for (var i = 0; i < players.length; i++) {
    var cards = [];
    cards.push(deck.pop());
    cards.push(deck.pop());
    players[i].hand = cards;
  }
}

deal(shuffled);

function winner(players) {
  console.log(players);
  var totals = [];
  var sum = 0;
  for (var i = 0; i < players.length; i++) {
    var scores = [];
    for (var j = 0; j < players[i].hand.length; j++) {
      var rank = players[i].hand[j].rank;
      if (players[i].hand[j].rank === 'King' || players[i].hand[j].rank === 'Queen' || players[i].hand[j].rank === 'Jack') {
        rank = 10;
      } else if (players[i].hand[j].rank === 'Ace') {
        rank = 11;
      }
      scores.push(rank);
    }
    sum = scores[0] + scores[1];
    players[i].sum = sum;
    totals.push(sum);
  }
  var winnerScore = Math.max(...totals);
  var index = totals.indexOf(winnerScore);
  console.log('WINNER:', players[index].player);
}

winner(players);
