import {Component, ViewChild} from "@angular/core";
import {FormControl, FormGroup, NgForm, Validator, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component(
  {
    selector: 'login',
    templateUrl: './login.component.html'
  }
)
export class LoginComponent {
  loginForm = new FormGroup({
    UserName: new FormControl('',[Validators.required,Validators.minLength(6)]),
    Password: new FormControl('',[Validators.required,Validators.minLength(6)]),
  });
  isAuthenticationFailed:boolean;

  constructor(private router : Router,private httpClient: HttpClient) {
    this.isAuthenticationFailed = false;
  }
  login(){
    this.httpClient.post("http://localhost:4000/signin",this.loginForm.value).subscribe((response:{token:string})=>{
      if(response.token==undefined){
        this.isAuthenticationFailed = true;
      }
      else{
        localStorage.token=response.token;
        this.router.navigate(['customer']);
      }
    });
  }

}
