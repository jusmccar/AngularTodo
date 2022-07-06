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
    this.todos = this.getTodos();
  }

  toggleDone(id: number) {
    this.todos.map((val, i) => {
      if (i == id) {
        val.completed = !val.completed;
      }

      this.setTodos();

      return val;
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((val, i) => i !== id);

    this.setTodos();
  }

  addTodo() {
    if (this.inputTodo !== "") {
      this.todos.push({
        content: this.inputTodo,
        completed: false
      });

      this.inputTodo = "";

      this.setTodos();
    }
  }

  setTodos() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  getTodos() {
    return JSON.parse(localStorage.getItem("todos")!);
  }
}
