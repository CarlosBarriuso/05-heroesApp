import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  //heroes: Heroe[] = [];

  constructor(private http: HttpClient ) { }

  getHeroes(): Observable<Heroe[]>{
    //Mandamos un Observable a donde sea mandado
    return this.http.get<Heroe[]>('http://localhost:3000/heroes');
  }
}
