/**setTimeout(() =>{
    document.body.style.backgroundColor = 'purple';
    setTimeout(() =>{
        document.body.style.backgroundColor = 'blue';
        setTimeout(() =>{
            document.body.style.backgroundColor = 'LightPink';
            setTimeout(() =>{
                document.body.style.backgroundColor = 'pink';
                setTimeout(() =>{
                    document.body.style.backgroundColor = 'red';
                
                },1000)
            
            },1000)
        
        },1000)
    
    },1000)

},1000)
*/
// const delayedColorChange = (newColor, delay, doNext) =>{
//     setTimeout(()=>{
//         document.body.style.backgroundColor = newColor;
//         doNext();
//     }, delay)
// }

// delayedColorChange('orange', 1000, ()=>{
//     delayedColorChange('blue', 1000, () =>{
//         delayedColorChange('red', 1000, () =>{
//             delayedColorChange('pink', 1000, () =>{
//                 delayedColorChange('teal', 1000, () =>{
//                     delayedColorChange('teal', 1000, () =>{
        
//                     });
//                 });
//             });
//         });
//     });
// });

const betterColorChange = (color, delay) =>{
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}


    // betterColorChange('red', 200) // let's try the rainbow colors
    // .then(() => betterColorChange('orange', 200))
    // .then(() => betterColorChange('yellow', 200))
    // .then(() => betterColorChange('green', 200))
    // .then(() => betterColorChange('blue', 200))
    // .then(() => betterColorChange('indigo', 200))
    // .then(() => betterColorChange('violet', 200))

// using promisses we can create a code that's a lot easier to read
// to understand and even create own our own!
    
// using async functions to make an even cleaner code!

async function rainbow(){
    await betterColorChange('orange', 1000) // we use await to wait the promise to get resolved
    await betterColorChange('green',1000)
    await betterColorChange('violet', 1000)
    return "all done!"
}
rainbow()
