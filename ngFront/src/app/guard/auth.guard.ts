import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RestService } from '../services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  token: string;

  constructor(private router: Router, private restService: RestService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.token = localStorage.getItem('token');
    if (this.token != null) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }
  
}
