import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CinemaService } from '../common/services/cinema.service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MovieComponent } from './main/movie/movie.component';
import { HeaderComponent } from './header/header.component';
import { AddMovieComponent } from './main/add-movie/add-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MovieComponent,
    HeaderComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CinemaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
