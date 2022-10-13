import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../dati/tipoProdotto';
import { ServizioCarrelloService } from '../service/servizio-carrello.service';
import { ServizioService } from '../service/servizio.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {

  
  prodotti :Prodotto[] = []


  constructor(private prodottoService :ServizioService,private servizioCarrello: ServizioCarrelloService) {
    
    this.prodotti=this.prodottoService._prodotti

    
   }
  
   aggiungiAlCarrello(item:Prodotto){
    this.servizioCarrello.AggiungiCarrello(item)
    item.count=0
    alert("Il prodotto  "+item.nome+ "  è stato aggiunto al carrello")
  }


  incremento(item:Prodotto){

    item.count++;
  }



  decremento(item:Prodotto){
    item.count--
  }
  ngOnInit(): void {

  
}
}