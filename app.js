const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

Movie = require('./models/movies');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/moviestore', {
    useMongoClient: true
});
var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Please use /api/movies');
});

app.get('/api/movies', function(req, res){
    Movie.getMovies(function(err, movies){
        if(err){
            throw err;
        }
        res.json(movies);
        console.log(movies);
    });
});

app.get('/api/movies/:_id', function(req, res){
    Movie.getMovieById(req.params._id, function(err, movie){
        if(err){
            throw err;
        }
        res.json(movie);
    });
});

app.post('/api/movies', function(req, res){
    var movie = req.body;
    Movie.addMovie(movie, function(err, movie){
        if(err){
            throw err;
        }
        res.json(movie);
    });
});

app.put('/api/movies/:_id', function(req, res){
    var id = req.params._id;
    var movie = req.body;
    Movie.updateMovie(id, movie, {},function(err, movie){
        if(err){
            throw err;
        }
        res.json(movie);

    });
});

app.delete('/api/movies/:_id', function(req, res){
    var id = req.params._id;
    Movie.removeMovie(id, function(err, movie){
        if(err){
            throw err;
        }
        res.json(movie);

    });
});

app.listen(8080);
console.log('Running on port 8080...')