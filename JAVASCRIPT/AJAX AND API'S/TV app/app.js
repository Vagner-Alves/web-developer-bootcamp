const form = document.querySelector('#searchform'); // selecting the form

form.addEventListener('submit', async function(x){
    x.preventDefault() // preventing the page reflesh
    const tvTitle = form.elements.query.value; // take the value of the user input
    const config = {params:{q:tvTitle}} // set up the value to be put in the query string
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=`,config);   // get the api response using axios :) 
    makeImage(response.data) // create a image collected from the api
    form.elements.query.value = '';   // clear the input value
} )

const makeImage = (title) =>{
    for(tv of title){ // loop over the images provided by the MAzeTv api!
        if(tv.show.image){
            const image = document.createElement('IMG') //  creates an image within the html body
            image.src = tv.show.image.medium; // specify the image source in the image object
            document.body.append(image); // append an image object within the html body
            
        }
      
    }
}
