import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent implements OnInit {
   
  
  sum:string | undefined;
  constructor() {
    
   }

  ngOnInit(): void {
    console.log("here!")

  }
  

  onLogin(user: string) {
    this.sum ="The ascii sum of your word is: "+user;
    }
}
