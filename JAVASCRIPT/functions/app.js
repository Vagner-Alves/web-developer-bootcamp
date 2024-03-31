function printf(){
    console.log('abc');
}
printf();

// javascript considers functions as any other value. you can store them 
// in a varible if you want.

const myTest = function(x, y){
    return x + y;
}

// Block scope. 

let pizza = null;

function pizzaria(){
    let pizza =  'margerita' // this variable only exist inside this function
    console.log(`Your pizza is ${pizza}`);
}

pizzaria()

console.log(pizza);

// which means that the value printed out above will be null.


// lexical scoping

function bankRobbery(){
    const heroes = ['Spiderman','Superman', 'Batman', 'BlackPanther', 'WonderWoman', 'Flash'];
    function cryForHelp(){
        function inner(){
            for (let hero of heroes){
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
        }
       
        }
        inner();
    }
    cryForHelp();  // an inner function has access to the scope (variables). of the parent function!. 
}

// Higher order functions
    // * functions that operate on/with other functions.
    // * they can: Accept other as arguments , return a function.

let green = function() {console.log('Hello!')}

function callTwice(f){
    f();
    f();
    }

function callTenTimes(func){
    for (let i = 0; i < 10; i++){
        func();
    }
}

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll);
}

callTwice(rollDie);

// the second function will be pass as an argument and will be called twice by the first one (or ten times by the fu
//nction in the middle).

// The second BulletPoint , returning a function as value!

function makeMysteryFunc(){
    let rand = Math.random();
    if ( rand > 0.5){
        return function(){
            console.log('CONGRATS YOU KNOW JAVASCRIPT');
            console.log('CONGRATS YOU GONNA BE RICH');
        }
    } else{
        return function(){
            alert('WARNING YOU ARE NOT AS SMART AS YOU THINK');
            alert('YOU NEED TO STUDY AND FOCUS  MORE!');
            alert('STOP TRYING TO CLOSE THIS WINDOW');
            alert('STOP TRYING TO CLOSE THIS WINDOW');
            alert('STOP TRYING TO CLOSE THIS WINDOW');
            alert('STOP TRYING TO CLOSE THIS WINDOW');
        }
    }
}

// a function that tells me if a number is between 50 and 100, using the same principles abore.

function isBetween(min, max){
    return function(num){
        return num >= min && num <= max;
    }
}


// METHODS 

// we can add function as properties on objects, we call them methods // objects in js are analogs to python dictionaires.

const math = {
    multiply    :function(x, y){ return x * y;
    },
    divide  :function(x,y){
        return x/y;
    },
    square  :function(x){ return x * x;}
}


const myMath = {
    Pi: 3.14156 ,
    square: function(num){
        return num * num;
    },
    cube:function(num){
        return num **3;
    }
}

// ShortHand to create methods:

const myMathShortHand = {
    Pi: 3.14156 ,
    square (num){   // it works as same as above, but we can eliminate the function keyword to make it shorter.
        return num * num;
    },
    cube (num){
        return num **3;
    }
}

// THIS (keyword)
    // use the keyword this to access other properties on the same object.

const person = {
    first: 'Vagner',
    last: 'ferreira',
    fullName(){
        return `My Name is ${this.first} ${this.last} `;
    }
}

console.log(person.fullName());
console.log(person.last = 'Alves');
console.log(person.fullName());          

const cat = {
    name: 'Kinha',
    color: 'Mix (black , white & blown)',
    breed:'I dont have idea',
    meow(){
        console.log('this is', this);
        console.log(` my name is ${this.name} and MEOW my color ${this.color}`);
    }

}

const meow2 = cat.meow;

// Try & catch (similar to try:except in Python)

try{
    hello.toUpperCase();
} catch{
    alert('ERROR, you need to assign a value (string) to hello');
}

// the example above is silly ( deliberately creating an error), but is important to know this
    //  there's a lot of situations where we could get some errors; like working with
        // ajax, making request, api's, asyc js,  triying to connect to internet and son on.

function yell(msg){
    try{ // if not a string ( can't use the uppercase method) we going to get an error.
        console.log(msg.toUpperCase().repeat(3))
    } catch(e) {
        console.log("Please pass a string next time :)")
    } // here we capture the error!
    
}