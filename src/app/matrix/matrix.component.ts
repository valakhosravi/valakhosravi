import { Component, OnInit } from '@angular/core';
import { Cell } from '../classes/cell';

import * as $ from 'jquery';

@Component({
    selector: 'app-matrix',
    template: `
    <img src="assets/images/mountain.png" style="position: fixed; top: -100px;">
    <div class="container">
        <div class="outter">
            <div class="middle">
                <div class="inner">
                    <div id="control">
                    </div>
                </div>
            </div>
        </div>
        <div class="container-in" (mouseenter)="onContainerMouseEnter()" (mouseleave)="onContainerMouseLeave()">
            <!-- <div *ngIf="lineDisplay" class="vertical-line line" [style.marginLeft]="yIndex * 22 + 'px'"></div>
            <div *ngIf="lineDisplay" class="horizontal-line line" [style.marginTop]="xIndex * 22 + 'px'"></div> -->
            <table id="parse-table">
                <tbody>
                    <tr *ngFor="let list of matrix;let j = index">
                        <td *ngFor="let element of list;let i = index" class="{{element.class}} {{element.id}}"
                         (mouseenter)="onCellMouseEnter(j, i)">
                            {{element.title}}
                        </td>
                    </tr>
                </tbody>
            </table>
            <input *ngIf="emailStatus" type="email" class="email-input">
        </div>
        <app-footer></app-footer>
    </div>
    `,
    styles: [`
        #control {
            cursor: pointer;
        }
        .container {
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -40%);
        }
        .container-in {
            background-color: rgba(0, 0, 0, 0.6);
            position: relative;
            border: 6px solid white;
            padding: 22px;
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
            color: #72F7AA;
            text-align: center;
            width: 20px;
            height: 20px;
            cursor: pointer;
        }
        .vertical-line {
            background-color: red;
            margin-top: -20px;
            width: 23px;
            height: 100%;
        }
        .horizontal-line {
            background-color: blue;
            margin-left: -20px;
            width: 100%;
            height: 23px;
        }
        .line {
            position: absolute;
            background-color: white;
            opacity: 0.2;
            z-index: -1;
            transition: .2s;
            -webkit-transition: .2s;
            transition-timing-function: ease;
        }
        .email-input {
            width: 190px;
            margin-left: 15px;
            position: absolute;
            top: 288px;
            border: none;
            background-color: transparent;
            color: #72F7AA;
            text-align: center;
            font-size: 16px;
            outline: none;
        }
    `]
})
export class MatrixComponent implements OnInit {

    matrix: Cell[][];
    lineDisplay: Boolean = false;
    emailStatus: Boolean = false;
    xIndex: number;
    yIndex: number;
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

        for (let i = 0; i < 33; i++) {
            this.generateRandomMatrix(i);
        }
        this.insertReservedWords(true);
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

    private insertReservedWords(delay: Boolean) {
        this.emailStatus = false;
        const reservedWords = [
            {
                title: 'VALA KHOSRAVI',
                number: 0,
                id: 'vala-khosravi',
            },
            {
                title: 'SKILLS',
                number: 0,
                id: 'skills',
            },
            {
                title: 'DOWNLOAD MY CV',
                number: 0,
                id: 'download-cv',
            },
            {
                title: 'CONTACT ME',
                number: 0,
                id: 'contact-me',
            },
        ];
        if (delay) {
            setTimeout(() => {
                reservedWords.forEach((rw, index) => {
                    for (let i = 0; i < rw.title.length; i++) {
                        setTimeout(() => {
                            this.matrix[index * 4][rw.number + i] = {
                                title: rw.title[i],
                                class: 'cell-red',
                                id: rw.id,
                            };
                        }, i * 100);
                    }
                });
            }, 2000);
            setTimeout(() => {
                this.assignCellMethods();
            }, 3000);
        } else {
            reservedWords.forEach((rw, index) => {
                for (let i = 0; i < rw.title.length; i++) {
                    setTimeout(() => {
                        this.matrix[index * 4][rw.number + i] = {
                            title: rw.title[i],
                            class: 'cell cell-red',
                            id: rw.id,
                        };
                    }, i * 100);
                }
            });
            setTimeout(() => {
                this.assignCellMethods();
            }, 1000);
        }
    }

    private randomChar(): string {
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const character = possible.charAt(Math.floor(Math.random() * possible.length));
        return character;
    }

    private assignCellMethods() {
        const that = this;
        $(document).ready(
            function () {
                $('.skills').click(
                    function () {
                        that.onSkillsClick(that);
                    }
                );
                $('.download-cv').click(
                    function () {
                        window.location.href = 'assets/vala-khosravi-cv.pdf';
                    }
                );
                $('.contact-me').click(
                    function () {
                        that.onContactMeClick(that);
                    }
                );
            }
        );
    }
    public onContainerMouseEnter() {
        this.lineDisplay = true;
    }
    public onContainerMouseLeave() {
        this.lineDisplay = false;
    }

    public onCellMouseEnter(j, i) {
        this.xIndex = j;
        this.yIndex = i;
    }

    public onSkillsClick(that: any) {
        this.emailStatus = false;
        const titles = [
            '<BACK',
            'ANGULAR',
            'REACT',
            'SASS',
            'SKETCH'
        ];
        for (let i = 0; i < 16; i++) {
            for (let j = 0; j < 16; j++) {
                setTimeout(() => {
                    that.matrix[j][i] = {
                        title: that.randomChar(),
                        class: 'cell',
                        id: '',
                    };
                }, i * 100);
            }
        }
        titles.forEach((t, row) => {
            t.split('').forEach((element, index) => {
                setTimeout(() => {
                    that.matrix[row * 3][index] = {
                        title: element,
                        class: 'cell-red skills-cell-' + row,
                        id: 'skills-back-' + row,
                    };
                }, index * 100);
            });
        });
        setTimeout(() => {
            $('.skills-cell-' + 0).click(() => {
                for (let i = 0; i < 16; i++) {
                    for (let j = 0; j < 16; j++) {
                        setTimeout(() => {
                            that.matrix[j][i] = {
                                title: that.randomChar(),
                                class: 'cell',
                                id: '',
                            };
                        }, i * 100);
                    }
                }
                this.insertReservedWords(false);
            });
        }, 1500);
    }

    public onContactMeClick(that: any) {
        const reservedWords = [
            {
                title: '[        ]SUBMIT',
                number: 0,
                id: 'contact-me',
            },
        ];
        reservedWords.forEach((rw, index) => {
            for (let i = 0; i < rw.title.length; i++) {
                setTimeout(() => {
                    this.matrix[12][rw.number + i] = {
                        title: rw.title[i],
                        class: 'cell-red',
                        id: rw.id,
                    };
                }, i * 100);
            }
        });
        setTimeout(() => {
            this.emailStatus = true;
            setTimeout(() => {
                $('.email-input')[0].focus();
            }, 100);
        }, 900);
    }
}
