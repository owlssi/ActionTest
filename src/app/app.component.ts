import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Max';
  allowNewServer = true;

  constructor(){

    setTimeout(()=>{this.allowNewServer = false},2000);
  }
  getAge(){
    return 1;
  }
}
