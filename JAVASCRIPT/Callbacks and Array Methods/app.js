// FOREACH: accepts a callback function , calls the function once per element in the array.

const numbers = [1,4,3,0,5,8,3,6,4,9,18,34,923,24,55,323];

function log(num){
    console.log(num);
}

numbers.forEach(log);


// most of time we're going to passa a function that's soly for this moment in time

numbers.forEach(function(el){
    if( el % 2 === 0){
        console.log(el);
    }
    
})

const movies = [
    {title:'Rambo',
    year:1982
},{
    title:'Alien',
    year:1999
}, {
    title:'Space odyssey',
    year:2002
}
];

movies.forEach(function(movie){
    console.log(movie);
})


// MAP FUNCTION
    // Creates a new array with the results of calling a function a callback on every element in the array

const numbersList = [1,2,34,9,56,21,98,33,12,434,11,121];

const saveList = numbersList.map(function(x) {return x * 2}
); // it's basically a way to map an array to one state to another.

const movieTitles = movies.map(function(movie){ // creating a new array only with the movie's title!
    return movie.title;
})

// ARROW FUNCTIONS 
    // this one is extremely valuable to learn!

        // let add = function(x,y){
            // return x * y;
        // };

let add = (x,y) =>{
    return x + y;
} // those two functions do the same thing, but arrow function allow us to create more "compact" code.

// in some especific situations we can simplifie even more arrow functions.
    // that's called IMPLICIT RETURNS

const rollDie = () =>(
    Math.floor(Math.random() * 6 ) +1
)

const add2 = (a,b) => a+b  // again, it only work for specifi situations!


//*****************************************

// THE METHODS BELOW HAVE NOTGHING TODO WITH ARRAYS, THEY'RE ALL ABOUT POSTPONING AND DELYING EXECUTIONS.

console.log('GOOD MORNING')
setTimeout(() => {console.log('HEy..........')}
, 5000);

console.log('OPS ITS AFTERNOON');

const id = setInterval(()=> {
    console.log(Math.random())
}, 2000);

// to prevent the function above to be running indefitedly, we use save on id and use clearInterval function.

clearInterval(id);

// THE FILTER METHOD
    // creates a new array with all elements that pass the test implemented by the provided function.

const evenNumbers = numbersList.filter( n =>{ return n % 2 === 0});

// EVERY & SOME

// EVERY: tests whether all elements in the array passes the provided function. it returns a boolean value.

const words = ['dog', 'cat','monkey','giraffe','fish','birds','horse','pork'];

words.every(word =>{
    return word.length ===3;
}) // false


// SOME: similar to every, but it returns true if ANY of the array elements pass the function.

words.some(word => {
    return word.length > 2;
})

// REDUCE METHOD: executes a reduce function on each element of the array, resulting in a single value.

const prices =[9.99, 1.50, 19.99, 49.99, 30.50];

let totalPrice = prices.reduce((total,price) =>{
    return total + price
})

let minPrice = prices.reduce((min, price)=>{
    if (min < price){
        return min
    } else{
        return price
    }
})

const evens = [2,4,6,8,12,16];
evens.reduce((sum,num)=>sum + num,100) // we can add a second parameter in reduce methods!

 // ARROW FUNCTIONS AND KEYWORD THIS.

 const someOne ={
     firstname:'Vagner',
     lastName:'ALves',
     fullName:()=>{
        return `${this.firstName} ${this.LastName}`
     },
     shoutName: function(){
         setTimeout(()=>{
             console.log(this);
             console.log(this.fullName())
         }, 3000)
     }
 }