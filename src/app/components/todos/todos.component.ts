import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!: Todo[];
  inputTodo: string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [];
  }

  toggleDone(id: number) {
    this.todos.map((val, i) => {
      if (i == id) {
        val.completed = !val.completed;
      }

      return val;
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((val, i) => i !== id);
  }

  addTodo () {
    if (this.inputTodo !== "") {
      this.todos.push({
        content: this.inputTodo,
        completed: false
      });
      this.inputTodo = "";
    }
  }
}
