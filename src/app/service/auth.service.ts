import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Utente } from '../dati/tipoUtenti';
import { UtentiService } from './utenti.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  utente?:Utente
   user= new BehaviorSubject<any>([])

  loginIn=false
  constructor(private router:Router,private utenti:UtentiService) { 

  }




  getUser(){
    return this.user.asObservable()
  }



  isAuthenticated(){
    return new Promise<boolean>((resolve,reject)=>
    {
      resolve(this.loginIn)
    })

    }
  

  login(){
    this.loginIn=true
    this.router.navigate(['/'])
  }

  logout(){
    this.loginIn=false
    this.router.navigate(['/login'])
  }

  loginUser(item:Utente){

    this.user.next(item)
    this.loginIn=true
    this.router.navigate(['/'])
  }
}
