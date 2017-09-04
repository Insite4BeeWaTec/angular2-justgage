# NGX-JustGage
Original (angular2-justgage) by emn178 (https://github.com/emn178/angular2-justgage)  
  
To make this library work, you require my version of JustGage (https://github.com/Insite4BeeWaTec/justgage).  
  
The goal is to make the most of the options "Dynamicly". That means, you can easily change options and they will be changed without reloading the complete DOM-Object. To do that with Angular, you need this modified version of NGX-Charts.  
  
This Version works best with Angular 4  
  
# Installlation  
  
You can install ngx-justgage by using npm.  
  
<code>npm install https://github.com/Insite4BeeWaTec/ngx-justgage</code>  
  
Usage  
  
Add JustgageModule to your module, eg.  
  
<code>
import { JustgageModule } from 'ngx-justgage';

@NgModule({
  imports: [ JustgageModule ]
  // ...
})
export class AppModule {
}
</code>
  
And you can use selector justgage in your template.  
  
## JavaScript  
  
<code>
options = {
  min: 0,
  title: 'Visitors'
};
max = 100;
value = 67;
</code>
  
## HTML  
  
<code>
<justgage [options]="options" [max]="max" [value]="value"></justgage>
</code>

# License

The project is released under the MIT license.
