import { Component, Input, ElementRef } from '@angular/core';
var JustgageComponent = (function () {
    function JustgageComponent(elementRef) {
        this.elementRef = elementRef;
        this.options = {};
        this.value = 0;
        this.min = 100;
        this.max = 100;
        this.unit = "";
    }
    JustgageComponent.prototype.ngOnInit = function () {
        this.create();
    };
    JustgageComponent.prototype.ngOnChanges = function (changes) {
        if (this.justgage) {
            if (changes['value']) {
                this.justgage.refresh(this.value);
            }
            else if (changes['max']) {
                this.justgage.setNewMax(this.max);
            }
            else if (changes['min']) {
                this.justgage.setNewMin(this.min);
            }
            else if (changes['unit']) {
                this.justgage.setNewUnit(this.unit);
            }
        }
    };
    JustgageComponent.prototype.create = function () {
        delete this.options.id;
        this.options.parentNode = this.elementRef.nativeElement;
        this.options.max = this.max;
        this.options.value = this.value;
        this.options.unit = this.unit;
        this.justgage = new JustGage(this.options);
    };
    JustgageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'justgage',
                    template: "",
                    styles: [":host{display:block}"]
                },] },
    ];
    /** @nocollapse */
    JustgageComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    JustgageComponent.propDecorators = {
        'value': [{ type: Input },],
        'min': [{ type: Input },],
        'max': [{ type: Input },],
        'unit': [{ type: Input },],
    };
    return JustgageComponent;
}());
export { JustgageComponent };
//# sourceMappingURL=justgage.component.js.map