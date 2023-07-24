import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss'],
})
export class AllMoviesComponent {
  movies: Movie[] = [];
  totalPages?: number = 0;
  private currentpages: number = 1;
  filteredMovies: Movie[] = [];
  searchForm: FormGroup;

  constructor(private _movieService: MoviesService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchQuery: [''],
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this._movieService.getAll(this.currentpages).subscribe({
      next: (res) => {
        this.movies = res.results;
        this.totalPages = res.total_pages;
        this.filterMovies(); // Filter movies after data is fetched
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  filterMovies() {
    const query = this.searchForm.value.searchQuery;
    if (query.trim() === '') {
      this.filteredMovies = this.movies;
    } else {
      this.filteredMovies = this.movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
    }
  }

  onSearch() {
    this.filterMovies();
  }

  public set page(value: number) {
    this.currentpages = value;
    this.fetchData(); // Update the movies for the new page number
  }

  get page() {
    return this.currentpages;
  }
}

// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { Movie } from 'src/app/models/movie';
// import { MoviesService } from 'src/app/services/movies.service';

// @Component({
//   selector: 'app-all-movies',
//   templateUrl: './all-movies.component.html',
//   styleUrls: ['./all-movies.component.scss'],
// })
// export class AllMoviesComponent {
//   movies:Movie[]=[];
//   totalPages?: number = 0;
//   private currentpages: number = 1;
//   filteredMovies: Movie[] = [];
//   searchForm: FormGroup;

//   constructor(private _movieService: MoviesService, private fb: FormBuilder) {
//     this.searchForm = this.fb.group({
//       searchQuery: [''],
//     });
//   }
//   ngOnInit(): void {
//     this._movieService.getAll(this.currentpages).subscribe({
//       next: (res) => {
//         this.movies = res.results;
//         this.totalPages = res.total_pages;
//       },
//       error: (err) => {
//         console.log(err);
//       },
//     });
//   }

//   updateData(pageNumber: number) {
//     this._movieService.getAll(pageNumber).subscribe({
//       next: (res) => {
//         this.movies = res.results;
//       },
//       error: (err) => {
//         console.log(err);
//       },
//     });
//   }
//   onSearch() {
//     const query = this.searchForm.value.searchQuery;
//     if (query.trim() === '') {
//       this.filteredMovies = this.movies;
//     } else {
//       this.filteredMovies = this.movies.filter((movie) =>
//         movie.title.toLowerCase().includes(query.toLowerCase())
//       );
//     }
//   }

//   public set page(value: number) {
//     this.currentpages = value;
//     this.updateData(value);
//   }
//   get page() {
//     return this.currentpages;
//   }
// }
