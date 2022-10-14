import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prodotto } from '../dati/tipoProdotto';
import { AuthService } from '../service/auth.service';
import { ServizioCarrelloService } from '../service/servizio-carrello.service';
import { ServizioService } from '../service/servizio.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {

  
  prodotti :Prodotto[] = []
  ricerca=""

  constructor(private prodottoService :ServizioService,private servizioCarrello: ServizioCarrelloService,private auth:AuthService,private router:Router) {
    
    this.prodotti=this.prodottoService._prodotti
    
    this.prodottoService.ricerca.subscribe(val=>{this.ricerca=val})
    
   }
  
   aggiungiAlCarrello(item:Prodotto){
    this.servizioCarrello.AggiungiCarrello(item)
    item.count=0
    alert("Il prodotto  "+item.nome+ "  è stato aggiunto al carrello")
  }


  incremento(item:Prodotto){
    if(this.auth.loginIn)
    item.count++;
    else
    this.router.navigate(["/login"])
  }



  decremento(item:Prodotto){
    if(this.auth.loginIn)
    item.count--;
    else
    this.router.navigate(["/login"])
    }
  ngOnInit(): void {

  
}
}