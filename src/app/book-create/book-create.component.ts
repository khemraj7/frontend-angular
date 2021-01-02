import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service/service.service';
import swal from 'sweetalert'
import {Location} from '@angular/common';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookCreateComponent implements OnInit {

  book = {  };

  constructor(private http: HttpClient, private router: Router,public userService: ServiceService,private _location: Location ) { }

  ngOnInit() {
    if(localStorage.getItem('Users')){
      this.router.navigate(['/book-create'])
    }
    else{
      this.router.navigate(['/login'])
    }
  }

  saveBook() {
    let usr = localStorage.getItem('Users') ? JSON.parse(localStorage.getItem('Users') )  : {};
    this.book['user_id']= (usr && usr['_id']) ? usr['_id']:'';
    console.log(this.book)
    this.http.post('http://localhost:3000/book',this.book)
      .subscribe(res => {
        console.log(res)
          let id = res;
          console.log(id);
          this.onsubmit();
        }, (err) => {
          console.log(err);
        }
      );
  }

      
  onsubmit(){
    swal({
      title: "Book Added Successfully!",
      icon: "success",
    })
    .then(()=>{ 
      this.router.navigate(['/books']);
    })
    
  }
  backClicked() {
    this._location.back();
  }

}