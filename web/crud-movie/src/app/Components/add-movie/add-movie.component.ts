import { Component, OnInit } from '@angular/core';
import { Movie, MovieService } from '../../Services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movie: Movie={
    mov_id: 0,
    mov_title:'',
    mov_year: '',
    mov_time: '',
    mov_lang: '',
    mov_dt_rel: 'dd-mm-aaaa',
    mov_rel_country: '',
  };

  constructor(private MovieService: MovieService, private router: Router) { }

  ngOnInit(): void {
  }

  add(){
    // delete this.movie.mov_id;

    this.MovieService.addMovie(this.movie).subscribe(
      res=>{
        this.router.navigate(['/home']);
        console.log(res);
      },
      err=>console.log(err));
    
    this.MovieService.getMovies().subscribe();
  }


}
