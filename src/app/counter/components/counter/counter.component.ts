import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    template: `
    <h3>{{ counter }}</h3>

    <button (click)="incrementar(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="incrementar(-1)">-1</button>

    ` 
})
export class CounterComponent {

    public counter: number = 10

    incrementar( value: number) {
        this.counter += value
    }

    reset() {
        this.counter = 10
    }
}