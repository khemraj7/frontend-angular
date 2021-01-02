import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import swal from  'sweetalert';
import {Location} from '@angular/common';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailComponent implements OnInit {

  book = {};
  //showpopup = false;
  showDetails = 'showDetails hide';

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,public userService : ServiceService,
    private _location: Location) { }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
    if(localStorage.getItem('Users')){
      this.router.navigate(['/book-details/'])
    }
    else{
      this.router.navigate(['/login'])
    }
  }

  getBookDetail(id) {
    this.http.get('http://localhost:3000/book/'+id).subscribe(data => {
      this.book = data;
    });
  }

  deleteBook(id) {
    this.http.delete('http://localhost:3000/book/'+id)
      .subscribe(res => {
       this.onsubmit();
        }, (err) => {
          console.log(err);
        }
      );
      }
      onsubmit(){
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: ["cancel", true],
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      })
      .then(()=>{
        this.router.navigate(['/books']);
      })
}
backClicked() {
  this._location.back();
}
}