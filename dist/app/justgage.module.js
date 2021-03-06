import * as Raphael from 'raphael';
import 'justgage';
import { NgModule } from '@angular/core';
import { JustgageComponent } from './justgage.component';
var JustgageModule = (function () {
    function JustgageModule() {
        window['Raphael'] = Raphael;
    }
    JustgageModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [JustgageComponent],
                    exports: [JustgageComponent]
                },] },
    ];
    /** @nocollapse */
    JustgageModule.ctorParameters = function () { return []; };
    return JustgageModule;
}());
export { JustgageModule };
//# sourceMappingURL=justgage.module.js.map