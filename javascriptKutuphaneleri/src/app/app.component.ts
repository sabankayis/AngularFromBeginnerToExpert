import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  p: number = 1;
  pageSize : number = 10;
  collection: number[] = [];
  list:any[]=[];
  constructor(
    private _toastr: ToastrService,
    private _spinner: NgxSpinnerService,
    private _http: HttpClient
  ) {
    for (let index = 0; index < 1000; index++) {
      this.collection.push(index);
    }
  }

  getRequestForPwa(){
    this._http.get("https://jsonplaceholder.typicode.com/todos").subscribe((res:any)=>{
      this.list = res;
    })
  }

  //CallSpinner Api ile kullanma
  callSpinner() {
    this._spinner.show();
    this._http.get('https://jsonplaceholder.typicode.com/todos').subscribe({
      next: (res) => {
        this._spinner.hide();
      },
      error: (err) => {
        this._spinner.hide();
      },
    });
  }
  // butonlara tıklayarak bakabilirsin ne çıktığına
  callSwal() {
    Swal.fire({
      text: 'Mesaj kısmı',
      title: 'Başlık kısmı',
      confirmButtonText: 'Onayla',
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: 'vazgeç',
      cancelButtonColor: 'green',
    }).then((res) => {
      if (res.isConfirmed) {
        alert('swal onaylandı.');
      }
      if (res.isDismissed) {
        alert('swal reddedildi.');
      }
    });
  }

  callsweetAlert() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      icon: 'warning',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
    Toast.fire('Something interesting happened', '', 'info');
  }

  toast1() {
    this._toastr.success('Success', 'title');
    this._toastr.info('Info Message');
    this._toastr.error('', 'Error!');
    this._toastr.warning('Warning message', 'Warning Title');
  }
}
