//Player and Dealer, Card Dekc and Card Mapping 
let danielCasinoGame = {
    'player': {'scoreSpan': '#playerscore' , 'div': '#player-score', 'score': 0},
    'dealer': {'scoreSpan': '#dealerscore' , 'div': '#dealer-score', 'score': 0},
    
    'cards': ['2-C','3-C','4-C','5-C','6-C','7-C','8-C','9-C','10-C','K-C','Q-C','J-C','A-C',
    '2-D','3-D','4-D','5-D','6-D','7-D','8-D','9-D','10-D','K-D','Q-D','J-D','A-D',
    '2-H','3-H','4-H','5-H','6-H','7-H','8-H','9-H','10-H','K-H','Q-H','J-H','A-H',
    '2-S','3-S','4-S','5-S','6-S','7-S','8S','9-S','10-S','K-S','Q-S','J-S','A-S'],
    
    'cardsmap': {'2-C':2,'3-C':3,'4-C':4,'5-C':5,'6-C':6,'7-C':7,'8-C':8,'9-C':9,'10-C':10,'K-C':10,'Q-C':10,'J-C':10,'A-C':[1, 11],
    '2-D':2,'3-D':3,'4-D':4,'5-D':5,'6-D':6,'7-D':7,'8-D':8,'9-D':9,'10-D':10,'K-D':10,'Q-D':10,'J-D':10,'A-D':[1, 11],
    '2-H':2,'3-H':3,'4-H':4,'5-H':5,'6-H':6,'7-H':7,'8-H':8,'9-H':9,'10-H':10,'K-H':10,'Q-H':10,'J-H':10,'A-H':[1, 11],
    '2-S':2,'3-S':3,'4-S':4,'5-S':5,'6-S':6,'7-S':7,'8-S':8,'9-S':9,'10-S':10,'K-S':10,'Q-S':10,'J-S':10,'A-S':[1, 11]},

    
};


const Player = danielCasinoGame['player'];
const Dealer = danielCasinoGame['dealer'];

function drawCard(activeplayer) {
    const randomNumber = Math.floor(Math.random() * (danielCasinoGame['cards'].length));
    const currentCard = danielCasinoGame['cards'].splice(randomNumber, 1);
    let card = document.createElement('img');
    card.src = `./card_images/${currentCard}.png`;
    document.querySelector(activeplayer['div']).appendChild(card);
    
    // Update Score
    updateScore(currentCard, activeplayer);

    // Show Score
    showScore(activeplayer);
    
}

function updateScore(currentcard, activeplayer){
    // For Ace
    if(currentcard == 'A-C' || currentcard == 'A-D' || currentcard == 'A-H' || currentcard == 'A-S'){
        if((activeplayer['score'] + danielCasinoGame['cardsmap'][currentcard][1]) <= 21){

            activeplayer['score'] += danielCasinoGame['cardsmap'][currentcard][1];
        }
        else{
            activeplayer['score'] += danielCasinoGame['cardsmap'][currentcard][0];
        }
    }
    else{  //For Other Cases
        activeplayer['score'] += danielCasinoGame['cardsmap'][currentcard];
    }   
}

// Score Function 
function showScore(activeplayer){
    if(activeplayer['score']>21){
        document.querySelector(activeplayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activeplayer['scoreSpan']).style.color = 'red';
    }
    else{
        document.querySelector(activeplayer['scoreSpan']).textContent = activeplayer['score'];
    }
}







