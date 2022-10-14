import { emitDistinctChangesOnlyDefaultValue, isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { Prodotto } from '../dati/tipoProdotto';

@Injectable({
  providedIn: 'root'
})
export class ServizioCarrelloService {

  
  public listaProdottiCarrello :Prodotto[] = []
  public listaProdotti= new BehaviorSubject<any>([])

  constructor() {

   }


  getListaProdotti(){
    return this.listaProdotti.asObservable()
  }

  

  AggiungiCarrello(item:Prodotto){
    this.listaProdottiCarrello.push(item)
    item.quantita+=item.count

    this.listaProdottiCarrello=Object.values(this.listaProdottiCarrello.reduce((acc,cur)=>Object.assign(acc,{[cur.codice]:cur}),{}))
    
    //contiene gli stessi elementi della listaProdittiCarrello
    this.listaProdotti.next(this.listaProdottiCarrello)

    console.log(this.listaProdottiCarrello)
  }


  RimuoviProdottoCarrello(item:Prodotto)
  {
    const index = this.listaProdottiCarrello.map(object => object.codice).indexOf(item.codice);

    if (index > -1)
      this.listaProdottiCarrello.splice(index, 1);    
    }


  getPrezzo(){
    let tot=0
    for(let item of this.listaProdottiCarrello)
      tot+=item.quantita*item.prezzo

      return tot
  }


  svuotaCarrello(){
    this.listaProdottiCarrello = []
    this.listaProdotti.next(this.listaProdottiCarrello)
  }
}
