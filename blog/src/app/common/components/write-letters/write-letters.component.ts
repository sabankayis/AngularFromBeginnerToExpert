import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-letters',
  standalone: true,
  imports: [],
  templateUrl: './write-letters.component.html',
  styleUrl: './write-letters.component.css'
})
export class WriteLettersComponent implements OnInit {
  kelimeler: string = "In the past, I had the opportunity to develop myself in the fields of Front-End Development. I am currently improving myself in Front-End development with React and Angular. I want to work with a team where I can apply my knowledge and gain practical and professional experience. I am looking for a job in my area of interest, which is developing front-end with HTML, CSS, JavaScript, and related libraries.";
  kelimeArray: string[] = [];
  kelimeIndex: number = 0;
  harfIndex: number = 0;
  output: string = '';

  ngOnInit(): void {
    this.kelimeArray = this.kelimeler.split(' ');
    this.harfYazdir();
  }

  harfYazdir() {
    if (this.kelimeIndex < this.kelimeArray.length) {
      if (this.harfIndex < this.kelimeArray[this.kelimeIndex].length) {
        this.output += this.kelimeArray[this.kelimeIndex][this.harfIndex];
        this.harfIndex++;
        setTimeout(() => this.harfYazdir(), 50); // 50 ms bekle
      } else {
        // Kelimenin sonuna gelindiyse boşluk ekle
        this.output += ' ';
        this.kelimeIndex++;
        this.harfIndex = 0;
        setTimeout(() => this.harfYazdir(), 50); // 50 ms bekle
      }
    }
  }

}
