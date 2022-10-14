import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { HeaderComponent } from './header/header.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginaNonTrovataComponent } from './pagina-non-trovata/pagina-non-trovata.component';
import { LoginComponent } from './login/login.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { FiltroPipe } from './filtro.pipe';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    CarrelloComponent,
    HeaderComponent,
    ProdottiComponent,
    PaginaNonTrovataComponent,
    LoginComponent,
    ProfiloComponent,
    FiltroPipe,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
