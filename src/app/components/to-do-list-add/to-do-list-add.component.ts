import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToDoListModel } from "src/app/model/to-do-list-model";
import { ToDoListViewService } from "../to-do-list-view/to-do-list-view.service";

@Component({
  selector: "app-to-do-list-add",
  templateUrl: "./to-do-list-add.component.html",
  styleUrls: ["./to-do-list-add.component.css"],
})
export class ToDoListAddComponent implements OnInit {
  newTask = {
    title: "",
  };
  list: ToDoListModel[];
  constructor(private toDoListViewService: ToDoListViewService, private router:Router) {}

  ngOnInit() {}

  saveTask(): void {
    const payload = {
      title: this.newTask.title,
    };

    this.toDoListViewService.addTask(payload).subscribe(
      () => {
        this.getTasks();
        this.router.navigate[''];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getTasks() {
    this.toDoListViewService.getList().subscribe(
      (data) => {
        this.list = data;
  
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
