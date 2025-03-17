import { Component, OnInit } from '@angular/core';
import { Spells } from '../spells';
import { SpellsService } from '../spells.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spells-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spells-list.component.html',
  styleUrl: './spells-list.component.css'
})
export class SpellsListComponent implements OnInit {
  spells: Spells = [];

  constructor(private spellsService: SpellsService) { }

  ngOnInit(): void {
    this.spellsService.getSpells().subscribe(
      (data : Spells) => {
        this.spells = data;
        console.log('Spells', this.spells);
      },
      (error) => {
        console.error('Error ao carregar spells', error);
      }
    )
  }

}
