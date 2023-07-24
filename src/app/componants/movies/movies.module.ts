import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AllMoviesComponent, MovieDetailsComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
})
export class MoviesModule {}
