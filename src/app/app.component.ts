import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  col:string = "red";
  change(){
    if(this.col=='red')
      this.col="blue";
    else 
     this.col="red";
  }
}
