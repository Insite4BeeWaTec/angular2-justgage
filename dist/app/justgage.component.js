import { Component, Input, ElementRef } from '@angular/core';
var JustgageComponent = (function () {
    function JustgageComponent(elementRef) {
        this.elementRef = elementRef;
        this.options = {};
        this.value = 0;
        this.max = 100;
    }
    JustgageComponent.prototype.ngOnInit = function () {
        this.create();
    };
    JustgageComponent.prototype.ngOnChanges = function (changes) {
        if (this.justgage) {
            if (changes['options']) {
                this.elementRef.nativeElement.innerHTML = '';
                this.create();
            }
            else if (changes['max'] || changes['value']) {
                this.justgage.refresh(this.value, this.max);
            }
        }
    };
    JustgageComponent.prototype.create = function () {
        delete this.options.id;
        this.options.parentNode = this.elementRef.nativeElement;
        this.options.max = this.max;
        this.options.value = this.value;
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
        'options': [{ type: Input },],
        'value': [{ type: Input },],
        'max': [{ type: Input },],
    };
    return JustgageComponent;
}());
export { JustgageComponent };
//# sourceMappingURL=justgage.component.js.map