// Problem 5: Movie Watchlist System

// 1. Create collection & insert one movie document
db.watchlist.insertOne({
  movie_id: 1,
  title: "Inception",
  genre: "Sci-Fi",
  release_year: 2010,
  imdb_rating: 8.8,
  watched: true
});


// 2. Insert at least 5 movie records using insertMany()
db.watchlist.insertMany([
  {
    movie_id: 2,
    title: "Interstellar",
    genre: "Sci-Fi",
    release_year: 2014,
    imdb_rating: 8.6,
    watched: false
  },
  {
    movie_id: 3,
    title: "The Dark Knight",
    genre: "Action",
    release_year: 2008,
    imdb_rating: 9.0,
    watched: true
  },
  {
    movie_id: 4,
    title: "Titanic",
    genre: "Romance",
    release_year: 1997,
    imdb_rating: 7.9,
    watched: false
  },
  {
    movie_id: 5,
    title: "Avengers: Endgame",
    genre: "Action",
    release_year: 2019,
    imdb_rating: 8.4,
    watched: true
  },
  {
    movie_id: 6,
    title: "Joker",
    genre: "Drama",
    release_year: 2019,
    imdb_rating: 8.5,
    watched: false
  }
]);


// 3. Retrieve all movies where watched is false
db.watchlist.find({
  watched: false
});


// 4. Display only title, genre, and imdb_rating (Projection)
db.watchlist.find(
  {},
  { _id: 0, title: 1, genre: 1, imdb_rating: 1 }
);


// 5. Delete a movie based on movie_id
db.watchlist.deleteOne({
  movie_id: 6
});
