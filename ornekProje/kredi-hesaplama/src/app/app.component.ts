import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template:`
  <h1>Kredi Hesapla</h1>
  <div>
    <label>Kredi Tutarı:</label>
    <input type="text" [(ngModel)]="krediTutari">
  </div>
  <div>
    <label>Taksit Sayısı :</label>
    <select [(ngModel)]="taksitSayisi">
      @for (item of taksitler; track $index) {
        <option>{{item}}</option>
      }
    </select>
  </div>
  <div>
    <button (click)="hesapla()">Hesapla</button>
  </div>
  <hr>
  <h1>{{result}}</h1>
  <hr>
  <table>
    <thead>
      <tr>
        <th>Taksit</th>
        <th>Taksit Tutari</th>
        <th>Kalan Geri Ödeme</th>
      </tr>
    </thead>
    <tbody>
      @for(data of odemePlani; track data){
        <tr>
          <td>{{$index+1}}</td>
          <td>{{data.taksitTutari}}</td>
          <td>{{data.kalanGeriOdeme}}</td>
        </tr>
      }
    </tbody>
  </table>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  krediTutari:number = 0;
  taksitSayisi:number = 3;
  taksitler:number[]=[3,6,12,24];
  result : string = "";

  odemePlani:{
    taksitTutari:number,kalanGeriOdeme:number
  }[] =[];

  hesapla(){
    const taksitTutari:number = (this.krediTutari/this.taksitSayisi)*1.29
    let toplamGeriOdeme:number= taksitTutari * this.taksitSayisi;
    this.result= `Taksit Tutarı: ${taksitTutari} - Taksit sayısı : ${this.taksitSayisi} - Toplam Geri Ödeme:
    ${toplamGeriOdeme}`;
    this.odemePlani = [];
    for (let i = 0; i < this.taksitSayisi; i++) {
      toplamGeriOdeme-=taksitTutari
      const data = {
        taksitTutari:taksitTutari,
        kalanGeriOdeme:toplamGeriOdeme
      }
      this.odemePlani.push(data);
    }
  }

}
