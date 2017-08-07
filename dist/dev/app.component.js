import { Component } from '@angular/core';
var AppComponent = (function () {
    function AppComponent() {
        this.options = {
            id: "gauge",
            value: 99,
            min: 0,
            max: 999,
            title: "Visitors"
        };
        this.max = 100;
        this.value = 67;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.max = 200;
            _this.value = 123;
            setTimeout(function () {
                _this.options = {
                    id: "gauge",
                    value: 99,
                    min: 0,
                    max: 999,
                    title: "Users"
                };
                setTimeout(function () {
                    _this.max = 200;
                    _this.value = 173;
                }, 1000);
            }, 1000);
        }, 3000);
    };
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-root',
                    template: "<justgage [options]=\"options\" [max]=\"max\" [value]=\"value\"></justgage>",
                    styles: ["justgage{width:200px}"]
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = function () { return []; };
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map