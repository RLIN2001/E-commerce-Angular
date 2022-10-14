import { Component, OnInit } from '@angular/core';
import { AbstractControlDirective, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { UtentiService } from '../service/utenti.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup
  erroreDati=false

  constructor(private auth:AuthService,private utentiService:UtentiService) { 

    this.form=new FormGroup({
      username:new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required)
    })
  }

  onSubmit(){
    this.accedi()
  }
  

  ngOnInit(): void {
  }

  accedi() {

    for(let item of this.utentiService._utenti)
    {
      if(this.form.value.username==item.username && this.form.value.password==item.password)
      {
        //this.auth.login()
        this.auth.loginUser(item)
        break
      }
      else
        this.erroreDati=true
    }


  }
}
