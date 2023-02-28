import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  //heroes: Heroe[] = [];

  constructor(
    private http: HttpClient,
    ) { }

  getHeroes(): Observable<Heroe[]>{
    //Mandamos un Observable a donde sea mandado
    return this.http.get<Heroe[]>('http://localhost:3000/heroes');
  }

  getHeroePorId( id:string ): Observable<Heroe>{

    return this.http.get<Heroe>(`http://localhost:3000/heroes/${id}`);

  }
}
