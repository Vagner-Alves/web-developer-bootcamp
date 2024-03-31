const btn = document.querySelectorAll('button');
const h1 = document.querySelectorAll('h1');

for(let h of h1){
    h.innerText = "i'm ugly";
    h.addEventListener('click', colorize)
}

for(let button of btn){
    button.innerText = 'ClickME'
    button.addEventListener('click', colorize)
}

function colorize(){
    this.style.backgroundColor = newColor();
    this.style.color = newColor();
}


const newColor = ()=>{
    const a = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const c = Math.floor(Math.random() * 255);
    const color = `rgb(${a}, ${b}, ${c})`;

    return color;

}