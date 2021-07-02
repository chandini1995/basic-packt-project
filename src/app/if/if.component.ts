import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {
x:number;
y:number;
s:string
  constructor() { 
    this.x=20
    this.y=45
    this.s="success"
  }
myFun(){
  return true;
}
  ngOnInit(): void {
  }

}
