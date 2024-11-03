import { Component } from '@angular/core';

@Component({
  selector: 'app-sart',
  standalone: true,
  imports: [],
  templateUrl: './sart.component.html',
  styleUrl: './sart.component.css'
})
export class SartComponent {
showFirstWord:boolean=false;
showSecondWord:boolean=false;
show(num:number){
if(num===1){
  this.showFirstWord=true;
  this.showSecondWord=false;
} else{
  this.showFirstWord=false;
  this.showSecondWord= true;
}
}
}
