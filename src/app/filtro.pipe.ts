import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { Prodotto } from './dati/tipoProdotto';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

transform(item: Prodotto[],filterString:string):any {
  const result:any=[]

  if(!item || filterString==='' )
  {
    return item
  }

  item.forEach((prodotto:Prodotto)=>{
    if(prodotto.nome.trim().toLowerCase().includes(filterString.toLowerCase())){
      result.push(prodotto)
    }
  });
  

  return result;
}


}
