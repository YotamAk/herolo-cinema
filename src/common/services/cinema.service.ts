import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  constructor(private http: HttpClient) { }

    checkMe:any;
    ApiUrl :string = "http://www.omdbapi.com/?apikey=591a262b&t=";
    metaDataBaseUrl: string = "../assets/data"; 

    getAllMovies():any[]{
      return moviesList;
    }

    getMovieByTitle(title){
        return this.http.get(`${this.ApiUrl}/${title}`)
          .pipe(map(res => res));
    }
}

const moviesList = [
  {
      "name" : "Avengers: Infinity War",
      "year" : "2018",
      "rate" : 8.6,
      "geners": [ "Action", "Adventure", "Fantasy" ],
      "release": "27 April 2018 (USA)",
      "earning":"$659,325,379, 10 December 2017"
  },
  {
      "name" : "Titanic",
      "year" : "1997",
      "rate" :  7.8,
      "geners": [ "Drama", "Romance" ],
      "release": "19 December 1997 (USA)",
      "earning":"$459,325,379, 8 December 1999"
  },
  {
      "name" : "The Godfather",
      "year" : "1972",
      "rate" : 9.2,
      "geners": [ "Crime", "Drama"],
      "release": "24 March 1972 (USA)",
      "earning":"$759,325,379, 11 December 2015"
  }
];