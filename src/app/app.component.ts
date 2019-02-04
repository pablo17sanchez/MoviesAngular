import { Component,OnInit } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';
import { Observable } from 'rxjs';
import { Ipeliculas } from './interface/peliculas.interface';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

 variablesobservable:Observable<any>;
  constructor(private _ps:PeliculasService){



  }
  ngOnInit(): void {

  

    
  }
  title = 'AngularMovie';
}
