import { Component, OnInit } from '@angular/core';
import { Cell } from '../classes/cell';

import * as $ from 'jquery';

@Component({
    selector: 'app-matrix',
    template: `
    <div class="container">
        <table id="parse-table">
            <tbody>
                <tr *ngFor="let list of matrix">
                    <td *ngFor="let element of list" class="{{element.class}}" id="{{element.id}}">
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
        .cell-red {
            color: #f44336;
            text-align: center;
            width: 20px;
            height: 20px;
        }
    `]
})
export class MatrixComponent implements OnInit {

    matrix: Cell[][];

    constructor() { }

    public ngOnInit() {
        this.matrix = [];
        const length = 16;
        for (let i = 0; i < length; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < length; j++) {
                this.matrix[i].push({
                    title: this.randomChar(),
                    class: 'cell',
                });
            }
        }

        for (let i = 0; i < 35; i++) {
            this.generateRandomMatrix(i);
        }
        this.insertReservedWords();
    }

    private generateRandomMatrix(interval: number) {
        setTimeout(() => {
            const length = 16;
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < length; j++) {
                    if (this.matrix[i][j].class !== 'cell-red') {
                        this.matrix[i][j] = {
                            title: this.randomChar(),
                            class: 'cell',
                        };
                    }
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
                    id: 'vala-khosravi',
                },
                {
                    title: 'SKILLS',
                    number: 5,
                    id: 'skills',
                },
                {
                    title: 'ABOUT',
                    number: 1,
                    id: 'about',
                },
                {
                  title: 'CONTACT ME',
                  number: 6,
                  id: 'contact-me',
                },
              ];

            reservedWords.forEach((rw, index) => {
                for (let i = 0; i < rw.title.length; i++) {
                    setTimeout(() => {
                        this.matrix[index * 4][rw.number + i] = {
                            title: rw.title[i],
                            class: 'cell-red',
                            id: rw.id,
                        };
                        this.assignCellMethods();
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

    private assignCellMethods() {
        const that = this;
        $(document).ready(
            function() {
                // skills click
                $('.cell-red').each(
                    function(index, element){
                        if ($(element).attr('id') === 'skills') {
                            $(element).click(
                                function() {
                                    const title = 'SKILLS';
                                    title.split('').forEach((element, index) => {
                                        setTimeout(() => {
                                            that.matrix[0][index] = {
                                                  title: element,
                                                  class: 'cell-red',
                                                  id: 'skills-back',
                                              };
                                        }, index * 100);
                                    });
                                    for (let i = title.length; i < 16; i++) {
                                      setTimeout(() => {
                                        that.matrix[0][i] = {
                                                title: that.randomChar(),
                                                class: 'cell',
                                                id: '',
                                            };
                                        }, i * 100);
                                    }
                                }
                            );
                        }
                    }
                );
            }
      );
    }
}
