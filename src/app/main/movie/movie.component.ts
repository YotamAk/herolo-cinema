import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-component',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieObject: any;
  
  constructor() { }

  ngOnInit() {
  }

}
