import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDo } from 'src/app/model/todo';
import { TodoSevice } from 'src/app/service/todo.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  
  ID:number=0;
  Task!:ToDo;
  
  constructor(private Router:Router,private TaskService:TodoSevice,private active:ActivatedRoute) { }

  ngOnInit(): void {
    console.log('init')
    this.ID= Number( this.active.snapshot.paramMap.get('id'))
    this.TaskService.GetOne(this.ID).subscribe(
      (Response)=>{
        this.Task=Response.Data
      }
    )
  }

  test(){

    this.Router.navigate(["/students",100])
    
    }

}
