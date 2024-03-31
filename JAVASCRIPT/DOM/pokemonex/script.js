//"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
const container = document.querySelector('#container');

 const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

for(let x = 0; x <= 151; x++){
    const pokemon = document.createElement('div')
    pokemon.classList.add('pokemon');
    const label = document.createElement('span')
    
    label.innerText = `#${x}`
    const newimg = document.createElement('img');
    newimg.src = `${baseUrl}${x}.png`
   
    pokemon.appendChild(newimg)
    pokemon.appendChild(label)
    container.appendChild(pokemon)
}