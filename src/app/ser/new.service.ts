import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewService {
  // stu="http://localhost:3000/students"
  stu="https://7coder77.github.io/jsonapi/db.json"
  constructor(private httpclient : HttpClient) { }

  // getStudent(){
  //   return this.httpclient.get<any>(this.stu).pipe(map(res=>{
  //     return res;
  //   }))
  // }
  
  getStudent(){
    return this.httpclient.get<any>(this.stu).pipe(map(res=>{
      return res.students;
    }))
  }
}
