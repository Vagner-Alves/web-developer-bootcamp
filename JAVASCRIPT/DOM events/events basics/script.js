const btn = document.querySelector('#button');

btn.onclick = function(){
    console.log('You Clicked ME');
    console.log('Stop poking me mf!')
}

function scream(){
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
}

btn.onmouseenter = scream;

// using arrow function as an example below:

document.querySelector('h1').onclick = () => {alert("i'm an arrow and i'm gonna sting YOU")};

// addEventListener
// specify  the event type and a callback to run
// second colt steele (udemy instructor) this method is by far the most commonly used, so I should stick to it!
const b3 = document.querySelector('#button3');

b3.addEventListener('mouseup', ()=>{
    alert('Im listening I guess' )
})

const st = document.querySelector('#st');

function shout(){
    console.log('SHOUT')
}

function twist(){
    console.log('TWIST')
}

//st.onclick = shout;   // the newest method will overwrite the last one ( we can't have both like that)
//st.onclick = twist;

st.addEventListener('click',shout)
// by using addEventListener we can have both function assigned with our button!
st.addEventListener('click', twist)


