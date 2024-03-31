const form = document.querySelector('#formShelter');
const input = document.querySelector('#DogName');
const list = document.querySelector('#Dogs');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const dogName = input.value; // gets the value of the input above
    const newLi = document.createElement('LI');
    newLi.innerText = dogName;
    list.append(newLi);
    input.value = '';
})