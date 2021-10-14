import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToDoListModel } from "src/app/model/to-do-list-model";
import { ToDoListViewService } from "../to-do-list-view/to-do-list-view.service";

@Component({
  selector: "app-to-do-list-detail",
  templateUrl: "./to-do-list-detail.component.html",
  styleUrls: ["./to-do-list-detail.component.css"],
})
export class ToDoListDetailComponent implements OnInit {
  task: any;
  id: string;
  alert:boolean = false;
  timeLeft: number = 5;
  interval;
  constructor(
    private toDoListViewService: ToDoListViewService,
    private route: ActivatedRoute,
    private location:Location
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getTasks();
  }

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

  getTasks() {
    this.toDoListViewService.getById(this.id).subscribe(
      (data) => {
        this.task = data;
        console.log(data.title);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  saveTask(): void {
    const payload = {
      title: this.task.title,
    };

    this.toDoListViewService.editTask(this.id, payload).subscribe(
      () => {
        console.log(payload);
        this.getTasks();
        this.alert = true;
        this.alertTimer();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
