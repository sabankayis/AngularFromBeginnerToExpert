import { DatePipe } from '@angular/common';
import { Component, model, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  addForm:FormGroup = new FormGroup({});
  updateForm:FormGroup = new FormGroup({});
  employees:Employees[] = [];
  isUpdateFormActive:boolean = false;
  updateIndex:number =0;

  constructor(private _date:DatePipe){

  }
  ngOnInit(): void {
    this.createAddForm();
    this.createUpdateForm();
  }


  createAddForm(){
    this.addForm=new FormGroup({
      name:new FormControl("",[Validators.required,Validators.minLength(3)]),
      startingDate:new FormControl(this._date.transform(new Date(),"yyyy-MM-dd")),
      profession:new FormControl("",[Validators.required,Validators.minLength(3)])
    })
  }
  createUpdateForm(){
    this.updateForm= new FormGroup({
      name:new FormControl("",[Validators.required,Validators.minLength(3)]),
      startingDate:new FormControl(this._date.transform(new Date(),"yyyy-MM-dd")),
      profession:new FormControl("",[Validators.required,Validators.minLength(3)])
    })

  }
  
  save(){
    if (this.addForm.valid) {
      this.employees.push(this.addForm.value)
      this.addForm.reset();
      this.createAddForm();
      // this.addForm.controls["startingDate"].setValue(
      //   this._date.transform(new Date(),
      // "yyyy-MM-dd")
      // )
    }
  }
  get(model:Employees,index:number){
    this.createUpdateForm();
    this.updateForm.controls["name"].setValue(model.name);
    this.updateForm.controls["profession"].setValue(model.profession);
    this.updateForm.controls["startingDate"].setValue(model.startingDate);
    this.isUpdateFormActive = true;
    this.updateIndex = index;
    
  }
  cancel(){
    this.isUpdateFormActive = false;
  }
  update(){
    if (this.updateForm.valid) {
    this.employees[this.updateIndex] = this.updateForm.value;
      this.cancel();
    }
  }
}

class Employees{
  name:string="";
  profession:string="";
  startingDate:string="";
}
