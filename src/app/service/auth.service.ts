import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Utente } from '../dati/tipoUtenti';
import { UtentiService } from './utenti.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user= new BehaviorSubject<any>([])
  lista:Utente[]=[]
  loginIn=false

  constructor(private router:Router,private utenti:UtentiService) { 
    this.lista=utenti._utenti
  }


  getUser(){
    return this.user.asObservable()
  }



  getUsers(){
      return this.lista
  }



  addUser(user:Utente){
  this.lista.push(user)
  }



  isAuthenticated(){
    return new Promise<boolean>((resolve,reject)=>
    {
      resolve(this.loginIn)
    })

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
