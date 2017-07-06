var mongoose = require('mongoose');

//Genre Schema
var moviesSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    released:{
        type: String
    },
    imgUrl:{
        type: String,
        required: true
    },
    trailer:{
        type: String
    },
    createDate:{
        type: Date,
        default: Date.now
    }
});
var Movie = module.exports = mongoose.model('Movie', moviesSchema);

//Get Movies
module.exports.getMovies = function(callback, limit){
    Movie.find(callback).limit(limit);
}

//Get Movie
module.exports.getMovieById = function(id, callback){
    Movie.findById(id, callback);
}

//Add Movie
module.exports.addMovie = function(movie, callback){
    Movie.create(movie, callback);
}

//Update Movie
module.exports.updateMovie = function(id, movie, options, callback){
    var query = {_id: id};
    var update = {
        title: movie.title,
        genre: movie.genre,
        description: movie.description,
        rating: movie.rating,
        released: movie.released,
        imgUrl: movie.imgUrl,
        trailer: movie.trailer
    }
    Movie.findOneAndUpdate(query, update, options, callback);
}

//Delete Movie
module.exports.removeMovie = function(id, callback){
    var query = {_id: id};
    Movie.remove(query, callback);
}