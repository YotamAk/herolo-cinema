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

    getMovieByTitle(title){
        return this.http.get(`${this.ApiUrl}/${title}`)
          .pipe(map(res => res));
    }
}