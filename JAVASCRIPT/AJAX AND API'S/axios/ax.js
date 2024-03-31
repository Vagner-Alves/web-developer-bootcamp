// axios.get("https://swapi.dev/api/people/1/")
// .then(res =>{
//     console.log("responde", res);
// })
// .catch(error =>{
//     console.log(error)
// })

// turning the api data into a function.
const starWarsPerson = async(x) =>{
    try{
        const response = await axios.get(`https://swapi.dev/api/people/${x}/`);
        console.log(response.data);
    }catch (e){
        console.log("error: we could not retrieve the data", e);
    }
   
}

starWarsPerson(100000);

const btn = document.querySelector('button');
const jokes = document.querySelector('#jokes');



const addNewJoke = async(x) =>{
    const textJoke = await getDadJokes();
    const newLi = document.createElement('LI');
    newLi.append(textJoke)
    jokes.append(newLi)
}

const getDadJokes = async(y) =>{
    const configuration = {headers:{accept:'application/json'}}
    const response = await axios.get("https://icanhazdadjoke.com/",configuration );
    return response.data.joke;
}

btn.addEventListener('click',addNewJoke)