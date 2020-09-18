///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Coding challenge 7, (with expert level included) = SOLVED  it works :)

(function (){
    //here the code;
    var exitGame = false, totalPoints = 0;
    
    var question = function (message, option1, option2, correct){
        this.message = message;
        this.option1 = option1;
        this.option2 = option2;
        this.correct = correct;
    }

    var options  = [];
    options[1] = new question
    ('Do you want to escape from Latinamerica?','0: YES', '1: NO', 0);

    options[2]  = new question
    ('Are you tired?', '0: OFC', '1: A BIT', 0);

    options[3] = new question
    ('would you like a girlfriend?', 
    '0: Yes, but it would be a obstacle to achieve what i want',
    '1: i would like a programmer gf, but probablities are 1/100 k', 1);
    
    function again(){
        var questionSelected = Math.floor(Math.random()*3)+1;
        console.log(options[questionSelected].message + '\n' + options[questionSelected].option1 + '\n' + options[questionSelected].option2);

        //var answerSelected = prompt();
        var answerSelected = prompt('select your answer: ');
        if(answerSelected === 'exit') return false;
        if(answerSelected == options[questionSelected].correct){
            totalPoints++;
            console.log('CORRECT +1' + '  //Current score: '+ totalPoints);
        } 
        else if(answerSelected != options[questionSelected].correct 
        && answerSelected !== 'exit'){
            totalPoints--;
            console.log('INCORRECT -1'+ '  //Current score: '+ totalPoints);
        }
        
    } 

    while(again() != false);

    


}) ();

//console.log('does the console still working?')
