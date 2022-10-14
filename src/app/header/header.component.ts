import { Component, OnInit } from '@angular/core';
import { ServizioCarrelloService } from '../service/servizio-carrello.service';
import { ServizioService } from '../service/servizio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  ricerca=""
  constructor(private servizioCarrello:ServizioCarrelloService,private servizioProdotto:ServizioService) 
  { 
  
  }

  search(event:Event){
    this.ricerca=(<HTMLInputElement>event.target).value
    console.log(this.ricerca)
    this.servizioProdotto.ricerca.next(this.ricerca)
  }

  ngOnInit(): void {
   

}
}