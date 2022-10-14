import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrelloComponent } from './carrello/carrello.component';
import { LoginComponent } from './login/login.component';
import { PaginaNonTrovataComponent } from './pagina-non-trovata/pagina-non-trovata.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { GuardService } from './service/guard.service';

const routes: Routes = [
  {path:"", component:ProdottiComponent},
  {path:"carrello", component:CarrelloComponent, canActivate:[GuardService]},
  {path:"login", component:LoginComponent},
  {path:"profilo", component:ProfiloComponent, canActivate:[GuardService]},
  {path:"pagina-non-trovata", component:PaginaNonTrovataComponent},
  {path:"**", redirectTo:'pagina-non-trovata'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
