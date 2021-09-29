import { Component, OnInit } from '@angular/core';
import { MovieService, Movie} from '../../Services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //variable
  ListMovie:any =[];

  constructor(private MovieService:MovieService, private router:Router) { }

  ngOnInit(): void {
    this.listMovies();
  }

  listMovies()
  {
    this.MovieService.getMovies().subscribe(
      res=>{
        console.log(res);
        this.ListMovie=<any>res;
      },
      err => console.log(err)
    );
  }

  deleted(id:string){
    this.MovieService.deleteMovie(id).subscribe(
      res=>{
        console.log("Movie deleted successfully");
        this.listMovies();
      },
      err=>console.log(err)
    );
  }

  edit(id:string){
    this.router.navigate(['/edit/'+id]);
  }


}
