import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToDo } from 'src/app/model/todo';
import { TodoSevice } from 'src/app/service/todo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  addTaskForm: FormGroup;
  Task!: ToDo;
  constructor(private TodoService: TodoSevice, private Router: Router) {
    this.addTaskForm = new FormGroup(
      {
        Id: new FormControl(this.Task?.ID ?? 0, [Validators.required]),
        Title: new FormControl(this.Task?.Title ?? " ", [Validators.required]),
        IsDone: new FormControl(this.Task?.IsDone ?? false, [Validators.required]),
        CreatedDate: new FormControl(this.Task?.CreatedDate ?? " ", [Validators.required]),
      })
  }

  ngOnInit(): void {
  }

  add() {
    this.Task = this.addTaskForm.value as ToDo
    this.TodoService.add(this.Task).subscribe(
      {
        next: (value) => {
          console.log(value)
          this.Router.navigateByUrl("/creatTask")
        },
        error: (error) => {
          console.log(error)
        }
      }
    )
  }


}
