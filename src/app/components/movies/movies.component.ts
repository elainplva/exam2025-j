import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MovieDetails } from '../../services/moviedetails.service';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieDetails, private router: Router) {}

  ngOnInit(): void {
    this.moviedetails.getMovies().subscribe(data => {
      this.movies = data.results;
    });
  }

  viewDetails(movieId: number): void {
    this.router.navigate(['/movie', movieId]);
  }
}
