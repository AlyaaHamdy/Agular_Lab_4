import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToDo } from '../model/todo';
import { APIResponse } from '../ViewModel/Apiresult';

@Injectable({
  providedIn: 'root'
})
export class TodoSevice {

  constructor(private http: HttpClient) {

  }
  getAll(): Observable<APIResponse<ToDo[]>> {
    //return this.http.get<APIResponse<ToDo[]>>("https://api.mohamed-sadek.com/Job/Get")
    return this.http.get<APIResponse<ToDo[]>>(environment.APIURl + "/Task/Get")
  }
  add(Task: ToDo) {
    console.log(Task)
    return this.http.post(environment.APIURl + "/Task/POST", Task)
  }
  Delete(id: number) {
    return this.http.delete(environment.APIURl + "/Task/Delete?id=" + id)
  }
  GetOne(id: number): Observable<APIResponse<ToDo>> {
    return this.http.get<APIResponse<ToDo>>(environment.APIURl + "/Task/GetByID?id=" + id)
}
}
