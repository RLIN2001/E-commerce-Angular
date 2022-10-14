import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utente } from '../dati/tipoUtenti';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errore=false
  form:FormGroup
  username=""
  email=""
  password=""
  listaUtente:Utente[]=[]


  constructor(private auth:AuthService,private router:Router) { 
    this.form=new FormGroup({
      username:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,Validators.required),
      passwordC: new FormControl(null,Validators.required),
      
    })
  }


    onSubmit(){
      if(this.form.value.password==this.form.value.passwordC)
      {
        this.auth.addUser({username:this.form.value.username,email:this.form.value.email,password:this.form.value.password})
        this.router.navigate(['/login'])

      }
      else
      {
      this.errore=true
      this.form.reset()
    }
    }

    

  ngOnInit(): void {
  }

}
