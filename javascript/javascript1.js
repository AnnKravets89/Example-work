const numberOfFilms = prompt("How many movies did you see?", " ");
//console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};



for (i = 0; i < 2; i++) {
    const filmFirst = prompt("What movie did you see the last time?", ""),
          filmReview1 = prompt("How do you rade it?", "");

      personalMovieDB.movies[filmFirst] = filmReview1;
}

console.log(personalMovieDB); 

