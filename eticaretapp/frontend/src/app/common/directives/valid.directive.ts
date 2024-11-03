import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appValid]',
  standalone: true
})
export class ValidDirective {

  @Input() appValid:boolean = false;
  //constructorda tanımladığın _el elemana ulaşmanı sağlıyor.
  //@input() ise dışarıdan değer almanı sağlıyor.
  constructor(private _el:ElementRef<HTMLInputElement>) { }

  @HostListener("keyup") keyup(){
    if (this.appValid) {
      this._el.nativeElement.className = "form-control is-valid"
    }else{
      this._el.nativeElement.className = "form-control is-invalid"
    }
  }

}
