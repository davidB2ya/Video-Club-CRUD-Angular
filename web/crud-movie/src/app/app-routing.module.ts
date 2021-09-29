import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './Components/add-movie/add-movie.component';
import { HomeComponent } from './Components/home/home.component';
import { ModifyMovieComponent } from './Components/modify-movie/modify-movie.component';

const routes: Routes = [
  {path: '',redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AddMovieComponent},
  {path: 'edit/:id', component: ModifyMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
