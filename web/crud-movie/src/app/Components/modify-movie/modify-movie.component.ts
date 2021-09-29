import { Component, OnInit } from '@angular/core';
import { MovieEdit, MovieService } from '../../Services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-movie',
  templateUrl: './modify-movie.component.html',
  styleUrls: ['./modify-movie.component.css']
})
export class ModifyMovieComponent implements OnInit {

  movie: MovieEdit={
    mov_id: '',
    mov_title:'',
    mov_year: '',
    mov_time: '',
    mov_lang: '',
    mov_dt_rel: 'dd-mm-aaaa',
    mov_rel_country: '',
  };

  constructor(private MovieService: MovieService, 
              private router: Router, 
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id_input = <string>this.activeRoute.snapshot.params.id;
    console.log('Id the input: ' +  id_input);

    if(id_input){
      this.MovieService.getMovie(id_input).subscribe(
        (res: any)=>{
          this.movie = res;
          console.log(res);
        },
        err=>console.log(err)
      );
    }
  }

  edit(){
    this.MovieService.editMovie(this.movie.mov_id, this.movie).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );
    this.router.navigate(['/home']);
    this.MovieService.getMovies().subscribe();
  }
}
