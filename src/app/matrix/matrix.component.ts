import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-matrix',
    template: `
    <div class="container">
        <table id="parse-table">
            <tbody>
                <tr *ngFor="let list of matrix">
                    <td *ngFor="let element of list" class="cell {{element.class}}" (click)="element[showSkills] ()">
                        {{element.title}}
                    </td>
                </tr>
          </tbody>
        </table>
    </div>
    `,
    styles: [`
        .container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border: 2px solid white;
            padding: 10px;
        }
        .cell {
            text-align: center;
            width: 20px;
            height: 20px;
            color: white;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        .cell-selectable {
            color: red;
            cursor: pointer;
            text-align: center;
            width: 20px;
            height: 20px;
        }
    `]
})
export class MatrixComponent implements OnInit {

    matrix: {
        title: string,
        class: string,
        method?: Function,
    }[][];

    constructor() { }

    ngOnInit() {
        this.matrix = [];
        const length = 16;
        for (let i = 0; i < length; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < length; j++) {
                this.matrix[i].push({
                    title: this.randomChar(),
                    class: '',
                });
            }
        }

        for (let i = 0; i < 20; i++) {
            this.generateRandomMatrix(i);
        }
        this.insertReservedWords();
    }

    public showSkills() {
        for (let i = 0; i < this.matrix.length; i++) {
            this.matrix[0][i] = {
                title: 'x',
                class: 'cell-selectable',
            };
        }
    }

    private generateRandomMatrix(interval: number) {
        setTimeout(() => {
            const length = 16;
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < length; j++) {
                    this.matrix[i][j] = {
                        title: this.randomChar(),
                        class: '',
                    };
                }
            }
        }, interval * 100);
    }

    private insertReservedWords() {
        setTimeout(() => {
            const reservedWords = [
                {
                    title: 'VALA KHOSRAVI',
                    number: 0,
                    method: this.showSkills,
                },
                {
                    title: 'SKILLS',
                    number: 5,
                    method: this.showSkills,
                },
                {
                    title: 'ABOUT',
                    number: 1,
                    method: this.showSkills,
                },
                {
                    title: 'CONTACT ME',
                    number: 6,
                    method: this.showSkills,
                },
            ];

            reservedWords.forEach((rw, index) => {
                for (let i = 0; i < rw.title.length; i++) {
                    setTimeout(() => {
                        this.matrix[index * 4][rw.number + i] = {
                            title: rw.title[i],
                            class: 'cell-selectable',
                        };
                        if (rw.method) {
                            this.matrix[index * 4][rw.number + i].method = rw.method;
                        }
                    }, i * 100);
                }
            });
        }, 2000);
    }

    private randomChar(): string {
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const character = possible.charAt(Math.floor(Math.random() * possible.length));
        return character;
    }
}
