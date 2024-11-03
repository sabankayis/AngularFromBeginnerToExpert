import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    public translate:TranslateService
  ){
    translate.addLangs(["en","tr"])
    translate.setDefaultLang("tr");
    const browserLang = translate.getBrowserCultureLang();
    translate.use(browserLang?.match(/en|tr/) ? browserLang : "tr")
  }
}
