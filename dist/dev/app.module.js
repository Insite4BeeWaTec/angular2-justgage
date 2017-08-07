import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JustgageModule } from '../app';
import { AppComponent } from './app.component';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AppComponent
                    ],
                    imports: [
                        BrowserModule,
                        FormsModule,
                        HttpModule,
                        JustgageModule
                    ],
                    providers: [],
                    bootstrap: [AppComponent],
                    exports: [AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map