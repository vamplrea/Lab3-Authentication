import {Component, ViewChild} from "@angular/core";
import {Customer} from "../models/customer";
import {NgForm} from "@angular/forms";
import * as jw_decode from "jwt-decode";

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

  loginUserFirstName:string = "DummyFName";

  constructor() {
    const decodedToken = jw_decode(localStorage.token);
    this.loginUserFirstName = decodedToken.firstName;
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
  logout(){
    localStorage.clear();
  }
}
