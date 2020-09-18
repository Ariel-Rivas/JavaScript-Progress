////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Coding challenge: 
 *If someone have 2 six in a row, he lose all his total points
 *Add the posibility to  to write the winner score
 *Add a second fully functional dice // FAIL coz idk CSS and HTML :"v --  im only working in a pre-fabricated page.
--------------------------------------------------------------------------*/

var scores,twoSix, roundScore, turnFor;
var systemON = true;


function reset(){
    roundScore = 0;
    scores = [0,0]; 
    turnFor = 0;
    systemON = true;
    twoSix = 0;

    document.querySelector('.dice').style.display = 'none'; // hide image
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    //...
}

reset();


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(systemON == true){
        //1. Random Number
        var dice = Math.floor(Math.random()*6)+1;//6;

        //1.5 If two 6 in a row
        if(dice == 6)twoSix++;
        else twoSix = 0;

        if(twoSix == 2){
            console.log('already two six');
            scores[turnFor] = 0;
            document.getElementById('score-' + turnFor).textContent = '0';
            roundScore = 0;
            nextPlayer();
        }
        //2. Display the result
    
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';// pick image

        //3. Update the roudn score IF the rolled number was NOt a 1
        if(dice !== 1){
            roundScore = roundScore + dice;
            document.querySelector('#current-' + turnFor).textContent = roundScore;
        }else{
            //Next Player
            nextPlayer();

        }
    }    
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(systemON == true){
        //Add current score to total score
        scores[turnFor] = roundScore + scores[turnFor];

        // Update UI    
        document.querySelector('#score-' + turnFor).textContent = scores[turnFor];

        //Check if player wont he game
        var maxScore = document.querySelector('.win-score').value;
        console.log(maxScore);

        if(!maxScore)maxScore = 100;

        if(scores[turnFor] >= maxScore){
            document.querySelector('#name-' + turnFor).textContent = 'WINNER';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + turnFor + '-panel').classList.add('winner');
            document.querySelector('.player-' + turnFor + '-panel').classList.remove('active');
            systemON = false;
            //changeTurn();
        }else{
            nextPlayer();
        }
    //Next Player
    }
    
    
});

document.querySelector('.btn-new').addEventListener('click', reset);  // NEW GAME

function nextPlayer(){
    //Next Player
    if(turnFor == 1)turnFor  = 0;
    else turnFor = 1;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    twoSix = 0;
    changeTurn();
    document.querySelector('.dice').style.display = 'none';

}

function changeTurn (){//display change
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

