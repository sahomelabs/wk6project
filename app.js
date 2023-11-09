let playerHand = [];
let dealerHand = [];

const cardFolder = "card_images";
const gameContainer = document.getElementById("game-container");
const playerHand = document.querySelector(".player")
const dealerHand = document.querySelector(".dealer-hand")


function dealInitalCards() {
    for (let i =0; i < 2; i++) {
        playerHand.push(dealCards());
        dealerHand.push(dealCards())
    }

    renderHands();
}

function dealCards(){
    }

    function renderHands () {
        playerHand.innerHTML = playerHand.map(card => '<img src='${cards}" alt="${card}" class="card").join('');
        dealerHand.innerHTML = dealerHand.map(card => `<img src="${cardFolder}/${card}.png" alt="${card}" class="card">`).join('');

    }
}


// const suits = []
// const values = []
// let deck =[];
// let currentCard;
// let betAmount = 0;
// let totalBet = 0;


