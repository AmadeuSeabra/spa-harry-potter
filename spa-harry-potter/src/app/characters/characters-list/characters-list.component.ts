import { Component, OnInit } from '@angular/core';
import { Characters } from '../characters';
import { CharactersService } from '../characters.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css'
})
export class CharactersListComponent implements OnInit {
  characters: Characters = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe(
      (data : Characters) => {
        this.characters = data;
        console.log('Characters', this.characters);
      },
      (error) => {
        console.error('Error ao carregar characters', error);
      }
    )
  }
  
}
