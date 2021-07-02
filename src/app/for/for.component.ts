import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  courses: string[];
  students: any;
  color: string
  fontSize: number;
  useTdata:boolean
  classObj:object

  constructor() {
    this.courses = ["angular", "typescript", "react"];
    this.students = [{ fName: "gana", lName: "kumar", score: 100 },
    { fName: "hero", lName: "raj", score: 10 }];
    this.color = "green";
    this.fontSize = 70;
    this.useTdata=true
    this.classObj={
      tdata:this.useTdata
    }
  }

  ngOnInit(): void {
  }

}
