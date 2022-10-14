import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Utente } from '../dati/tipoUtenti';
import { AuthService } from '../service/auth.service';
import { UtentiService } from '../service/utenti.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup
  Error=false
  listaUtente:Utente[]=[]

  username=""
  password=""
  

  constructor(private auth:AuthService,private utentiService:UtentiService) { 

    this.form=new FormGroup({
      username:new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required)
    })

    this.listaUtente=this.auth.getUsers()



  }

  onSubmit(){
    this.accedi()
  }
  

  ngOnInit(): void {
  }

  accedi() {
    this.username=this.form.value.username
    this.password=this.form.value.password
    

    for(let item of this.listaUtente)
    {

        if(item.username==this.username && item.password==this.password)
        {
          this.auth.loginUser(item)
          this.Error=false
          break
        }
        else
        this.Error=true
    }
    if(this.Error)
    this.form.reset()


  }
}
