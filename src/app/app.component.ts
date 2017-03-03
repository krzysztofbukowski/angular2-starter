import { Component } from '@angular/core';

@Component({
    selector: 'angular2-webpack-app',
    template: '<h1 class="title">Hello Angular 2 with webpack!!</h1>',
    styles: [`
        .title {
            font-family: Lato;
            background: crimson;
            color: white;
            padding: 10px;
        }
        `
    ]
})
export class AppComponent {

    /**
     * Returns the component's name
     *
     * @returns {string}
     */
    getName(): string {
        return 'AppComponent';
    }
}
