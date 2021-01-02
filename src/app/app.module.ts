import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DataTableModule } from "ng2-data-table";
import { ProfileComponent } from './profile/profile.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
// const appRoutes: Routes = [
  // { 
  //   path: 'login',
  //   component:LoginComponent,
  // },
  // {
  //    path: 'signup',
  //   component:SignupComponent,
  //   data: { title: 'Register Here' }
  // },
//   {
//     path: 'books',
//     component: BookComponent,
//     data: { title: 'Book List' }
//   },
//   {
//     path: 'book-details/:id',
//     component: BookDetailComponent,
//     data: { title: 'Book Details' }
//   },
//   {
//     path: 'book-create',
//     component: BookCreateComponent,
//     data: { title: 'Create Book' }
//   },
//   {
//     path: 'book-edit/:id',
//     component: BookEditComponent,
//     data: { title: 'Edit Book' }
//   },
//   { path: '',
//     redirectTo: '/books',
//     pathMatch: 'full'
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    LoginComponent,
    SignupComponent,
    NavBarComponent,
    ProfileComponent,
    ProfileUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    DataTableModule
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
