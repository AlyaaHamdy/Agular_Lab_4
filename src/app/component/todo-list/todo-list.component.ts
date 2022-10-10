import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToDo } from 'src/app/model/todo';
import { TodoSevice } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  isloading!: boolean;

  constructor(private TodoSevice: TodoSevice, private Router: Router) { }

  Subscription!: Subscription;
  list: ToDo[] = [];

  ngOnInit(): void {
    this.isloading = true;

    this.FetchData()
  }
  FetchData() {
    this.Subscription = this.TodoSevice.getAll().subscribe(
      {
        next: (response) => {
          console.log(response)
          this.list = response.Data;
          this.isloading = false;
        },
        error: (error) => {
          console.log(error)
          if (error["status"] == 401)
            this.Router.navigate(["/login"]);

        },

      })

  }
  Delete(id:number){
    this.TodoSevice.Delete(id).subscribe({
      next:(value)=>{
        console.log(value)
        this.FetchData()
      }
    }

    )
  }
  ngOnDestroy(): void {
    this.Subscription.unsubscribe()
  }
}



