import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<justgage [options]="options" [max]="max" [value]="value"></justgage>`,
  styles: [`justgage{width:200px}`]
})
export class AppComponent implements OnInit {
  options = {
    id: "gauge",
    value: 99,
    min: 0,
    max: 999,
    title: "Visitors"
  }
  max = 100;
  value = 67;

  ngOnInit() {
    setTimeout(() => {
      this.max = 200;
      this.value = 123;

      setTimeout(() => {
        this.options = {
          id: "gauge",
          value: 99,
          min: 0,
          max: 999,
          title: "Users"
        };

        setTimeout(() => {
          this.max = 200;
          this.value = 173;
        }, 1000);
      }, 1000);
    }, 3000);
  }
}
