import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToDoListModel } from "src/app/model/to-do-list-model";
import { ToDoListViewService } from "./to-do-list-view.service";
import {
  faBackward,
  faCheck,
  faCheckCircle,
  faCheckDouble,
  faCheckSquare,
  faPause,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-to-do-list-view",
  templateUrl: "./to-do-list-view.component.html",
  styleUrls: ["./to-do-list-view.component.css"],
})
export class ToDoListViewComponent implements OnInit {
  deleteIcon = faWindowClose;
  checkIcon = faCheck;
  uncheckIcon = faCheckDouble;
  teste = faCheckSquare
  status: boolean;
  list: ToDoListModel[];
  taskId: number;

  constructor(
    private toDoListViewService: ToDoListViewService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getTasks();
    this.taskId = this.activatedRoute.snapshot.params.taskId;
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
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
