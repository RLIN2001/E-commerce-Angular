import { Component, OnInit } from '@angular/core';
import { ServizioCarrelloService } from '../service/servizio-carrello.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  
  constructor(private servizioCarrello:ServizioCarrelloService) 
  { 

  }

  ngOnInit(): void {
   

}
}