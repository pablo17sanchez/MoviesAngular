import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeliculasService } from './services/peliculas.service';

import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from '../router/router.routing';
import { RouterModule } from '@angular/router';

import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    
    PopularMoviesComponent,
    
    PeliculasComponent,
    
    BuscarComponent,
    
    PeliculaImagenPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,AppRoutingModule,RouterModule
    
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})                              
export class AppModule { }
