import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service/service.service';
import swal from 'sweetalert'
import {Location} from '@angular/common';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookEditComponent implements OnInit {

  book = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, public userService : ServiceService
    ,private _location: Location) { }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
    
  }

  getBook(id) {
    this.http.get('http://localhost:3000/book/'+id).subscribe(data => {
      this.book = data;
    });
  }

  updateBook(id, data) {
    this.http.put('http://localhost:3000/book/'+id, data)
      .subscribe(res => {
           let id = res['Updated_Book']['_id'];
          console.log(res)
          swal({
            title: "Are you sure?",
            text: "Once updated, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: ["cancel", true] ,
            dangerMode: true,
          })
          .then((willUpdate) => {
            if (willUpdate) {
              swal("Poof! Your imaginary file has been updated!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is not updated!");
            }
          })
          .then(()=>{
           this.router.navigate(['/book-details',id]);
          })

        }, (err) => {
          console.log(err);
        }
      );
  }
  backClicked() {
    this._location.back();
  }
}