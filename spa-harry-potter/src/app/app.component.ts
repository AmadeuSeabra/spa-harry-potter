import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharactersListComponent } from './characters/characters-list/characters-list.component';
import { SpellsListComponent } from './spells/spells-list/spells-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharactersListComponent, SpellsListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spa-harry-potter';
}
