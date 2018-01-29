import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'app-section',
    template: `
        <div [ngStyle]="styleMode" style="background-color: black">
            <ng-content></ng-content>
        </div>
    `,
    styles: []
})
export class SectionComponent implements OnInit {
    styleMode: {
        width?: string,
        height?: string,
    };

    @Input() set mode(value: string) {
        switch (value) {
            case 'full':
                this.styleMode = {
                    'width': '100%',
                    'height': '100vh',
                };
                break;
            case 'full-width':
                this.styleMode = {
                  'width': '100%',
                };
                break;
            default:
                break;
        }
    }

    constructor() { }

    ngOnInit() {
    }

}
