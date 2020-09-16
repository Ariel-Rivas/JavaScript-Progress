//BASIC STUFF OF JAVASCRIPT


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// inputs and outputs
/*------------------------------------
var firstName = 'Uber';
var lastName = 'Eats';
var isNear = false;
//bool fullAge = true;  not like this, it doesn't work

console.log(firstName + ' ' + lastName + ' are they near of your location? ' + isNear + '\n');

var FavSong = prompt ('what kind of music you listen?');
console.log(FavSong); */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Operators
/*------------------------------------
console.log('Put 2 numbersp: \n');
var num1 = prompt('insert number');
var num2 = prompt('insert another number');

if(num1 == num2)console.log('equal');
if(num1 < num2)console.log('number 2 is bigger than number 1 \n');
if(num1 > num2)console.log('number 1 is bigger than number 2 \n');

console.log('typeof tells you the the type or variable  = ' + typeof 'this is a string \n')

// prompt (num1, num2, num3); */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//First Problem: Solved
/*--------------------------------------

var JhonMass = prompt('insert Jhon weight: ');
var MarkMass = prompt('insert Mark weightv ');
var JhonHeight = prompt('insert Jhon height: ');
var MarkHeight = prompt ('insert Mark height: ');
var isMarkQ = undefined;


if(JhonMass/(JhonHeight*JhonHeight) > MarkMass/(MarkHeight*MarkHeight)){
    isMarkQ = false;
    console.log('Is Mark BMI higher than Jhon? = ' + isMarkQ);
}else{
    isMarkQ = true;
    console.log('Is Mark BMI higher than Jhon? = ' + isMarkQ)
}
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Second Problem: Solved
/*--------------------------------------

var n1,n2,n3, x1,x2,x3, p1,p2,p3;//n Jhons, x Marks; Scores
n1 = prompt();n2 = prompt(); n3 = prompt();
x1 = prompt();x2 = prompt(); x3 = prompt();
p1 = prompt();p2 = prompt(); p3 = prompt();



var Maximo = Math.max((p1+p2+p3)/3, Math.max((n1+n2+n3)/3, (x1+x2+x3)/3));

if(Maximo == (p1+p2+p3)/3)console.log('Maria average points is higher');
if(Maximo == (x1+x2+x3)/3)console.log('Mark average points is higher');
if(Maximo == (n1+n2+n3)/3)console.log('Jhon average points is higher');

*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions:
/*--------------------------------------

function calculateAge(CurrentYear, birth){
    switch(CurrentYear){
        case '2100':
            return 'Everyone gonna die this year';
    }
    //else
    return 'You are ' + (CurrentYear - birth) + ' years old';

    //Honestly i do prefer if's instead of switch
}

var Cyear = prompt('Insert current year: ');
var Cbirth = prompt('Insert year of birth: ');
console.log(calculateAge(Cyear, Cbirth));
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Arrays in Javascript
/*----------------------------------------
var ages = [12, 15, 18, 24];
console.log(ages[0]);

ages.push(50); // something like push_back in c++
ages.unshift(100);// something like push_front in c++;
console.log(ages);//ez

ages.pop();// pop_back in c++;
ages.shift();// pop_front in c++;
console.log(ages);// again original array of c-91

console.log('15 is at position ' + ages.indexOf(15));// of array in c-91

var stonks = [];
for(var i=0;i<10;i++)stonks[i] = prompt();
console.log(stonks); // print 10 elments

//input array same as c++ as expected

*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Objects and Properties
/*-----------------------------------------
// for function is [] , for object is {};
var jhon = {
    firstname:'Jhon', //use , instead of 
    lastname: 'Brunel',
    birthyear: 2000,
    family: ['jane', 'mark', 'Matias', 'bruh'], 
    job: 'streamer', 
    ismarried: 'false', // alone :'v
}; //use ; at the end of a object

console.log(jhon);// all about jhon
console.log( '\n' + jhon.family);// only family (or .whatever :v)
//also we can do this

var saveboi = 'birthyear';//of jhon
console.log(jhon[saveboi]);
// it reminds me a map in c++
// like map <string,int> something 

jhon.job = 'medic'; //change job from streamer to medic c-122
console.log(jhon);

jhon.ismarried = true;
console.log(jhon);// now jhon is married

/*We can also do
var student = new Object();    then fill it
student.age = 12;
student.nationality = 'Russia' //USSR MUSIC :V
etc.. 

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Objects and Methods
/*------------------------------------------

var jhon = {
    firstname:'Jhon', 
    lastname: 'Brunel',
    birthyear: 2000,
    family: ['jane', 'mark', 'Matias', 'bruh'], 
    job: 'streamer', 
    ismarried: 'false',

    calculateAge: function(birthyear){
        return 2020 - birthyear; //or this.birthyear to use the current birthyear of jhon in the object
    }
};
var n = prompt('birhyear of Jhon: ');
jhon.age = jhon.calculateAge(n);
console.log(jhon);
console.log(jhon.calculateAge(n) + ' years old');// in case to use this.birthyear only : console.log(jhon.calculateAge());

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem with objects and methods: Solved
/*-------------------------------------------

var Jhon =  {
    height: prompt('insert jhons height :'),
    mass: prompt('Insert Jhons weight :'),
    calcBMI: function(height,mass){
        return this.mass / this.height * this.height;
    }
};

var Mark = {
    height: prompt('insert Mark height :'),
    mass: prompt ('insert Marks weight :'),

    calcBMI: function(height,mass){
        return this.mass / this.height * this.height;
    }
};

if(Jhon.calcBMI() > Mark.calcBMI()){
        console.log('Jhon BMI is higher than Mark BMI');
    }else console.log('Mark BMI is higher than Jhon BMI');

    */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
