document.addEventListener('DOMContentLoaded', () =>{
 //card options
 const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  }
]
   cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('.result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []
  var cardsWonId = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }
  

//check for match
function checkForMatch() {
    var cards = document.querySelectorAll('.grid img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      resultDisplay.textContent = "Found A MATCH";
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
      cardsWonId.push(cardsChosenId);
      
      var score =+ 1;
      
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      
    }
    
     for (let i = 0; i < cardArray.length; i++) {
      cards[i].addEventListener('click', flipCard);
    } 
    cardsWonId.forEach(function(data){
      cards[data[1]].removeEventListener('click', flipCard);
      cards[data[0]].removeEventListener('click', flipCard)
    })
    // for(let i = 0; i < cardsWonId.length; i++) {
    //   console.log(cardsWonId)
    //  cards[cardsWonId[i][i]].removeEventListener('click', flipCard)
    //  cards[cardsWonId[i][i +1]].removeEventListener('click', flipCard)
    // }

     
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!';
    }
  }

//flip your card
function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
     var cards = document.querySelectorAll('img');
     
    if (cardsChosen.length === 2) {
       for (let i = 0; i < cardArray.length; i++) {
        cards[i].removeEventListener('click', flipCard)
      }
      setTimeout(checkForMatch, 500);
    }
  }

  // Start a new Game
  document.getElementById('newGame').addEventListener('click', newGame);
  function newGame() {
    window.location.assign("./index.html")
  }
createBoard();
})

