import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem("token");
    let newRequest=request.clone({
      headers:request.headers.set("Authentication","Bearer" + token)
    });
    return  next.handle(newRequest).pipe(
      catchError((err:HttpErrorResponse)=>{
        console.log(err);
        return of()
      })
    );
  }
}
