import { Component } from "@angular/core";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "to-do-list";

  constructor(){}
  ngOnInit() {

  }

  // getTodoList() {
  //   this.toDolistService.getList().pipe<any>
  //   (
  //     data {
  //       id,title
  //     });
  // }
}
