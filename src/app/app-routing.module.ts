import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path:'student',component:StudentComponent
  },
  {
    path:'books',component:BooksComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'',component:HomeComponent
  },
  {
    path:'**',component:NoPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
