import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Spells } from './spells';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {

  constructor(private http: HttpClient) { }

  private apiUrl = "https://hp-api.onrender.com/api/spells";

  getSpells(): Observable<Spells> {
    return this.http.get<Spells>(this.apiUrl);
  }

  getSpellsById(id: string): Observable<Spells> {
    return this.http.get<Spells>(`${this.apiUrl}/${id}`);
  }

}
