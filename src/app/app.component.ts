import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo List';
  // constructor(){
  //   setTimeout(()=>{
  //     this.title = 'todo list'
  //   },2000)
  // }
}
