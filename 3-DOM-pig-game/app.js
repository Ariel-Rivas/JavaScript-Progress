/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

  //     0 (player1) and 1(player2)

//Now use Math.random() and multiplie it by 6(+1) to get a random number 
//between 1 and 6, but to get a integrer value we have to use Math.floor() - remove decimals numbers;


//document.querySelector('#current-' + turnFor).textContent = dice;
//document.querySelector('#current-' + turnFor).innerHTML = '<em>' + dice + '</em>';

//queryselector(<id>) to choose the element in the HTML file.
//texteContent to change the text of the HTML file.
//.innerHTML to write some html code in javascript code.


//var x = document.querySelector('#score-0').textContent;
//console.log(x);
//we can use it also as converter to get data in html to javascript


//document.querySelector('.dice').style.display = 'none';
//to use querySelector with a class element  = (.classElement); inside querySelector
//we can also use querySelector with   .style.display = '' to include some CSS code


var scores, roundScore, turnFor;
var systemON = true;


function reset(){
    roundScore = 0;
    scores = [0,0];
    turnFor = 0;
    systemON = true;

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

}

reset();


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(systemON == true){
        //1. Random Number
        var dice = Math.floor(Math.random()*6)+1;

        //2. Display the result
    
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';// pick image
        //document.querySelector('#current-' + turnFor).textContent = dice;


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

        if(scores[turnFor] >= 15){
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
    
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

   changeTurn();
   
    //if class is not 'active' then toggle will add 'active' state 
    //else if class is active then toggle will eliminate 'active'.

    document.querySelector('.dice').style.display = 'none';

}

function changeTurn (){
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

 
// document.querySelector('.dice-' + dice + '.png');


//when use a addEventListener use anoymous use funciton like this: ('click', function) (without parenthesis);

//FINISHED :D