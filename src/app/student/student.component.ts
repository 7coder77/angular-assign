import { Component, OnInit } from '@angular/core';
import { NewService } from '../ser/new.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private api:NewService) { }

  ngOnInit(): void {
    this.getlocaldata();
  }
  resdata!:any;
  getlocaldata(){
    this.api.getStudent().subscribe(res=>{
      this.resdata=res;
    })
  }
  deldata(data:any){
    this.api.deletestudent(data.rollnumber).subscribe(res=>{
      alert("data deleted successfully😅😅😅");
      this.getlocaldata();
    },
    err=>console.error(err))
  }
}
