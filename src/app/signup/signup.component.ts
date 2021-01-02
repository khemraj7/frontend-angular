import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service/service.service';
import swal from 'sweetalert'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    name :'',
    email:'',
    gender:'',
    mobile:Number,
    _id:''
  };

  constructor(private http: HttpClient, private router: Router, public userService: ServiceService) { }

  ngOnInit() {
    if(localStorage.getItem('Users')){
      this.router.navigate(['/books'])
    }
    else{
      this.router.navigate(['/signup'])
    }
  }
  saveUser() {
   
          swal({
            title: "SignUp Successfully!",
            icon: "success",
          })
          .then(()=>{
            this.http.post('http://localhost:3000/user/signup', this.user)
            .subscribe(res => {
              console.log(res);
              this.user._id = res['_id'];
              console.log(this.user)
              if(res){
                this.userService.authUser = res['user'];
                localStorage.setItem('Users',JSON.stringify(this.user));
              }      
          let id = res['user'];
              this.router.navigate(['/book-create', {user: id}]);
        })
        
         
        }, (err) => {
          console.log(err);
        }
      );
  }
  
}
