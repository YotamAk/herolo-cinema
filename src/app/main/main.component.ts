import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../../common/services/cinema.service';
import { movie } from '../models/movie';
 
declare var jQuery:any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  moviesTitles = [ "Bohemian Rhapsody","Wonder Woman", "Justice League"];
  movieList : any[] = [];
  movieListUpdated : any[] = [];
  titles: string[] = [];
  movie : any;
  delete_movie : movie;
  id = 0;

  constructor(private cinemaService : CinemaService) {
    this.pushMoviesToList();
  }
  ngOnInit() {
  }

  pushMoviesToList(){
    for(let i = 0; i < this.moviesTitles.length; i++){
      this.getMovieByTitle(this.moviesTitles[i]);
     console.log(this.movieListUpdated);
     }
  }
  
  getMovieByTitle(title){
    this.cinemaService
       .getMovieByTitle(title)
       .subscribe(movie => {
         this.movie = movie;
         this.movie.id = this.id;
         this.id++;
         this.movieListUpdated.push(this.movie);
     } )
 }

 //delete functions
 setDeleteMovie(movie: movie){
  this.delete_movie = movie;
  jQuery("#delete-movie-modal").modal("show");
  console.log(movie);
}
 deleteMovie(movie : movie){
   this.movieListUpdated.splice(this.movieListUpdated.indexOf(movie),1)
  //  this.toastMessage(`${movie.title} has been deleted `,'alert-danger',3000);
  jQuery("#delete-movie-modal").modal("hide");
  console.log(movie);
 }

}
