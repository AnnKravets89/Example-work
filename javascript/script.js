
const numberOfFilms = prompt("How many movies did you see?", " ");
//console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const filmFirst = prompt("What movie did you see the last time?", ""),
      filmReview1 = prompt("How do you rade it?", ""),
      filmSecond = prompt("What movie did you see the last time?", ""),
      filmReview2 = prompt("How do you rade it?", "");

personalMovieDB.movies[filmFirst] = filmReview1;
personalMovieDB.movies[filmSecond] = filmReview2;

console.log(personalMovieDB);