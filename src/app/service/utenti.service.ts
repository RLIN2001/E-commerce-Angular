import { Injectable } from '@angular/core';
import { Utente } from '../dati/tipoUtenti';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  constructor() { 

  }

  _utenti :Utente[] = [
    {username:"utente1", email:"esempio1@gmail.com", password:"password"},
    {username:"utente2", email:"esempio2@gmail.com", password:"password"},
    {username:"utente3", email:"esempio3@gmail.com", password:"password"},
    {username:"utente4", email:"esempio4@gmail.com",password:"password" },
    {username:"utente5", email:"esempio5@gmail.com", password:"password"},
  ]


}
