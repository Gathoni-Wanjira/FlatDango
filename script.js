const allMovies = document.querySelector("#all-movies ul") 

function fetchMovies () {
    fetch (" http://localhost:3000/films")
    .then(res => res.json())
    .then(movies => {
        console.log(movies);
        displayAllMovies(movies)
    })
  
}
fetchMovies()
 
function displayAllMovies (movies){
    
    movies.forEach(movie => {
        // Create Dynamic Nodes
    const list = document.createElement('li'); 

    // Assign Nodes 
        list.textContent = movie.title
        list.id = movie.id
        list.addEventListener('click', seeMovieDetails)
        allMovies.appendChild(list)
    });
}

function seeMovieDetails (event){
    fetchMoviesbyId(event.target.id)
   
}
function fetchMoviesbyId (id){
    fetch (`http://localhost:3000/films/${id}`)
    .then(res => res.json())
    .then(movie => {
        console.log(movie);
    
    })

}


