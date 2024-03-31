fetch("https://swapi.dev/api/people/1/")
.then((response)=>{
    console.log("API LOADED", response);
    return response.json()
}).then((data)=>{

    console.log(data);
    fetch("https://swapi.dev/api/people/2/")

}).catch((error) =>{
    console.log('Error', error);
})


