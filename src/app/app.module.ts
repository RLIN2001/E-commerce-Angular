import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { HeaderComponent } from './header/header.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    CarrelloComponent,
    HeaderComponent,
    ProdottiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
