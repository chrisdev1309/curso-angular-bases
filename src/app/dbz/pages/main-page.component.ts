import { Component } from "@angular/core";
import { character } from "../interfaces/character.interface";


@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    public character: character[] = [
        {
            name: 'Krilin',
            power: 1000
        },
        {
            name: 'Goku',
            power: 9500
        },
        {
            name: 'vegeta',
            power: 6500
        }
    ];

}