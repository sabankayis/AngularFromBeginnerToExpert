import { Injectable } from '@angular/core';
import { GenericHttpService } from '../../../common/services/generic-http.service';
import { MessageResponseModel } from '../../../common/models/message.response.model';
import { RequestModel } from '../../../common/models/request.model';
import { PaginationResultModel } from '../../../common/models/pagination-result.model';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _htpp:GenericHttpService
  ) { }

  add(model:FormData,callBack:(res:MessageResponseModel)=>void){
    this._htpp.post<MessageResponseModel>("products/add",model,res=>callBack(res));
  }

  update(model:FormData,callBack:(res:MessageResponseModel)=>void){
    this._htpp.post<MessageResponseModel>("products/update",model,res=>callBack(res));
  }

  getAll(model:RequestModel,callBack:(res:PaginationResultModel<ProductModel[]>)=>void){
    this._htpp.post<PaginationResultModel<ProductModel[]>>("products/",model,res=>callBack(res));
  }

  removeById(model:any,callBack:(res:MessageResponseModel)=>void){
    this._htpp.post<MessageResponseModel>("products/removeById",model,res=>callBack(res));
  }

  changeActiveStatus(model:any,callBack:(res:MessageResponseModel)=>void){
    this._htpp.post<MessageResponseModel>("products/changeActiveStatus",model,res=>callBack(res));
  }

  getById(model:any,callBack:(res:ProductModel)=>void){
    this._htpp.post<ProductModel>("products/getById",model,res=>callBack(res));
  }

  removeImageByProductIdAndIndex(model:any,callBack:(res:MessageResponseModel)=>void){
    this._htpp.post<MessageResponseModel>("products/removeImageByProductIdAndIndex",model,res=>callBack(res));
  }

}
