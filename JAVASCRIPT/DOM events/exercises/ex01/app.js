const b1 = document.querySelector('button');
const h1 = document.querySelector('h1');

// b1.onclick = ()=> {alert('Im working')};

b1.addEventListener('click', ()=>{
    const color = newColor()
    document.body.style.backgroundColor = color;
    h1.innerText = color;
    document.body.style.textAlign  = 'center';
  
})

 const newColor = ()=>{
    const a = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const c = Math.floor(Math.random() * 255);

    if(a <50 &&  b < 50 && c < 50){
        h1.style.color = 'white';
    } else{
        h1.style.color = 'black'
    }

    const color = `rgb(${a}, ${b}, ${c})`;

    return color;
}