export interface Movie {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: Array<any>;
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  results?: Array<any>;
  total_pages?: number;
  vote_average?: number;
  page?: number;
  vote_count?: number;
}
