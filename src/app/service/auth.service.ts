import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router
    ) { }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('token'))
      return true;

    this.router.navigate(['/login']);
    return false;

  }
  
}
