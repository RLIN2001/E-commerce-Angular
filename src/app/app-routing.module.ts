import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrelloComponent } from './carrello/carrello.component';
import { ProdottiComponent } from './prodotti/prodotti.component';

const routes: Routes = [
  {path:"", component:ProdottiComponent},
  {path:"carrello", component:CarrelloComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
