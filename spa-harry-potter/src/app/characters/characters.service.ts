import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Characters } from './characters';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

    constructor(private http: HttpClient) { }
  
    private apiUrl = "https://hp-api.onrender.com/api/characters";
  
    getCharacters(): Observable<Characters> {
      return this.http.get<Characters>(this.apiUrl);
    }
}
