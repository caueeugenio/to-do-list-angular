import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoListModel } from 'src/app/model/to-do-list-model';

@Injectable({
  providedIn: "root",
})
export class ToDoListViewService {
  constructor(private httpClient: HttpClient) {}

  getList() {
    return this.httpClient.get<ToDoListModel[]>("http://localhost:3000/list");
  }

  getById(id:number){
    return this.httpClient.get<ToDoListModel>(`http://localhost:3000/list/${id}`)
  }

  addTask(payload) {
    return this.httpClient.post<ToDoListModel>(
      "http://localhost:3000/list",
      payload
    );
  }

  deleteTask(id: number):Observable<ToDoListModel> {
    return this.httpClient.delete<ToDoListModel>(
      `http://localhost:3000/list/${id}`
    );
  }
}
