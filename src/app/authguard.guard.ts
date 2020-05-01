import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
loggedIn
  constructor( private router: Router){
    this.loggedIn = sessionStorage.getItem("loggedIn");
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

   

    if (localStorage.getItem("loggedIn") != null) {
     
      return true;
    }else  {
      this.router.navigate(["login"]);
      return false;
    }




  }
}
  
