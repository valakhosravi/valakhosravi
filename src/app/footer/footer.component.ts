import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
    <div class="outter footer" style="bottom: -10vh;">
        <div class="middle">
        <table style="width: 100%;">
            <tbody>
                <tr>
                    <td class="contact-cell">
                        <a href="https://www.linkedin.com/in/vala-khosravi-9a87a6132/" target="_blank">
                            <i class="fa fa-linkedin" style="font-size: 18px;"></i>
                        </a>
                    </td>
                    <td class="contact-cell">
                        <a href="https://stackoverflow.com/story/valakhosravi" target="_blank">
                            <i class="fa fa-stack-overflow" style="font-size: 18px;"></i>
                        </a>
                    </td>
                    <td class="contact-cell">
                        <a href="https://github.com/valakhosravi" target="_blank">
                            <i class="fa fa-github-alt" style="font-size: 18px;"></i>
                        </a>
                    </td>
                    <td class="contact-cell">
                        <a href="mailto:valakhosravi0@gmail.com" target="_blank">
                            <i class="fa fa-envelope-o" style="font-size: 18px;"></i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    `,
    styles: [`
        .footer {
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            width: 100%;
            height: 10vh;
            position: fixed;
            bottom: 0;
        }
        footer * {
            color: white;
        }
        .contact-cell {
            text-align: center;
        }
        .contact-cell a:link {
          color: white;
          background-color: transparent;
          text-decoration: none;
        }
        .contact-cell a:visited {
            color: white;
            background-color: transparent;
            text-decoration: none;
        }
        .contact-cell a:hover {
            color: #f44336;
            background-color: transparent;
            text-decoration: underline;
        }
        .contact-cell a:active {
            color: white;
            background-color: transparent;
            text-decoration: underline;
        }
    `]
})
export class FooterComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
