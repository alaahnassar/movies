import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  movie: any;
  id: any;
  constructor(
    private movieSer: MoviesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieSer.getById(this.id).subscribe({
      next: (res) => {
        this.movie = res;
        console.log(this.movie);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
