import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;
  userDisplayName:'';
  email:'';
  mobile:'';
  constructor( private router: Router, private getUser: ServiceService ) { }

  ngOnInit() {
    if (localStorage.getItem('Users')) {
      this.router.navigate(['/profile'])
    }
    else {
      this.router.navigate(['/login'])
    }
    this.getUser.getUser().subscribe(data => {
      this.user = data;
    });
    this.userDisplayName = JSON.parse(localStorage.getItem('Users'))['name'];
    this.email = JSON.parse(localStorage.getItem('Users'))['email'];
    this.mobile = JSON.parse(localStorage.getItem('Users'))['mobile'];
  }


}
