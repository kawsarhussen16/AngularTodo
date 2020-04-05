import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from 'src/app/models/Todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor(private TodoService: TodoService) {}

  ngOnInit(): void {}

  //set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };
    return classes;
  }
  onToggle(todo) {
    // toggle in UI
    todo.completed = !todo.completed;
    // Toggle in Server
    this.TodoService.toggleCompleted(todo).subscribe((todo) =>
      console.log(todo)
    );
  }
  onDelete(todo) {
    console.log('Delete');
  }
}
