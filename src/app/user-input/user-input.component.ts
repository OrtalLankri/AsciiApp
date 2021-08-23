import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  asciiSum: any;
  @Output() login = new EventEmitter<string>();
  constructor(private http: HttpClient){
  }

  ngOnInit(): void {

  }

  onSubmit(hebrewWord: HTMLInputElement){
    this.http.get('https://localhost:5001/api/AsciiSum/CalculateSum/'+hebrewWord.value, ).subscribe(response=>{
      this.asciiSum=response;
      console.log(response)
      this.login.emit(this.asciiSum);
    }, error=>{
      console.log("error");
      this.asciiSum="error, word is not in the dictionary!";
      this.login.emit(this.asciiSum);
    })
    

  }  
}
