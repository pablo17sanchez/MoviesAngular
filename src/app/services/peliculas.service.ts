import { Injectable } from '@angular/core';
import { HttpClient ,HttpResponse} from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { map } from "rxjs/operators";
//import { Json } from "@angular/common/http";


//import { HttpResponse } from '@angular/common/http';
import { Ipeliculas } from '../interface/peliculas.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {


private apiKey:string="?api_key=add427665eef2972527593ed78e3b10a";

private apiUrl:string="https://api.themoviedb.org/4";


  constructor(private http:HttpClient) { }




  getCartelera():Observable<any>{
    
let fechadeste=new Date();

let fechahasta = new Date();

fechahasta.setDate(fechahasta.getDate()+7);

let strDesde =  `${fechadeste.getFullYear()}-${fechadeste.getMonth()+1}-${fechadeste.getDate()}`;

let strHasta =  `${fechahasta.getFullYear()}-${fechahasta.getMonth()+1}-${fechahasta.getDate()}`;
fechahasta.setDate(fechahasta.getDate()+7);


    let completeUrl=`${this.apiUrl}/discover/movie${this.apiKey}&primary_release_date.gte=${strDesde}&primary_release_date.lte=${strHasta}`;


    return this.http.get<any>(completeUrl).pipe(map(response=>response.results));
  }

  getPopularesMovies():Observable<any> 
  {



    let completeUrl=`${this.apiUrl}/discover/movie${this.apiKey}&certification_country=US&certification.lte=G&sort_by=popularity.desc`;


   
return this.http.get<any>(completeUrl).pipe(map(response=>response.results));



  }
}
