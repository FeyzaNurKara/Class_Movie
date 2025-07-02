class Movie{
   constructor(id,title,genre,director){
    this.ID=id,
    this.Title=title,
    this.Genre=genre,
    this.Director=director
   }

   static getMovieInfo(){
    console.log(this.ID,this.Title,this.Genre,this.Director)
   }

}

// const movie=new Movie(1,"asdad","asda","asda");
// movie.getMovieInfo();

Movie.getMovieInfo();