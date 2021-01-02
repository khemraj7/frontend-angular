import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  BASE_URL = environment.apiURL;
  user: {
    username: '',
    id: ''

  };
  loggedUser;

  constructor(private http: HttpClient,) {

  }

  getBooks() {
    let usr = localStorage.getItem('Users') ? JSON.parse(localStorage.getItem('Users')) : {}
    // Object.keys(filters).map(el=>{
    //   queryParams += queryParams + `?${el}=${filters[el]}`
    // })
    // console.log(usr)
    return this.http.get<any>(this.BASE_URL + "/book", { params: { user_id : usr['_id'] } });
  }
  getBook(id: any) {
    return this.http.get<any>(this.BASE_URL + "/book-detail")
  }
  authUser(user: any) {
    let UserArray = [];
    if (localStorage.getItem('Users')) {
      UserArray = JSON.parse(localStorage.getItem('Users'));
    }
    return UserArray.find(p => p.username === user.username)
  }
  loggedin() {
    //console.log(localStorage.getItem(''))
    return localStorage.getItem('Users') ? true : false
  }
getUser(){
  let usr = localStorage.getItem('Users') ? JSON.parse(localStorage.getItem('Users')) : {}

  return this.http.get<any>('http://localhost:3000/user/user' + "/profile", { params: { user_id : usr['_id'] } });
}
}

