import { Injectable } from '@angular/core';
import { Utente } from '../dati/tipoUtenti';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  constructor() { 

  }

  _utenti :Utente[] = [
    {codice:"001",username:"utente1", email:"esempio1@gmail.com", password:"password"},
    {codice:"002",username:"utente2", email:"esempio2@gmail.com", password:"password"},
    {codice:"003",username:"utente3", email:"esempio3@gmail.com", password:"password"},
    {codice:"004",username:"utente4", email:"esempio4@gmail.com",password:"password" },
    {codice:"005",username:"utente5", email:"esempio5@gmail.com", password:"password"},
  ]


}
