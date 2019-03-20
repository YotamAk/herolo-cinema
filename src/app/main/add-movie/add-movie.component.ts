import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models/movie';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var jQuery:any;
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  @Input() movie_id: number;
  @Output() addMovieEvent = new EventEmitter<Movie>();
  
  model = new Movie() ;
 
  
  
  constructor() {
    
  }

  ngOnInit() {
    console.log(this.movie_id);
    jQuery("#add-movie-modal").modal("show");
  }

  addNewMovie(){
    jQuery("#add-movie-modal").modal("hide");
    this.model.movie_id= this.movie_id;
    this.addMovieEvent.emit(this.model);
  }


reset(){
  jQuery("#add-movie-modal").modal("hide");
}

}
