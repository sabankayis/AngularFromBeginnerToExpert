import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[renklendir]',
  standalone: true
})
export class RenklendirDirective {

  @Input("renklendir") color:string|undefined;
  @Input("test") name:string | undefined;

  constructor(private el:ElementRef) { }

  @HostListener("mouseenter") method1(){
    console.log("mouse elementin üzerine geldi.")
    this.el.nativeElement.style = "color:red";
    this.el.nativeElement.innerHTML = "Şaban";
    console.log(this.color);
  }
  @HostListener("mouseleave") method2(){
    console.log("mouse elementin üzerinden ayrıldı.")
    this.el.nativeElement.style = "color:black";
    console.log(this.name);

  }
}
