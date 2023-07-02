const allMovies = document.querySelector("#all-movies") 

function fetchMovies () {
    fetch (" http://localhost:3000/films")
    .then(res => res.json())
    .then(movies => {
        console.log(movies);
    })
}
fetchMovies()