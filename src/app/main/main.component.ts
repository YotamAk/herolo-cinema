import { Component, OnInit,Input, Output, EventEmitter,ViewChild } from '@angular/core';
import { CinemaService } from '../../common/services/cinema.service';
import { Movie } from '../models/movie';
import { AddMovieComponent } from './add-movie/add-movie.component';

declare var jQuery:any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  moviesTitles = [ "Bohemian Rhapsody","Wonder Woman", "Justice League", "Fight Club", "Inception", "Toy Story"];
 
  movieListUpdated : any[] = [];
  movie : any;
  delete_movie : Movie;
  movie_id = 0;
  isAddShown = false;
  

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
         this.movie.id = this.movie_id;
         this.movie_id++;
         this.movieListUpdated.push(this.movie);
     } )
 }

 //delete functions
 setDeleteMovie(movie: Movie){
  this.delete_movie = movie;
  jQuery("#delete-movie-modal").modal("show");
  console.log(movie);
}
 deleteMovie(movie : Movie){
   this.movieListUpdated.splice(this.movieListUpdated.indexOf(movie),1)
  //  this.toastMessage(`${movie.title} has been deleted `,'alert-danger',3000);
  jQuery("#delete-movie-modal").modal("hide");
 }

 addMovieModal(){
  this.isAddShown = true;
  console.log('yes')
}

saveMovie(data){
  this.movieListUpdated.push(data);
}

}
