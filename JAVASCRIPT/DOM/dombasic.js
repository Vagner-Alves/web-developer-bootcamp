// The Document Object Model

// SELECTING ELEMENTS

//getElementById

document.getElementById('ElementName here')

//getElementByTagName
document.getElementsByTagName('TagName here');


    
//getElementsByClassName
document.getElementsByClassName('class name here');

// a best way to select Elements than above
// QUERY SELECTOR

// Finds first h1 element:
document.querySelector('h1');

// Finds first element with ID of red:
document.querySelector('#red');

//finds first element with class of
document.querySelector('.big');

//querySelectorAll: same idea, but returns a collection of matching elements.
document.querySelectorAll('p');

const links = document.querySelectorAll('p a');

for(let link of links){
    console.log(link.href)
} // it prints all the hrefs links