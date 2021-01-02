import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service/service.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    username:'',
    id:''
   };
  error: any;
  

  constructor(private http: HttpClient, private router: Router, private userService: ServiceService ) { }

  ngOnInit() {
  if(localStorage.getItem('Users')){
    this.router.navigate(['/books'])
  }
  }
  saveUser() {
    //console.log(this.user)
    this.http.post('http://localhost:3000/user/login', this.user)
    .subscribe(res => {
      console.log(res);
      this.user.id = res['_id'];
      if(res && res['status']==200){ 
         
        localStorage.setItem('Users',JSON.stringify(res['user']));
        this.userService.loggedUser = localStorage.getItem('Users');
        console.log(this.userService.loggedUser);
      }
      else if(res && (res['status']==206 || res['status']==404)){
        this.error =res['message'];
      }
    swal({
      title: "Login Successfully!",
      icon: "success",
    })
    .then(()=>{
      this.router.navigate(['/books']);
     
    })
        }, (err) => {
          console.log(err);
        }
      );
  }
}
