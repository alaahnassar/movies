import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss'],
})
export class AllMoviesComponent {
  movies: any;
  totalPages?: number = 0;
  private currentpages: number = 1;

  constructor(private _movieService: MoviesService) {}
  ngOnInit(): void {
    this._movieService.getAll(this.currentpages).subscribe({
      next: (res) => {
        this.movies = res.results;
        this.totalPages = res.total_pages;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateData(pageNumber: number) {
    this._movieService.getAll(pageNumber).subscribe({
      next: (res) => {
        this.movies = res.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  public set page(value: number) {
    this.currentpages = value;
    this.updateData(value);
  }
  get page() {
    return this.currentpages;
  }
}
