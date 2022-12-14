import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor(private auth:AuthService,private router:Router) {

   }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.auth.isAuthenticated().then(auth => {
      if (auth) {
        return true
      } else {
        this.router.navigate(["/login"])
        return false
      }
    })
  }
   
}
