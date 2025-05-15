import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/moviedetails.service';
import { Imovies } from '../../interfaces/imovies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Imovies[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovieDetails();
  }

  getMovieDetails(): void {
    this.movieService.getMovies().subscribe(data => {
      console.log('Raw movie data:', data);
      this.movies = data; 
    });
  }
}