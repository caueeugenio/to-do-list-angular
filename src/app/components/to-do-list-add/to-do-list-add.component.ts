import { Location } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ToDoListModel } from "src/app/model/to-do-list-model";
import { ToDoListViewService } from "../to-do-list-view/to-do-list-view.service";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";

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
  deleteIcon = faWindowClose;
  timeLeft: number = 5;
  interval;
  alert: boolean = false;
  constructor(
    private toDoListViewService: ToDoListViewService,
    private location: Location
  ) {}

  ngOnInit() {}

  alertTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.location.back();
      }
    }, 1000);
  }

  saveTask(): void {
    const payload = {
      title: this.newTask.title,
    };

    this.toDoListViewService.addTask(payload).subscribe(
      () => {
        this.getTasks();
        this.alert = true;
        this.alertTimer();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  closeAlert() {
    this.alert = false;
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
