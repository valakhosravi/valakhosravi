import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-matrix',
    template: `
    <div class="container">
        <table id="parse-table">
            <tbody>
                <tr *ngFor="let list of matrix">
                    <td *ngFor="let element of list" class="cell" [style.color]="element.color">
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
        }
        .cell {
            text-align: center;
            width: 20px;
            height: 20px;
        }
    `]
})
export class MatrixComponent implements OnInit {

    matrix: {
      title: string,
      color: string
    }[][];

    constructor() {}

    ngOnInit() {
        const length = 16;
        this.matrix = [];
        for (let i = 0; i < length; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < length; j++) {
                this.matrix[i].push({
                  title: this.randomChar(),
                  color: 'black',
                });
            }
        }
        this.insertReservedWords();
    }

    private insertReservedWords() {
        const reservedWords = [
            'VALA',
            'KHOSRAVI',
        ];
        reservedWords.forEach((rw, index) => {
            for (let i = 0; i < rw.length; i++) {
                this.matrix[index][i] = {
                    title: rw[i],
                    color: 'red',
                };
            }
        });
    }

    private randomChar() {
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const character = possible.charAt(Math.floor(Math.random() * possible.length));
        return character;
    }
}
