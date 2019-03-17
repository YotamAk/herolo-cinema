import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { movie } from '../../models/movie';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var jQuery:any;
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  @Input() id: number; 
  @Output() addMovieEvent = new EventEmitter<movie>();
  
  editForm: FormGroup;

  model = new movie ;
  
  constructor() {}

  ngOnInit() {
  }


  // Methods
saveMovie(){
  this.addMovieEvent.emit(this.editForm.value);
  this.reset();
}

reset(){
  jQuery("#add-movie-modal").modal("hide");
  this.editForm.reset(this.editForm.value);
}



}
