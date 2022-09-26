import {Component, ViewChild} from "@angular/core";
import {Customer} from "../models/customer";
import {Event} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html'

})
export class CustomerComponent{
  Customers:Array<Customer>;
  isAddNew:boolean;
  FirstName!:string;
  LastName!:string;
  @ViewChild('myForm') CustomerForm!:NgForm;
  constructor() {
    this.isAddNew=false;
    this.Customers = new Array<Customer>();
    this.Customers.push(new Customer("Thanh","Huynh"));
    this.Customers.push(new Customer("Thai","Nguyen"));
    this.Customers.push(new Customer("Vu","DUy"));
  }
  Save(){
    this.Customers.push(new Customer(this.FirstName,this.LastName));
    this.isAddNew=false;
  }
  AddNew(){
    this.isAddNew=true;
    this.Reset();
  }


  Cancel() {
    this.isAddNew=false;
    this.Reset();
  }
  Reset(){
    // this.FirstName='';
    // this.LastName='';
    this.CustomerForm.reset();
  }
}
