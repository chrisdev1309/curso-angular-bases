import { Component, Input } from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'bdz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent { 

  @Input()
  public characterList: character[] = [
    {
      name: 'Trunks',
      power: 20
    }
  ]

}
