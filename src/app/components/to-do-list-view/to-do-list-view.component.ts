import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToDoListModel } from "src/app/model/to-do-list-model";
import { ToDoListViewService } from "./to-do-list-view.service";
import {
  faCheck,
  faCheckDouble,
  faCheckSquare,
  faEdit,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { Location } from "@angular/common";

@Component({
  selector: "app-to-do-list-view",
  templateUrl: "./to-do-list-view.component.html",
  styleUrls: ["./to-do-list-view.component.css"],
})
export class ToDoListViewComponent implements OnInit {
  deleteIcon = faWindowClose;
  editIcon = faEdit;
  checkIcon = faCheck;
  uncheckIcon = faCheckDouble;
  teste = faCheckSquare;
  status: boolean;
  list: ToDoListModel[];
  taskId: number;
  alert:boolean = false;
  timeLeft: number = 5;
  interval;

  constructor(
    private toDoListViewService: ToDoListViewService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.getTasks();
    this.taskId = this.activatedRoute.snapshot.params.taskId;
  }

  alertTimer() {
    setTimeout(() => {
      this.alert = false;
      this.getTasks();
    }, 3000);
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

  getTaskById() {
    this.toDoListViewService.getById(this.taskId).subscribe(() => {
      (data) => {
        data.id;
      };
    });
  }



  delete(id: number) {
    this.toDoListViewService.deleteTask(id).subscribe(
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
}
