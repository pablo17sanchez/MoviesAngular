import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { NgModule } from '@angular/core';
import { PopularMoviesComponent } from '../app/components/popular-movies/popular-movies.component';
import { PeliculasComponent } from '../app/components/peliculas/peliculas.component';
import { BuscarComponent } from '../app/components/buscar/buscar.component';


const routes: Routes = [
  {path:'home',component: HomeComponent },
  {path:'popular',component:PopularMoviesComponent},
  {path:'peliculas', component: PeliculasComponent},
  {path:"buscar",component:BuscarComponent},
{path:'**',pathMatch:'full',redirectTo:'home'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
