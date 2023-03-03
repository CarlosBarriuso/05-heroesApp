import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  //heroes: Heroe[] = [];
  private baseUrl: string = environments.baseUrl;
  constructor(
    private http: HttpClient,
    ) { }

  getHeroes(): Observable<Heroe[]>{
    //Mandamos un Observable a donde sea mandado
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroePorId( id:string ): Observable<Heroe>{

    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);

  }

  getSugerencias( termino: string): Observable<Heroe[]> {

    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`);
  }

  agregarHeroe( heroe: Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${ this.baseUrl }/heroes`, heroe);
  }

  actualizarHeroe( heroe: Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(`${ this.baseUrl }/heroes/${ heroe.id }`, heroe);
  }
}
