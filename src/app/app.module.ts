import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { MovieCartComponent } from './components/movie-cart/movie-cart.component';
import { FilterMovieComponent } from './components/movie-cart/filter-movie/filter-movie.component';
import { ListMovieComponent } from './components/movie-cart/list-movie/list-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    MovieCartComponent,
    FilterMovieComponent,
    ListMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
