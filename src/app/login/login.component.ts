import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 public loginForm:FormGroup=new FormGroup(
    {
      email:new FormControl(),
      password:new FormControl()
    }
  )

  constructor(private _loginService:LoginService, private _router:Router){

  }
  loginComponent(){
    console.log(this.loginForm)
    this._loginService.loginService(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("login successfully")
        console.log(data)
        console.log(data.token)
        this._router.navigateByUrl('/dashboard')
        sessionStorage.setItem('token',data.token)
      },
      (err:any)=>{
        alert("Invalid credential")
        console.log(err)
        

      }
    )
  }

}
