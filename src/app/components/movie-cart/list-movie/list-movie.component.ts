import { Component, OnInit } from '@angular/core';
import { Movie } from './model/Movie';
import movies from './../../../../data/movies';
import movies2 from './../../../../data/movies2';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css'],
})
export class ListMovieComponent implements OnInit {
  constructor() {}

  movies: Movie[] = movies2;


  ngOnInit(): void {}
}
