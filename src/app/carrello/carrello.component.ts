import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Prodotto } from '../dati/tipoProdotto';
import { ServizioCarrelloService } from '../service/servizio-carrello.service';
import { ServizioService } from '../service/servizio.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit{

  lista:Prodotto[]=[]
  subscription: Subscription;
  presenteProdotto=false
  totalePrezzo=0

  constructor(private prodottoService :ServizioService,private servizioCarrello: ServizioCarrelloService) { 
    this.subscription = this.servizioCarrello.getListaProdotti().subscribe(val =>{ this.lista = val})
    this.presenteProdotto=this.lista.length > 0 ? true : false 
    this.totalePrezzo=this.servizioCarrello.getPrezzo()


  }

  ngOnInit(): void {

  }
  ngOnChanges() {

  }

  rimuoviProdotto(item:Prodotto){
    this.servizioCarrello.RimuoviProdottoCarrello(item)
    this.totalePrezzo=this.servizioCarrello.getPrezzo()

    if(this.lista.length==0)
      this.presenteProdotto=false
  }



  incremento(item:Prodotto)
  {
    item.quantita++;
    this.totalePrezzo=this.servizioCarrello.getPrezzo()

  }

  decremento(item:Prodotto)
  {
    item.quantita--;
   this.totalePrezzo=this.servizioCarrello.getPrezzo()

  }



  ngOnDestroy(){
    this.subscription.unsubscribe();

  }
}
