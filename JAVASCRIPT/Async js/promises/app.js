const fakeRequestCallback = (url, success, failure)=>{
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() =>{
        if(delay > 4000){
            failure('Connection Timeout :C')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
} // requesting data using callbacks

const fakeRequestPromise = (url) =>{
    return new Promise((resolve, reject)=>{
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() =>{
            if(delay > 4000){
                reject('Connection Timeout :C')
            } else{
                resolve(`Here is your fake data from ${url}`)
            }
        })
    })
}

async function make2Request(){
    try{
        let dataOne = await fakeRequestPromise('/page1');
        let dataTwo = await fakeRequestPromise('/page2');
        console.log(dataOne);
    }catch(e){
        console.log('CAUGHT AN ERROR');
        
        
    }
   
}




// fakeRequestPromise('yelp.com/api/coffe/page1')
//     .then(() =>{
//         alert('IT WORKED')
//         fakeRequestPromise('yelp.com/api/coffe/page2')
//             .then(()=>{
//                 alert('Promise Resolved')
//             })
//             .catch(()=>{
//                 alert('ERROR')
//             })
//     })
//     .catch(()=>{
//         alert('Promise rejected')

// })

// there's a better way to do that, preventing nesting

fakeRequestPromise('yelp.com/api/coffe/page1')
    .then((data) => {
        console.log('it worked (page1)')
        console.log(data) // printing out the data
        return fakeRequestPromise('yelp.com/api/coffe/page2') // return the second page to prevent nesting as the promise above
    })
    .then((data) =>{
        console.log('it worked (page 2)')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffe/godzilla')
    })
    .then((data)=>{
        console.log('it worked (page3)')
        console.log(data)
    })
    .catch(() =>{
        console.log('request failed......')
    })

    // creating my own Promises

    const fakeRequest = (url) =>{
        return new Promise((resolve, reject) =>{
            const rand = Math.random();
            setTimeout(()=>{
                if( rand < 0.7){
                    resolve('my fake data');
                }
                resolve('request error');
            }, 1000)
        })
    }

    fakeRequest('/dogs/1')
        .then(() =>{
            console.log('DONE WITH THE REQUEST')
        })
        .catch((error)=>{
            console.log('SAD', error)
        }) 

