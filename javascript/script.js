let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many movies did you see?", " ");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many movies did you see?", " "); 
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};


function rememberMyFims() {
for (let i = 0; i < 2; i++) {
    const a = prompt("What movie did you see the last time?", ""),
          b = prompt("How do you rade it?", "");

      
      if (a != null && b != null && a != ' ' && b != ' ' && a.length < 50) {
          personalMovieDB.movies[a] = b;
          console.log('Все верно!');
    } else {
          console.log('Error');
          i--;
    }
  }
}
rememberMyFims();

function detectPersonalLevel() {

    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
 }
}
detectPersonalLevel();

function showMyBD(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyBD(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        
    }
  
}
writeYourGenres();




console.log(personalMovieDB); 
