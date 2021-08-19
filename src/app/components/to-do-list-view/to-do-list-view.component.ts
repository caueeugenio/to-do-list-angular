import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Console } from "console";
import { ToDoListModel } from "src/app/model/to-do-list-model";

import { ToDoListViewService } from "./to-do-list-view.service";

@Component({
  selector: "app-to-do-list-view",
  templateUrl: "./to-do-list-view.component.html",
  styleUrls: ["./to-do-list-view.component.css"],
})
export class ToDoListViewComponent implements OnInit {
  list: ToDoListModel[];
  taskId: number;
  newTask = {
    title: "",
  };
  constructor(
    private toDoListViewService: ToDoListViewService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getTasks();
    this.taskId = this.activatedRoute.snapshot.params.taskId;
  }

  getTasks() {
    this.toDoListViewService.getList().subscribe(
      (data) => {
        this.list = data;
        console.log(this.list, data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getTaskById() {
    this.toDoListViewService.getById(this.taskId).subscribe(() => {
      (data) => {
        data.id;
      };
    });
  }
  saveTask(): void {
    const payload = {
      title: this.newTask.title,
    };

    this.toDoListViewService.addTask(payload).subscribe(
      (data) => {
        this.getTasks();

        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  delete(id: number) {
    this.toDoListViewService.deleteTask(id).subscribe(
      () => {
        this.getTasks();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
