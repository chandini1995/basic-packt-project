import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  sellers: string[];
hide:boolean=false;

  constructor() {
    this.sellers = ["apple", "banana", "carrot", "keera"];
  }
  public getSellers() {
    return this.sellers;
  }

  toggle(){
    this.hide=!this.hide
  }

  ngOnInit(): void {
  }
}
