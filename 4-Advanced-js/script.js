// Function constructor  Most used, and in my opinion easier to use
/*

var Person = function(name,yearBirth,job) {
    this.name = name;
    this.yearBirth = yearBirth;
    this.job = job;
}

var jhon = new Person('Jhon', 1990, 'teacher');
var jane = new Person('Jane', 2000, 'designer');
var mark = new Person('Mark', 1996, 'medic');


//The prototype function can be used by all objects derived from the PERSON Constructor.
Person.prototype.calculateAge = function (){
    console.log(2020 - this.yearBirth);
}
//For prototype properties
Person.prototype.lastName = (' Saverin')
//--------------------------------------------------------//



jhon.calculateAge();
jane.calculateAge();
mark.calculateAge();


console.log(jhon.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/



//Object.create   you can assign the 'Protoype' role to every object you want
/*
personProto = {
    calculateAge: function(){
        console.log(2020 - yearBirth);
    }
};

var jhon = Object.create(personProto);
jhon.name = 'jhon';
jhon.yearBirth = 1990;
jhon.job = 'teacher';


var jane = Object.create(personProto,{
    mame: {value: 'Jane' },
    yearBirth: { value: 1969 },
    job: {value : 'desginer' },
});
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Primitves vs Objects

//Primitives:
/*
var a=10, b=a;
a = 50;
console.log(a,b);
// b takes value of a then a change his value but b still with the old value of a


//--------------------------------------------// VS

//Objects
var soda = {
    sugar: 500,
    quantity: 250,
};
var copysoda = soda;
soda.quantity = 100;

console.log(soda.quantity, copysoda.quantity);
//same value = because javascript only change the location of the object info
//instad of copying and create another object , like primitive variables do

//--------------------------------------------// 

// same with Funcitons
/*
var age = 15;
var obj = {
    name: 'Jonas',
    city: 'Lisbon',
};

function change (a,b){
    a = 30;
    b.city = 'san francisco';
}
change(age,obj);

console.log(age);
console.log(obj.city);
*/
//it's not so clear, so FUTURE ME, you should come back later...
//Course C:64 Udemy;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Passing functions as arguments
/*
var birthYears = [1990, 2000, 2005, 1950, 1970];

function arrayCalc(arr, fn){//without parenthesis to not execute inmediately
    resultArray = [];
    for(var i=0; i<arr.length; i++){
        resultArray.push(fn(arr[i]));
    }
    return resultArray;
}

function calculateAge(year){
    return 2020-year;
}

function Over18(year){
    if(year >= 18)return true;
    else return false;
}

function maxHeartRate(year){
    return 206.9 - (0.67 * year);
}

var ages = arrayCalc(birthYears, calculateAge);
var fullAges = arrayCalc(ages, Over18);
console.log(ages);
console.log(fullAges);

var heartRates = arrayCalc(ages, maxHeartRate);

console.log(heartRates);
*/
//interesting 
//something powerful :P
// C:65 Udemy

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Functions returning Functions
/*
function interview (job){
    if(job == 'teacher'){
        return function(name){
            console.log('What subject do you teach ' 
            + name + '?');
        }

    }else if(job == 'chef'){
        return function(name){
            console.log('if you do a Parfait for me you are in ' + name);
        }
    }

}
var interviewRes = interview('chef');//now interviewRes will become the function 
//that is with the 'chef' condition;
//then we can pass a name to our new function interviewRes

interviewRes('Ariel');// call interview, store it in a variable then use it as function 
//or

interview('teacher')('larry') //call the main function and pass the two values

*/
//Another interesting feature
//C:66 Udemy


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//IIFE Inmediately invoked Function Expressions for private scope


//imaigne a little game, when if your random value >= 5 you win
/*
(function(){
    var score = Math.floor(Math.random()*10);
    console.log (score >= 5);
}) ();

//also

(function (goodluck){
    var score = Math.floor(Math.random()*10);
    if(score >= 5-goodluck)console.log('true');
    else console.log('false');
}) (5);

*/
//C: 67 Udemy Not 100% understood;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Closures
/*
function retirement (retAge){
    var message = " years left until retirement";

    return function(yearBirth){
        var age = 2020 - yearBirth;
        console.log((retAge - age) + message);
    }
}

var boliviaRetirement = retirement(58);
  // crap.. 43  years left until retirement for me :'v
//that means i have 43 years to leave latinamerica /:v/, i'll try to get out of here as soon as possible ._.

var retirementUS = retirement(66);
var retirementIceland = retirement(67);

boliviaRetirement(2005);
retirementUS(2005);
retirementIceland(2005);

//okay, the thing here, is that we can still using message variable
//, even after retirement already returned;

*/

/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
//The thing to remmember here is:
//-----------------------------------------//
//An inner function has always access to the variables and parameters of its outer function
//even after the outher function has returned... 
//i mean (wat? :V, ,but OK i think i got it, *I THINK*)
//-----------------------------------------//
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/



//Now try the interview code with closures --:SOLVED
/*
function interview(job){
    return function(name){      
        if(job == 'teacher'){
            console.log('luckily we need a lot of teachers, so you are in ' + name);
        }else if(job == 'esports-competitor'){
            console.log('i dont understand how playing has became a job, anyways you are in ' + name);
        }else{
            console.log('you are in ' + name +' :v');
        }
    }
}

interview('esports-competitor')('Sistine');
interview('teacher')('Re=L');
interview('a SIMP')('Donald');
*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Bind, call and apply methods
/*
var jhon = {
    name: 'Jhon',
    age: 26,
    presentation: function(style,timeDay){
        if(style == 'formal'){
            console.log('Good ' + timeDay + ' Ladies and gentlemen ' 
            + 'my name is ' + this.name + ' and i\'m '+  this.age + ' years old');
        }
        if(style == 'friendly'){
            console.log('What\'s up boys good ' + timeDay + ' my name is ' + 
            this.name + ' and i\'m '+  this.age + ' years old');
        }
    }
}

jhon.presentation('formal', 'morning');
var emily = {
    name: 'Emily',
    age: 18
}

//= CALL & APPLY

//emily don't have the presentation: method, but we can still use it
//with emily using = call.

jhon.presentation.call(emily, 'friendly', 'night');
//another similar method is .apply  where the only difference
//is that .apply use an array in the second variable parameter.


//= BIND

//return a function then save it
var jhonFriendly = jhon.presentation.bind(jhon, 'friendly');
//now jhonFriendly is waiting the timeDay parameter
jhonFriendly('afternoon');
jhonFriendly('midnight');

var emilyFormal = jhon.presentation.bind(emily, 'formal');
emilyFormal('morning night :V');

//in my opinion, useless and weird :/
//30% understood :"V
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

