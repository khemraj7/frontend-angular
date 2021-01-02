import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public router: Router, public userService : ServiceService,
    private _location: Location) { }
  loggedIn:any
  userDisplayName = '';

  ngOnInit() {
    this.userDisplayName = JSON.parse(localStorage.getItem('Users'))['name'];
    console.log(this.userDisplayName)
  }
 
  onlogout(){
 localStorage.removeItem('Users');
  localStorage.clear();
  this.router.navigate(['/'])
  this.userService.loggedUser = undefined;
}

backClicked() {
  this._location.back();
}
}
