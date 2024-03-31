const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('Connection established!!')
    })
    .catch(error =>{
        console.log('we have an error')
        console.log(error)
    })

    // creating an schema for the database
const movieSchema = new mongoose.Schema(
        {
            title: String,
            year: Number,
            score: Number,
            rating: String
        }
    );
        // confirming the schema to the mongodb engine
const Movie = mongoose.model('Movie', movieSchema);

//const batman = new Movie({title:'The batman',year:2022,score:9.8,rating:'excellent'});

// Movie.insertMany([
//     {title:'man of steel',year:2013,score:10,rating:'PG-12'},
//     {title:'in the heart of the sea',year:2015,score:10,rating:'PG-14'},
//     {title:'The Iron Giant',year:1986,score:8.6,rating:'R'},
//     {title:'Alien',year:1999,score:7.5,rating:'PG'},
//     {title:'The Shape of Water',year:2017,score:9, rating:'PG-16'}
// ])
// .then(data =>{
//     console.log('IT worked')
//     console.log(data)
// })