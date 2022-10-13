import { Injectable } from '@angular/core';
import { Prodotto } from '../dati/tipoProdotto';

@Injectable({
  providedIn: 'root'
})


export class ServizioService {


   _prodotti :Prodotto[] = [
    {codice:"001",nome:"prodotto 1", categoria:1, slug:"prod1",prezzo:100,foto:"",quantita:0,count:0},
    {codice:"002",nome:"prodotto 2", categoria:2, slug:"prod2",prezzo:200,foto:"",quantita:0,count:0},
    {codice:"003",nome:"prodotto 3", categoria:1, slug:"prod3",prezzo:300,foto:"",quantita:0,count:0},
    {codice:"004",nome:"prodotto 4", categoria:2, slug:"prod4",prezzo:400,foto:"",quantita:0,count:0},
    {codice:"005",nome:"prodotto 5", categoria:2, slug:"prod5",prezzo:500,foto:"",quantita:0,count:0},
  ]



  constructor() { }

 
}
