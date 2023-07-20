import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LineBreakPipe } from '../../layouts/pipe/line-break.pipe';
@NgModule({
  declarations: [AllMoviesComponent, MovieDetailsComponent, LineBreakPipe],
  imports: [CommonModule, MoviesRoutingModule, NgxPaginationModule],
})
export class MoviesModule {}
