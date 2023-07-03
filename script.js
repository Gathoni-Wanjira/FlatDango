const allMovies = document.querySelector("#all-movies ul");

function fetchMovies() {
  fetch(" http://localhost:3000/films")
    .then((res) => res.json())
    .then((movies) => {
      console.log(movies);
      displayAllMovies(movies);
    });
}
fetchMovies();

function displayAllMovies(movies) {
  movies.forEach((movie) => {
    // Create Dynamic Nodes
    const list = document.createElement("li");

    // Assign Nodes
    list.textContent = movie.title;
    list.id = movie.id;
    list.addEventListener("click", seeMovieDetails);
    allMovies.appendChild(list);
  });
}

function seeMovieDetails(event) {
  fetchMoviesbyId(event.target.id);
}
function fetchMoviesbyId(id) {
  fetch(`http://localhost:3000/films/${id}`)
    .then((res) => res.json())
    .then((movie) => {
      console.log(movie);
      renderMovieDetails(movie);
    });
}
function renderMovieDetails(movie) {
  // Dynamic nodes

  const movieTitle = document.querySelector("#Movie-Title");
  const movieImage = document.querySelector("#movie-image");
  const movieDescription = document.querySelector("#movie-description");

  const movieRuntime = document.querySelector("#movie-runtime span");
  const movieShowtime = document.querySelector("#movie-showtime span");
  const availableTickets = document.querySelector("#available-tickets");
  const movieBuyTicket = document.querySelector("#BuyTicket-btn");
  const removeBuyTicket = document.querySelector("#RemoveTicket-btn");

  movieTitle.textContent = movie.title;
  movieImage.src = movie.poster;
  movieDescription.textContent = movie.description;

  movieRuntime.textContent = movie.runtime;
  movieShowtime.textContent = movie.showtime;

  availableTickets.textContent = movie.capacity - movie.tickets_sold;

  movieBuyTicket.addEventListener("click", () => {
    // buy a ticket

    if (movie.tickets_sold < movie.capacity) {
      movie.tickets_sold = movie.tickets_sold + 1;

      fetch(`http://localhost:3000/films/${movie.id}`, {
        method: "PATCH",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  });
  // removeBuyTicket.addEventListener('click', removeMovieProfile)
}

function buyMovieTicket(event) {
  // console.log(event.target)
}

// function isMovieSoldOut (movie) {
//    return movie.capacity === movie.tickets_sold

// }
