import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Utente } from '../dati/tipoUtenti';
import { AuthService } from '../service/auth.service';
import { ServizioCarrelloService } from '../service/servizio-carrello.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {

  subscription: Subscription;
  utente!: Utente;

  constructor(private auth:AuthService,private router:Router,private prodottiCarrelloService:ServizioCarrelloService) { 
    this.subscription = this.auth.getUser().subscribe(val =>{ this.utente = val})
     
    
    if(Object.keys(this.utente).length === 0)
     this.router.navigate(["pagina-non-trovata"])
    
  }

  ngOnInit(): void {
  }


  disconnetti(){
    this.prodottiCarrelloService.svuotaCarrello()
    this.auth.logout()
  }
}
