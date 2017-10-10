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
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() unit: string = "";
  @Input() title: string = "";
  @Input() backgroundForegroundSwapped: boolean = false;

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
      if(changes['title']) this.justgage.setNewTitle(this.title);
      if(changes['backgroundForegroundSwapped']) this.justgage.setBackgroundForegroundSwapped(this.backgroundForegroundSwapped);
    }
  }

  private create() {
    delete this.options.id;
    this.options.parentNode = this.elementRef.nativeElement;
    this.options.max = this.max;
    this.options.min = this.min;
    this.options.value = this.value;
    this.options.unit = this.unit;
    this.options.backgroundForegroundSwapped = this.backgroundForegroundSwapped;
    this.justgage = new JustGage(this.options);
  }
}
