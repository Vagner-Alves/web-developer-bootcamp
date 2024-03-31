let rating = 3;
let random = Math.random();

if (random < 0.5){
    console.log("Catch it", random);
}

if (rating === 5){
    console.log("wait......");
}
console.log("Math is still working")

const dayofWeek = ['Monday', 'Tuesday', "wensday", 'thusday', 'friday', 'saturday','Sunday']
console.log(dayofWeek)

if (dayofWeek[2] === 'friday'){
    console.log(`it's ${dayofWeek[4]}`);
} else if (dayofWeek[5] === 'saturday'){
    console.log("its saturday!!!!!!!");
} else if (dayofWeek[4] === 'friday'){
    console.log("Best day ever!!!!!!!");
}

let age = 4;

if (age < 5){
    console.log("You are a baby. You can enter for free!");
} else if (age < 10){
    console.log("You are a child. You pay $5 ok?");
} else if(age > 65){
    console.log("You are a senior. you pay $10");
}

// nested conditionals :D

//const password = prompt("please enter a new Password: ");

//if (password.length >= 6) {
    //if (password.indexOf(' ') === -1){
        //console.log('Valid Password!')
    //}   else{
       // console.log("Password must Be spaceless")
    //}
    //console.log("Long enough Password!")
//} else{
    //console.log("Password Must be 6+ characters!")}


 // and conditional 

 const password = prompt("Please enter a Password right below: ");

 if (password.length >= 6 && password.indexOf(' ') == -1){
     console.log("That's sound good to me.");
 }  else{
     console.log("Password must be 6+ characters and spaceless: ");
 }


// switch statement ( don't worry about memorizing this)

const day = 12;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("wendnesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("friday");
        break;
    default:
        console.log("Don't even know :C")
}