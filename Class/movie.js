window.onload = () => {
  MovieUI.getMovies();
};


const sampleMovies = [
  { Id: 1, Title: "The Matrix", Genre: "Action", Director: "Wachovski" },
  { Id: 2, Title: "Yüzüklerin Efendisi", Genre: "Fantasy", Director: "Peter Jackson" },
];


class Movie {
  constructor(id, title, genre, director) {
    this.Id = id;
    this.Title = title;
    this.Genre = genre;
    this.Director = director;
  }
}

class MovieUI {
  static getMovies() {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    for (let i = 0; i < sampleMovies.length; i++) {
      this.addMovie(sampleMovies[i]);
    }
  }

  static addMovie(movie) {
    const tbody = document.getElementById("tbody");
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${movie.Id}</td>
      <td>${movie.Title}</td>
      <td>${movie.Genre}</td>
      <td>${movie.Director}</td>
      <td>
        <button class="btn btn-sm btn-warning" onclick="editMovie(${movie.Id})">güncelle</button>
        <button class="btn btn-sm btn-danger" onclick="deleteMovie(${movie.Id})">sil</button>
      </td>
    `;

    tbody.appendChild(tr);
  }
}


document.getElementById("btnAddMovie").onclick = function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const genre = document.getElementById("genre").value;
  const director = document.getElementById("director").value;

  if (title === "" || genre === "" || director === "") {
    alert("Lütfen tüm alanları doldurun.");
    return;
  }

  const filmId = document.getElementById("btnAddMovie").getAttribute("data-update");

  if (filmId) {
   
    const movie = sampleMovies.find(movie => movie.Id === parseInt(filmId));
    movie.Title = title;
    movie.Genre = genre;
    movie.Director = director;

    document.getElementById("btnAddMovie").removeAttribute("data-update");
    document.getElementById("btnAddMovie").textContent = "Ekle";
  } else {
  
    const newMovie = new Movie(sampleMovies.length + 1, title, genre, director);
    sampleMovies.push(newMovie);
  }

  clearInputs();
  MovieUI.getMovies();
};


//function editMovie(id) {
 // const movie = sampleMovies.find(movie => movie.Id === id);
 // document.getElementById("title").value = movie.Title;
 // document.getElementById("genre").value = movie.Genre;
  //document.getElementById("director").value = movie.Director;

 // document.getElementById("btnAddMovie").setAttribute("data-update", id);
 // document.getElementById("btnAddMovie").textContent = "Güncelle";
//}


function deleteMovie(id) {
  const index = sampleMovies.findIndex(movie => movie.Id === id);
  sampleMovies.splice(index, 1);
  MovieUI.getMovies();
}


function clearInputs() {
  document.getElementById("title").value = "";
  document.getElementById("genre").value = "";
  document.getElementById("director").value = "";
}