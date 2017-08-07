import { OnInit } from '@angular/core';
export declare class AppComponent implements OnInit {
    options: {
        id: string;
        value: number;
        min: number;
        max: number;
        title: string;
    };
    max: number;
    value: number;
    ngOnInit(): void;
}
