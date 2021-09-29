import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = '/movies'
  constructor(private http: HttpClient) { }

  //Get movies
  getMovies() {
    return this.http.get(this.url)
  }

  //Get movie
  getMovie(id:string) {
    return this.http.get(this.url+'/'+id)
  }

  //Add movie
  addMovie(movie: Movie) {
    return this.http.post(this.url, movie)
  }

  //Delete movie
  deleteMovie(id:string) {
    return this.http.delete(this.url+'/'+id)
  }

  //Edit movie
  editMovie(id:string, movie: MovieEdit) {
    return this.http.put(this.url+'/'+id, movie)
  }

}

export interface Movie {
  mov_id:number;
  mov_title?:string;
  mov_year?:string;
  mov_time?: string;
  mov_lang?:string;
  mov_dt_rel?:string;
  mov_rel_country?:string;
}

export interface MovieEdit {
  mov_id:string;
  mov_title?:string;
  mov_year?:string;
  mov_time?: string;
  mov_lang?:string;
  mov_dt_rel?:string;
  mov_rel_country?:string;
}