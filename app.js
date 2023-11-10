
// this function is for Hit when player click Hit 
document.querySelector('hit').addEventListener('click', Playerhit);

function Playerhit(){
    if(Dealer['score'] ===0) {
        if (you['score']<=21){
            drawCard(you)
        }
    }
}