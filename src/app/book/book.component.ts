import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import swal from 'sweetalert'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  books: any;

  selectedEntities: any[];

  public setSelectedEntities($event: any) {
    this.selectedEntities = $event;
 }

  constructor(private getBook: ServiceService, private router: Router, public userService: ServiceService, private http: HttpClient) { }

 

  ngOnInit()  {
    
   
    if (localStorage.getItem('Users')) {
      this.router.navigate(['/books'])
    }
    else {
      this.router.navigate(['/login'])
    }

    this.getBook.getBooks().subscribe(data => {
      this.books = data;
     
      // this.dtOptions = {
      //   pagingType: 'full_numbers',
      //   pageLength: 2,
      //   autoWidth: true,
      //   order: [[0, 'desc']]
      // }

      //console.log('!!!!!!',this.books)
      for (let i = 0; i < this.books.length; i++) {
        this.books[i]["showDetails"] = 'showDetails hide';
      }
    });

  }
  enable(data) {
    let id = data._id;
    if (data.status) {
      swal({
        title: "Are you sure?",
        text: "Once In-Active, !",
        icon: "warning",
        buttons: ["cancel", true],
        dangerMode: true,
      })
        .then((willInActive) => {
          if (willInActive) {
            swal("Poof! Your imaginary file has been InActive!", {
              icon: "success",
            });
            data.status = false
          } else {
            swal("Your imaginary file is InActive!");
          }
        })
    }
    else {
      swal({
        title: "Are you sure?",
        text: "Once Active, !",
        icon: "warning",
        buttons: ["cancel", true],
        dangerMode: true,
      })
        .then((willActive) => {
          if (willActive) {
            swal("Poof! Your imaginary file has been Active!", {
              icon: "success",
            });
            data.status = true
          } else {
            swal("Your imaginary file is Active!");
          }
        })
    }
    this.http.put('http://localhost:3000/book/' + id, data)
      .subscribe(res => {
        // let id = res['_id'];
        // this.router.navigate(['/book-details', id]);
      }, (err) => {
        console.log(err);
      }
      );
  }
  sortList(){
    console.log("sortList triggered")
  }
}


