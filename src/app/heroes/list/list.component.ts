import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Batman','Ironman','SpiderMan','Hulk','Wolverine'];
  public deletedWasHero?: string;

  removeLastHero(): void {
    this.deletedWasHero = this.heroNames.pop()
  }

  
}
