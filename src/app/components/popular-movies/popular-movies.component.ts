import { Component, OnInit } from '@angular/core';

import { HttpResponse } from '@angular/common/http';
import { Ipeliculas } from '../../interface/peliculas.interface';


import { Observable, observable } from 'rxjs';
import { PeliculasService } from '../../services/peliculas.service';


@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {


  private popularmovies:Observable<any[]>;
  constructor(private _ps:PeliculasService) { }

  ngOnInit() {

  this.popularmovies= this._ps.getPopularesMovies();
  }




}
