import { Component, Input, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';

declare var JustGage: any;

@Component({
  selector: 'justgage',
  templateUrl: './justgage.component.html',
  styleUrls: ['./justgage.component.scss']
})
export class JustgageComponent implements OnInit, OnChanges {
  justgage: any;

  @Input() options: any = {};
  @Input() value: number = 0;
  @Input() min: number = 100;
  @Input() max: number = 100;
  @Input() unit: string = "";

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.create();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.justgage) {
      if(changes['max']) this.justgage.setNewMax(this.max)
      if(changes['min']) this.justgage.setNewMin(this.min)
      if(changes['unit']) this.justgage.setNewUnit(this.unit)
      if(changes['value']) this.justgage.setNewValue(this.value);
    }
  }

  private create() {
    delete this.options.id;
    this.options.parentNode = this.elementRef.nativeElement;
    this.options.max = this.max;
    this.options.value = this.value;
    this.options.unit = this.unit;
    this.justgage = new JustGage(this.options);
  }
}
