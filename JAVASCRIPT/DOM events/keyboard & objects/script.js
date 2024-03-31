document.querySelector('button').addEventListener('click', function(evt){console.log(evt)})

//const input = document.querySelector('input');
//input.addEventListener('keydown', (e)=>{
    //console.log(e.key);
   // console.log(e.code);
//})

//input.addEventListener('keyup', ()=>{
  //  console.log('KEYUP');
//})

window.addEventListener('keydown', function(e){
    switch(e.code){
        case 'ArrowUp':
            console.log('Moving up!');
            break
        case 'ArrowDown':
            console.log('Moving Down!');
            break
        case 'ArrowLeft':
            console.log('Moving Left');
            break
        case 'ArrowRight':
            console.log('Moving Right');
            break
        default:
            console.log('That isnt such Position');
    }

})
