import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environments.baseUrl;

  constructor( private http: HttpClient) { }

  login() {
    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`);
  }
}
