import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component'; // Adjust the path as necessary
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
   { path: 'about' , component: AboutComponent},
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: '**', redirectTo: 'movies' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}