import { Component ,Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos-items',
  templateUrl: './todos-items.component.html',
  styleUrls: ['./todos-items.component.scss']
})
export class TodosItemsComponent implements OnInit {
  @Input()
  todo!: Todo;

  @Output()
   todoDelete : EventEmitter<Todo> = new EventEmitter() ;
   todoCheckboxmark : EventEmitter<Todo> = new EventEmitter() ;
   
  ngOnInit(): void {
      
  }
  onClick(todo:Todo){
    this.todoDelete.emit(todo)
    console.log("Delete")
  }

  oncheckBoxClick(todo:Todo){
    this.todoCheckboxmark.emit(todo)
    console.log('item tsx chckbox')
  }
}
