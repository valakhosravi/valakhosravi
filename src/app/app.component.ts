import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <app-section mode="full">
            <app-matrix></app-matrix>
        </app-section>
    `,
    styles: []
})
export class AppComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
